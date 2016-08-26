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

var _vimeo = require('vimeo');

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/

/******************************************************************************/
// Dependencies
/******************************************************************************/

var library = void 0;

var SIX_HOURS = 1000 * 60 * 60 * 6; // ms * sec * min

var REQUEST_HEADERS = {
  Accept: 'application/vnd.vimeo.*+json;version=3.0'
};

var QUERY = {
  page: 1,
  per_page: 100
};

var cache = {
  portfolios: {
    timestamp: null,
    data: {}
  },
  videos: {
    timstamp: null,
    data: {}
  }
};

/******************************************************************************/
// Helper
/******************************************************************************/
function valid(timestamp) {
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
      if (err) return rej(err);

      res(body.data.map(function (video) {
        video.portfolio = portfolio_id;
        return video;
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

  cache.videos.timestamp = new Date();
  cache.videos.data = {};

  return portfolios().then(function () {
    return authenticate(true);
  }).then(function () {
    var folios = cache.portfolios.data;
    var promises = [];
    for (var i in folios) {
      var folio = folios[i];
      promises.push(fetch_videos(folio.id));
    }

    return Promise.all(promises);
  }).then(function (results) {

    for (var i = 0; i < results.length; i++) {
      for (var ii = 0; ii < results[i].length; i++) {
        cache.videos.data[results[i][ii].id] = results[i][ii];
      }
    }return cache.data.videos;
  });
}

function portfolios() {

  if (valid(cache.portfolios.timestamp)) return Promise.resolve(cache.portfolios.data);

  cache.portfolios.timestamp = new Date();
  cache.portfolios.data = {};

  return fetch_portfolios(true).then(function (private_portfolios) {
    for (var i = 0; i < private_portfolios.length; i++) {
      var folio = private_portfolios[i];
      folio.scope = 'private';
      cache.portfolios.data[folio.id] = folio;
    }

    return fetch_portfolios(false);
  }).then(function (public_portfolios) {
    for (var i = 0; i < public_portfolios.length; i++) {
      var folio = public_portfolios[i];
      folio.scope = 'public';
      //overwriting what was just placed there in the private loop, but who cares
      cache.portfolios.data[folio.id] = folio;
    }

    return cache.portfolios.data;
  });
}
//# sourceMappingURL=/Users/bengaumond/Programming/global-mechanic-www/dist-server-maps/modules/gm-vimeo.js.map