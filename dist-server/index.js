'use strict';

require('./globals');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || _app2.default.get('port');
var server = _app2.default.listen(port, '0.0.0.0');

server.on('listening', function () {
  return log('App enabled. Server listening on port ' + port);
});
//# sourceMappingURL=/Volumes/GM Production 02 External/Projects/Git/global-mechanic-www/dist-server-src-maps/index.js.map