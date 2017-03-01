'use strict';

require('./globals');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Server
/******************************************************************************/

_app2.default.then(function (a) {

  var port = a.get('port');
  var server = a.listen(port, '0.0.0.0');
  server.on('listening', function () {
    return log('App enabled. Server listening on port ' + port);
  });
});