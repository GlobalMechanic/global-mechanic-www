'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;

  var db = new _nedb2.default({
    filename: _path2.default.resolve(__dirname, '../../storage/data/products'),
    autoload: true
  });

  var options = {
    Model: db
  };

  app.use('/products', (0, _feathersNedb2.default)(options));

  var webProducts = app.service('products');
  var products = _gears2.default.service('products');

  _gears2.default.sync(products, webProducts);
};

var _nedb = require('nedb');

var _nedb2 = _interopRequireDefault(_nedb);

var _feathersNedb = require('feathers-nedb');

var _feathersNedb2 = _interopRequireDefault(_feathersNedb);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gears = require('modules/gears');

var _gears2 = _interopRequireDefault(_gears);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }