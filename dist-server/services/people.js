'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;

  var options = {
    Model: app.db.collection('users')
  };

  app.use('/assets/people', (0, _feathersMongodb2.default)(options));

  var people = app.service('assets/people');
  var users = (0, _gears.service)('users');

  people.before(beforeHooks);
  people.after(afterHooks);

  var staff = {
    path: ['staffData', 'portrait'],
    thumb: '480',
    full: false
  };

  var director = {
    path: ['directorData', 'portrait'],
    thumb: '480',
    full: false
  };

  (0, _gears.sync)(users, people, staff, director);
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

function websiteFilter(hook, next) {
  var result = hook.result;
  var params = hook.params;

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