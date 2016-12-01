'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  var app = this;

  app.get('/assets/file/:id', (0, _serveFile2.default)());
  app.use((0, _reactRouterTemplate2.default)(app));
  app.use((0, _logging2.default)(app));
  app.use((0, _handler2.default)());
};

var _handler = require('feathers-errors/handler');

var _handler2 = _interopRequireDefault(_handler);

var _serveFile = require('./serve-file');

var _serveFile2 = _interopRequireDefault(_serveFile);

var _reactRouterTemplate = require('./react-router-template');

var _reactRouterTemplate2 = _interopRequireDefault(_reactRouterTemplate);

var _logging = require('./logging');

var _logging2 = _interopRequireDefault(_logging);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }