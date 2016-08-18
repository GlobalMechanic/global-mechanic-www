'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  return function (req, res, next) {
    next(new _feathersErrors2.default.NotFound('Page not found'));
  };
};

var _feathersErrors = require('feathers-errors');

var _feathersErrors2 = _interopRequireDefault(_feathersErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=/Users/Global/Projects/global-mechanic-www/dist-server-maps/middleware/not-found-handler.js.map