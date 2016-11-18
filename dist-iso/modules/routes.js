'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('components');

var _pages = require('pages');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _components.Navigation },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _pages.Splash }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/directors', inverse: true, component: _pages.Directors },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/directors/:director', inverse: true, component: _pages.Director },
      _react2.default.createElement(_reactRouter.Route, { path: '/directors/:director/:video', inverse: true, component: _pages.Video })
    )
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/work/:portfolio', inverse: true, component: _pages.Work },
    _react2.default.createElement(_reactRouter.Route, { path: '/work/:portfolio/:video', inverse: true, component: _pages.Video })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/private/portfolio/:portfolio', inverse: true, 'private': true, component: _pages.Work },
    _react2.default.createElement(_reactRouter.Route, { path: '/private/portfolio/:portfolio/:video', inverse: true, 'private': true, component: _pages.Video })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/about', dark: true, component: _pages.About },
    _react2.default.createElement(_reactRouter.Route, { path: '/about/:staff', dark: true, component: _pages.Staff })
  )
);