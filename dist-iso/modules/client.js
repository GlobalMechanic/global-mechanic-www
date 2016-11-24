'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.people = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _client = require('feathers/client');

var _client2 = _interopRequireDefault(_client);

var _client3 = require('feathers-rest/client');

var _client4 = _interopRequireDefault(_client3);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

/******************************************************************************/
// Config
/******************************************************************************/

var config = (0, _client4.default)(HOST).request(_request2.default);

var client = (0, _client2.default)().configure(config);

var find = function find(service) {
  return _promise2.default.resolve(client.service(service).find());
};

var people = exports.people = find('people');
// const products = client.service('products')
// const showcases = client.service('showcases')

people.then(function (res) {
  return console.log(res);
});