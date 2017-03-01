'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;

  var options = {
    Model: app.db.collection('showcases')
  };

  app.use('/assets/showcases', (0, _feathersMongodb2.default)(options));

  var webShowcases = app.service('assets/showcases');
  var showcases = (0, _gears.service)('showcases');

  webShowcases.before(beforeHooks);
  webShowcases.after(afterHooks);

  var files = {
    path: 'files',
    thumb: '360',
    full: true,
    meta: true
  };

  var portrait = {
    path: 'portrait',
    thumb: '640',
    full: false
  };

  (0, _gears.sync)(showcases, webShowcases, portrait, files);
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
var SCOPES = ['private', 'public', 'work-in-progress'];

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