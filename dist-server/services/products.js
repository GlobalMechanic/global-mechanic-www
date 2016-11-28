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

  app.use('/assets/products', (0, _feathersNedb2.default)(options));

  var webProducts = app.service('assets/products');
  var products = (0, _gears.service)('products');

  webProducts.before(beforeHooks);

  (0, _gears.sync)(products, webProducts, 'portrait');
};

var _nedb = require('nedb');

var _nedb2 = _interopRequireDefault(_nedb);

var _feathersNedb = require('feathers-nedb');

var _feathersNedb2 = _interopRequireDefault(_feathersNedb);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gears = require('modules/gears');

var _feathersHooks = require('feathers-hooks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Hooks
/******************************************************************************/

var disableExternal = (0, _feathersHooks.disable)('external');

var beforeHooks = {
  get: disableExternal,
  create: disableExternal,
  update: disableExternal,
  patch: disableExternal
};

/******************************************************************************/
// Initialize
/******************************************************************************/