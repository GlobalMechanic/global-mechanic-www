'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {

  var publicURL = app.get('public');
  var indexHtmlURL = _path2.default.join(publicURL, 'index.html');

  template = _fs2.default.readFileSync(indexHtmlURL, 'utf-8').split('<main/>');

  return function (req, res, next) {

    (0, _reactRouter.match)({ routes: _tempServerRoutes2.default, location: req.url }, function (error, redirect, props) {

      if (error) return next(new _feathersErrors.GeneralError(error.message));else if (redirect) res.redirect(302, redirect.pathname + redirect.search);else if (props) res.send(renderTemplate(_react2.default.createElement(_reactRouter.RouterContext, props)));else next(new _feathersErrors.NotFound('Not Found'));
    });
  };
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tempServerRoutes = require('modules/temp-server-routes');

var _tempServerRoutes2 = _interopRequireDefault(_tempServerRoutes);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _feathersErrors = require('feathers-errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Helper
/******************************************************************************/

var template = void 0;

function renderTemplate(reactComponent) {
  var reactMarkup = (0, _server.renderToString)(reactComponent);
  return template[0] + '<main>' + reactMarkup + '</main>' + template[1];
}