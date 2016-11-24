'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showcases = exports.products = exports.people = undefined;

var _client = require('feathers/client');

var _client2 = _interopRequireDefault(_client);

var _client3 = require('feathers-rest/client');

var _client4 = _interopRequireDefault(_client3);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

/******************************************************************************/
// Config
/******************************************************************************/

var config = (0, _client4.default)(HOST).fetch(_isomorphicFetch2.default);

var client = (0, _client2.default)().configure(config);

var find = function find(service) {
  return client.service('assets/' + service).find();
};

var people = exports.people = find('people');
var products = exports.products = find('products');
var showcases = exports.showcases = find('showcases');