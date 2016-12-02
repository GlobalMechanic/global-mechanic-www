'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;

  var db = new _nedb2.default({
    filename: _path2.default.resolve(__dirname, '../../storage/data/showcases'),
    autoload: true
  });

  var options = {
    Model: db
  };

  app.use('/assets/showcases', (0, _feathersNedb2.default)(options));

  var webShowcases = app.service('assets/showcases');
  var showcases = (0, _gears.service)('showcases');

  webShowcases.before(beforeHooks);
  webShowcases.after(afterHooks);

  (0, _gears.sync)(showcases, webShowcases);
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
var SCOPES = ['private', 'public'];

function websiteFilter(hook, next) {
  var result = hook.result,
      params = hook.params;

  //no filtering on internal calls

  if (!params.provider) return next();

  //only send showcases with public or private scopes
  hook.result = result.filter(function (showcase) {
    return showcase.website && SCOPES.includes(showcase.website.scope);
  });

  next(null, hook);
}

var beforeHooks = {
  get: disableExternal,
  create: disableExternal,
  update: disableExternal,
  patch: disableExternal
};

var afterHooks = {
  find: websiteFilter
};

/******************************************************************************/
// Initialize
/******************************************************************************/