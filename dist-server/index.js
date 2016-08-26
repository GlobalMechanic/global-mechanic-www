'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.is = _isExplicit2.default;
global.log = _app2.default.logger.info.bind(_app2.default.logger);

var port = _app2.default.get('port');
var server = _app2.default.listen(port, '0.0.0.0');

server.on('listening', function () {

  log('App enabled. Server listening on port ' + port);
});
//# sourceMappingURL=/Users/bengaumond/Programming/global-mechanic-www/dist-server-maps/index.js.map