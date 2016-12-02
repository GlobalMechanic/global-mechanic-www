'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _path2 = require('path');

var _path3 = _interopRequireDefault(_path2);

var _promiseQueue = require('promise-queue');

var _promiseQueue2 = _interopRequireDefault(_promiseQueue);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/
var ALREADY_EXISTS = (0, _symbol2.default)('already-exists');

var fileStorage = _path3.default.resolve(__dirname, '../../storage/files');
var queue = new _promiseQueue2.default(1, Infinity);
var gears = null;

/******************************************************************************/
// Helper
/******************************************************************************/

function getIn(obj, paths) {
  paths = is(paths, Array) ? paths : [paths];
  var final = paths.length - 1;

  for (var i = 0; i < paths.length; i++) {
    var _path = paths[i];
    var atFinal = i === final;

    if (atFinal) return obj[_path];

    if ((0, _typeof3.default)(obj[_path]) !== 'object') return undefined;

    obj = obj[_path];
  }
}

function ensureFile(id) {

  //check if the file exists
  queue.add(function () {
    return _fsPromise2.default.readdir(fileStorage).then(function (files) {
      var file = files.filter(function (file) {
        return file.includes(id);
      })[0];
      return file === undefined ? (0, _isomorphicFetch2.default)(gears.host + '/files/' + id) : ALREADY_EXISTS;
    })
    //download it from gears if it doesn't
    .then(function (res) {
      if (res === ALREADY_EXISTS) return;

      if (res.status !== 200) throw new Error(res.body);

      var type = res.headers._headers['content-type'][0];
      var ext = type.substr(type.indexOf('/') + 1);
      var write = _fsPromise2.default.createWriteStream(_path3.default.join(fileStorage, id + '.' + ext));

      return new _promise2.default(function (resolve, reject) {
        res.body.pipe(write);
        res.body.on('end', resolve);
        res.body.on('error', reject);
      });
    }).catch(function (err) {
      return log.error('Error fetching file ' + id, err);
    });
  });
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

  return gears.client.authenticate((0, _extends3.default)({ type: 'local' }, gears.auth)).catch(function (err) {
    return log.error(err);
  });
}

function sync(from, to) {
  for (var _len = arguments.length, filePaths = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    filePaths[_key - 2] = arguments[_key];
  }

  var ensureFiles = function ensureFiles(doc) {
    filePaths.forEach(function (path) {
      var fileId = getIn(doc, path);
      if (fileId) ensureFile(fileId);
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
          return to.create(doc);
        });
        return _promise2.default.all(promises);
      })

      //download any files associated with the docs created
      .then(function (docs) {
        return docs.forEach(ensureFiles);
      });
    });
  };

  var change = function change(res) {
    return to.update(res._id, res).then(ensureFiles);
  };
  var create = function create(res) {
    return to.create(res).then(ensureFiles);
  };
  var remove = function remove(res) {
    return to.remove(res._id);
  };

  gears.client.io.on('authenticated', populate);
  from.on('patched', change);
  from.on('updated', change);
  from.on('created', create);
  from.on('removed', remove);
}