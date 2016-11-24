'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _feathersClient = require('feathers-client');

var _feathersClient2 = _interopRequireDefault(_feathersClient);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)('http://localhost:4100');

var credentials = null;

var gears = (0, _feathersClient2.default)().configure(_feathersClient2.default.hooks()).configure(_feathersClient2.default.socketio(socket)).configure(_feathersClient2.default.authentication());

gears.login = function (newCreds) {
  if (is(newCreds, Object)) credentials = newCreds;

  if (!credentials) return;

  gears.authenticate((0, _extends3.default)({ type: 'local' }, credentials)).catch(function (err) {
    return log.error(err.message);
  });
};

gears.sync = function (from, to) {

  var populate = function populate() {
    from.find({}).then(function (docs) {
      return to.remove(null).then(function () {
        var promises = docs.map(function (doc) {
          return to.create(doc);
        });
        return _promise2.default.all(promises);
      });
    });
  };
  var change = function change(res) {
    return to.update(res._id, res);
  };
  var create = function create(res) {
    return to.create(res);
  };
  var remove = function remove(res) {
    return to.remove(res._id);
  };

  gears.io.on('authenticated', populate);
  from.on('patched', change);
  from.on('updated', change);
  from.on('created', create);
  from.on('removed', remove);
};

gears.io.on('reconnect', gears.login);

gears.io.on('disconnect', function () {
  return log('disconnected from gears');
});

gears.io.on('authenticated', function () {
  return log('logged in to gears');
});

exports.default = gears;