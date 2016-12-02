'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;

  var db = new _nedb2.default({
    filename: _path2.default.resolve(__dirname, '../../storage/data/people'),
    autoload: true
  });

  var options = {
    Model: db
  };

  app.use('/assets/people', (0, _feathersNedb2.default)(options));

  var people = app.service('assets/people');
  var users = (0, _gears.service)('users');

  people.before(beforeHooks);
  people.after(afterHooks);

  (0, _gears.sync)(users, people, ['staffData', 'portrait'], ['directorData', 'portrait']);
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

function websiteFilter(hook, next) {
  var result = hook.result,
      params = hook.params;

  //no filtering on internal calls

  if (!params.provider) return next();

  //only send people intended to be on the website
  hook.result = result.filter(function (person) {
    return person.staffData && person.staffData.showOnWebsite || person.directorData && person.directorData.showOnWebsite;
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