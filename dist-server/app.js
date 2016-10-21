'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _feathers = require('feathers');

var _feathers2 = _interopRequireDefault(_feathers);

var _feathersConfiguration = require('feathers-configuration');

var _feathersConfiguration2 = _interopRequireDefault(_feathersConfiguration);

var _feathersHooks = require('feathers-hooks');

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

var _feathersRest = require('feathers-rest');

var _feathersRest2 = _interopRequireDefault(_feathersRest);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressHistoryApiFallback = require('express-history-api-fallback');

var _expressHistoryApiFallback2 = _interopRequireDefault(_expressHistoryApiFallback);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _gmVimeo = require('./modules/gm-vimeo');

var _gmVimeo2 = _interopRequireDefault(_gmVimeo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/
/******************************************************************************/
// Dependencies
/******************************************************************************/
var app = (0, _feathers2.default)();
var configURL = _path2.default.resolve(__dirname, '..');

/******************************************************************************/
// Config
/******************************************************************************/
app.configure((0, _feathersConfiguration2.default)(configURL));

var publicURL = _path2.default.resolve(__dirname, app.get('public'));
var faviconURL = _path2.default.join(publicURL, 'favicon.png');

app.use((0, _compression2.default)()).options('*', (0, _cors2.default)()).use((0, _cors2.default)()).use((0, _serveFavicon2.default)(faviconURL)).use('/', (0, _feathers.static)(publicURL)).use(_bodyParser2.default.json()).use(_bodyParser2.default.urlencoded({ extended: true })).configure((0, _feathersHooks2.default)()).configure((0, _feathersRest2.default)()).configure(_services2.default).configure(_middleware2.default).configure(_gmVimeo2.default).use((0, _expressHistoryApiFallback2.default)('index.html', { publicURL: publicURL }));
//Send every remaining path to index.html

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = app;
//# sourceMappingURL=/Volumes/GM Production 02 External/Projects/Git/global-mechanic-www/dist-server-src-maps/app.js.map