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

var LoadingNut = function LoadingNut() {
  return _react2.default.createElement(
    'div',
    { className: 'loading' },
    'Loading'
  );
};

var Dummy = function Dummy() {
  return null;
};

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: LoadingNut },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: Dummy }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/directors', inverse: true, component: Dummy },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/directors/:director', inverse: true, component: Dummy },
      _react2.default.createElement(_reactRouter.Route, { path: '/directors/:director/:video', inverse: true, component: Dummy })
    )
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/work/:portfolio', inverse: true, component: Dummy },
    _react2.default.createElement(_reactRouter.Route, { path: '/work/:portfolio/:video', inverse: true, component: Dummy })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/private/portfolio/:portfolio', inverse: true, component: Dummy },
    _react2.default.createElement(_reactRouter.Route, { path: '/private/portfolio/:portfolio/:video', inverse: true, component: Dummy })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/about', dark: true, component: Dummy },
    _react2.default.createElement(_reactRouter.Route, { path: '/about/:staff', dark: true, component: Dummy })
  )
);