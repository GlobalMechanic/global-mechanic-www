'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  // Add a logger to our app object for convenience
  app.logger = _winston2.default;

  return function (error, req, res, next) {
    if (error) {
      var message = (error.code ? '(' + error.code + ') ' : '') + 'Route: ' + req.url + ' - ' + error.message;

      if (error.code === 404) {
        _winston2.default.info(message);
      } else {
        _winston2.default.error(message);
        _winston2.default.info(error.stack);
      }
    }

    next(error);
  };
};

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }