'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.is = _isExplicit2.default;
global.log = process.stdout.write.bind(process.stdout);

var port = _app2.default.get('port');
var server = _app2.default.listen(port, '0.0.0.0');

server.on('listening', function () {
  log('App enabled. Server listening on port ' + port);
});
//# sourceMappingURL=/Volumes/GM Production 02 External/Projects/Git/global-mechanic-www/index.js.map