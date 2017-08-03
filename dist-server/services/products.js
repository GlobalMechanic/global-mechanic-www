'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;

  var options = {
    Model: app.db.collection('products')
  };

  app.use('/assets/products', (0, _feathersMongodb2.default)(options));

  var webProducts = app.service('assets/products');
  var products = (0, _gears.service)('products');

  webProducts.before(beforeHooks);

  var portrait = {
    path: 'portrait',
    thumb: '640x360',
    full: false
  };

  var images = {
    path: 'images',
    thumb: '400',
    full: true
  };

  (0, _gears.sync)(products, webProducts, portrait, images);
};

var _feathersMongodb = require('feathers-mongodb');

var _feathersMongodb2 = _interopRequireDefault(_feathersMongodb);

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

  /******************************************************************************/
  // Initialize
  /******************************************************************************/

};