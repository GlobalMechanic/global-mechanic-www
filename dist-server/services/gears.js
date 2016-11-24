'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _feathersClient = require('feathers-client');

var _feathersClient2 = _interopRequireDefault(_feathersClient);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PEOPLE_QUERY = {
  userType: 'person',
  $or: [{ 'staffData.showOnWebsite': true }, { 'directorData.showOnWebsite': true }]
};

var SHOWCASES_QUERY = {
  'website.scope': { $in: ['public', 'private'] }
};

var socket = (0, _socket2.default)('http://localhost:4100');

var credentials = null;

var gears = (0, _feathersClient2.default)().configure(_feathersClient2.default.hooks()).configure(_feathersClient2.default.socketio(socket)).configure(_feathersClient2.default.authentication());

var users = gears.service('users');
var products = gears.service('products');
var showcases = gears.service('showcases');

gears.login = function (newCreds) {
  if (is(newCreds, Object)) credentials = newCreds;

  if (!credentials) return;

  gears.authenticate((0, _extends3.default)({ type: 'local' }, credentials)).catch(function (err) {
    return log.error(err.message);
  });
};

gears.io.on('reconnect', gears.login);

gears.io.on('disconnect', function () {
  return log('disconnected from gears');
});

gears.io.on('authenticated', function () {
  log('logged in to gears');
  users.find({ query: PEOPLE_QUERY }).then(function (res) {
    return log(res);
  });
});

exports.default = gears;