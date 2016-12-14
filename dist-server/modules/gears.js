'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

exports.default = initialize;
exports.service = service;
exports.login = login;
exports.sync = sync;

var _client = require('feathers/client');

var _client2 = _interopRequireDefault(_client);

var _feathersHooks = require('feathers-hooks');

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

var _client3 = require('feathers-socketio/client');

var _client4 = _interopRequireDefault(_client3);

var _client5 = require('feathers-authentication/client');

var _client6 = _interopRequireDefault(_client5);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _mongodb = require('mongodb');

var _fileStorage = require('modules/file-storage');

var _promiseQueue = require('promise-queue');

var _promiseQueue2 = _interopRequireDefault(_promiseQueue);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/

// import path from 'path'
var ALREADY_EXISTS = (0, _symbol2.default)('already-exists');

var queue = new _promiseQueue2.default(4, Infinity);
var gears = null;

/******************************************************************************/
// Helper
/******************************************************************************/

function getIn(obj, paths) {
  paths = is(paths, Array) ? paths : [paths];
  var final = paths.length - 1;

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    var atFinal = i === final;

    if (atFinal) return obj[path];

    if ((0, _typeof3.default)(obj[path]) !== 'object') return undefined;

    obj = obj[path];
  }
}

function ensureFile(id, thumb) {

  var pro = thumb ? '?process=' + thumb : '';
  var key = thumb ? id + '-thumb' : id;

  //check if the file exists
  queue.add(function () {
    return (0, _fileStorage.hasFile)(key).then(function (has) {
      return has ? ALREADY_EXISTS : (0, _isomorphicFetch2.default)(gears.host + '/files/' + id + pro);
    })
    //download it from gears if it doesn't
    .then(function (res) {
      if (res === ALREADY_EXISTS) return ALREADY_EXISTS;

      if (res.status !== 200) throw new Error(res.body);

      var type = res.headers._headers['content-type'][0];
      var ext = '.' + type.substr(type.indexOf('/') + 1);

      return (0, _fileStorage.writeFile)(key, ext, res.body);
    }).catch(function (err) {
      return log.error('Error fetching file ' + id, err);
    });
  });
}

//So, it turns out, if you supply an id to feathers for mongodb, it wont auto-cast it
//to a ObjectId. It does cast all other queries to ObjectId, so if you create a bunch
//of objects with string ids, and then look for them with string ids, you wont find anything.

//I'm not complaining, though. I don't want to use string ids, anyway.
function castId(doc) {
  doc._id = (0, _mongodb.ObjectId)(doc._id);

  return doc;
}

/******************************************************************************/
// Exports
/******************************************************************************/

function initialize() {

  var app = this;
  gears = app.get('gears');

  var socket = (0, _socket2.default)(gears.host);

  gears.client = (0, _client2.default)().configure((0, _feathersHooks2.default)()).configure((0, _client4.default)(socket)).configure((0, _client6.default)());

  gears.client.io.on('reconnect', login);
  gears.client.io.on('disconnect', function () {
    return log('disconnected from gears');
  });
  gears.client.io.on('authenticated', function () {
    return log('logged in to gears');
  });

  login();
}

function service(name) {
  return gears.client.service(name);
}

function login() {
  log('logging into gears...');
  return gears.client.authenticate((0, _extends3.default)({ type: 'local' }, gears.auth)).catch(function (err) {
    return log.error(err);
  });
}

function sync(from, to) {
  for (var _len = arguments.length, downloads = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    downloads[_key - 2] = arguments[_key];
  }

  var ensureFiles = function ensureFiles(doc) {

    downloads.forEach(function (instruction) {
      var path = instruction.path;
      var thumb = instruction.thumb;
      var full = instruction.full;

      var fileId = getIn(doc, path);
      var fileIds = is(fileId, Array) ? fileId : [fileId];

      fileIds.forEach(function (fileId) {
        if (fileId && thumb) ensureFile(fileId, thumb);

        if (fileId && full) ensureFile(fileId);
      });
    });
  };

  var populate = function populate() {
    from

    //find all the docs from gears
    .find({}).then(function (docs) {
      return to

      //remove all the local docs
      .remove(null).then(function () {

        //fill all the local docs with data from gears
        var promises = docs.map(function (doc) {
          return to.create(castId(doc)).catch(function (err) {
            return log.error('Error creating item:', err);
          });
        });

        return _promise2.default.all(promises);
      })

      //download any files associated with the docs created
      .then(function (docs) {
        return docs.forEach(ensureFiles);
      });
    }).catch(function (err) {
      return log.error('Error populating service', err);
    });
  };

  var change = function change(res) {
    return to.update(res._id, res).then(ensureFiles).catch(function (err) {
      return log(err);
    });
  };

  var create = function create(res) {
    return to.create(castId(res)).then(ensureFiles).catch(function (err) {
      return log(err);
    });
  };

  var remove = function remove(res) {
    return to.remove(res._id).catch(function (err) {
      return log(err);
    });
  };

  gears.client.io.on('authenticated', populate);
  from.on('patched', change);
  from.on('updated', change);
  from.on('created', create);
  from.on('removed', remove);
}