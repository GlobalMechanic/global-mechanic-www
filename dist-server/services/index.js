'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  var app = this;

  var credentials = app.get('gears-authentication');
  _gears2.default.login(credentials);

  app.configure(_people2.default);
  app.configure(_products2.default);
  app.configure(_showcases2.default);
};

var _gears = require('modules/gears');

var _gears2 = _interopRequireDefault(_gears);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _products = require('./products');

var _products2 = _interopRequireDefault(_products);

var _showcases = require('./showcases');

var _showcases2 = _interopRequireDefault(_showcases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }