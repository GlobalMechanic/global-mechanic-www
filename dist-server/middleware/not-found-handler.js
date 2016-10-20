'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  return function (req, res, next) {
    next(new _feathersErrors.NotFound('Page not found'));
  };
};

var _feathersErrors = require('feathers-errors');
//# sourceMappingURL=/Users/bengaumond/Programming/global-mechanic-www/dist-server-src-maps/middleware/not-found-handler.js.map