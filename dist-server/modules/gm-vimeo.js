'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

exports.default = function () {

  var app = this;

  var vimeoOptions = app.get('vimeo');
  for (var i in vimeoOptions) {
    config[i] = (0, _isExplicit2.default)(vimeoOptions[i], Object) ? Object.assign({}, vimeoOptions[i]) : vimeoOptions[i];
  }library = new _vimeo.Vimeo(config.clientId, config.clientSecret);
};

exports.videos = videos;
exports.portfolios = portfolios;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

var _vimeo = require('vimeo');

var _nedb = require('nedb');

var _nedb2 = _interopRequireDefault(_nedb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/

var library = void 0; /******************************************************************************/
// Dependencies
/******************************************************************************/


var SIX_HOURS = 1000 * 60 * 60 * 6; // ms * sec * min

var REQUEST_HEADERS = Object.freeze({
  Accept: 'application/vnd.vimeo.*+json;version=3.0'
});

var QUERY = Object.freeze({
  page: 1,
  per_page: 100
});

var cache = {
  portfolios: require('../../cache/portfolios'),
  videos: require('../../cache/videos'),
  write: function write() {
    _fs2.default.writeFile(_path2.default.resolve(__dirname, '../../cache/portfolios.json'), JSON.stringify(this.portfolios, null, 2));
    _fs2.default.writeFile(_path2.default.resolve(__dirname, '../../cache/videos.json'), JSON.stringify(this.videos, null, 2));
  }
};

/******************************************************************************/
// Helper
/******************************************************************************/
function valid(timestamp) {
  if ((0, _isExplicit2.default)(timestamp, String)) timestamp = Date.parse(timestamp);

  var since = new Date() - (timestamp || 0);
  return since < SIX_HOURS;
}

function authenticate(asGM) {
  if (asGM) {
    log('Authenticate Vimeo as Global Mechanic');
    library.access_token = config.privateAccess.token;

    return Promise.resolve(library.access_token);
  }

  if (!asGM && config.publicAccess.token) {
    log('Authenticate Vimeo as anonymous');
    library.access_token = config.publicAccess.token;

    return Promise.resolve(library.access_token);
  }

  return new Promise(function (resolve, reject) {
    log('Generating Vimeo Credentials');
    library.generateClientCredentials(config.publicAccess.scope, function (err, token) {
      if (err) reject(err);

      if (token.access_token) {
        library.access_token = config.publicAccess.token = token.access_token;
        resolve();
      }
    });
  });
}

function fetch_videos(portfolio_id) {

  return new Promise(function (res, rej) {
    library.request({
      path: '/users/' + config.accountId + '/portfolios/' + portfolio_id + '/videos?sort=manual',
      query: QUERY
    }, function (err, body) {

      if (err) rej(err);else res(body.data.map(function (video) {
        return {
          id: video.uri.split('/')[2],
          name: video.name,
          description: video.description,
          duration: video.duration,
          width: video.width,
          height: video.height,
          embedHtml: video.embed.html,
          portfolio: video.portfolio,
          urls: {
            thumb: video.pictures.sizes.map(function (thumb) {
              return thumb.link;
            }),
            file: video.files.map(function (file) {
              return file.link;
            }),
            main: video.link
          },
          status: video.status
        };
      }));
    });
  }).catch(function (err) {
    return console.log(err);
  });
}

function fetch_portfolios(_private) {

  return authenticate(_private).then(function () {
    return new Promise(function (res, rej) {
      library.request({
        path: '/users/' + config.accountId + '/portfolios?sort=alphabetical',
        query: QUERY,
        headers: REQUEST_HEADERS
      }, function (err, body) {
        if (err) return rej(err);

        res(body.data.map(function (folio) {
          return {
            id: folio.uri.split('/')[4],
            name: folio.name,
            description: folio.description,
            updated: new Date(folio.modified_time),
            link: folio.link
          };
        }));
      });
    });
  }).catch(function (err) {
    return console.log(err);
  });
}

/******************************************************************************/
// Exports
/******************************************************************************/

var config = exports.config = {};

function videos() {
  if (valid(cache.videos.timestamp)) return Promise.resolve(cache.videos.data);

  var timestamp = new Date();
  var data = {};

  return portfolios().then(function () {
    return authenticate(true);
  }).then(function () {
    var folios = cache.portfolios.data;
    var promises = [];
    for (var i in folios) {
      var folio = folios[i];
      promises.push(fetch_videos(folio.id));
    }

    console.log(promises.length, "NUM PROMISES");

    return Promise.all(promises);
  }).then(function (results) {
    if (!(0, _isExplicit2.default)(results, Array)) {
      console.log('EXPECTED AN ARRAY BUT GOT:');
      console.log(results);
      throw new Error('Results arn\'t getting turned into an array.');
    }

    for (var i = 0; i < results.length; i++) {
      var _videos = results[i];
      if ((0, _isExplicit2.default)(_videos, Array)) {
        for (var ii = 0; ii < _videos.length; ii++) {
          var video = _videos[ii];
          data[video.id] = video;
        }
      } else {
        console.log('EXPECTED AN ARRAY BUT GOT:');
        console.log(_videos);
      }
    }
  }).then(function () {

    cache.videos.data = data;
    cache.videos.timestamp = timestamp;
    cache.write();

    return cache.videos.data;
  }).catch(function (err) {
    console.log(err);
  });
}

function portfolios() {

  if (valid(cache.portfolios.timestamp)) return Promise.resolve(cache.portfolios.data);

  var timestamp = new Date();
  var data = {};

  return fetch_portfolios(true).then(function (private_portfolios) {
    for (var i = 0; i < private_portfolios.length; i++) {
      var folio = private_portfolios[i];
      folio.scope = 'private';
      data[folio.id] = folio;
    }

    return fetch_portfolios(false);
  }).then(function (public_portfolios) {
    for (var i = 0; i < public_portfolios.length; i++) {
      var folio = public_portfolios[i];
      folio.scope = 'public';
      //overwriting what was just placed there in the private loop, but who cares
      data[folio.id] = folio;
    }
  }).then(function () {
    cache.portfolios.data = data;
    cache.portfolio.timestamp = timestamp;
    cache.write();

    return cache.portfolio.data;
  }).catch(function (err) {
    console.error(err);

    return cache.portfolio.data;
  });
}
//# sourceMappingURL=/Users/bengaumond/Programming/global-mechanic-www/dist-server-maps/modules/gm-vimeo.js.map