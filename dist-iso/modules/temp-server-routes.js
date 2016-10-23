'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//okay, so this is a temp fix. As of this writing, Components and pages for this
//website arn't very iso-morphic friendly, so I'm giving the server some dummy
//routes just so that server-side routing will work.

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/' },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/directors' },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/directors/:director' },
      _react2.default.createElement(_reactRouter.Route, { path: '/directors/:director/:video' })
    )
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/work/:portfolio' },
    _react2.default.createElement(_reactRouter.Route, { path: '/work/:portfolio/:video' })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/private/portfolio/:portfolio' },
    _react2.default.createElement(_reactRouter.Route, { path: '/private/portfolio/:portfolio/:video' })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/about' },
    _react2.default.createElement(_reactRouter.Route, { path: '/about/:staff' })
  )
);