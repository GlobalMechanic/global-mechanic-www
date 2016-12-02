'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _pages = require('pages');

var _components = require('components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _components.Navigation },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _pages.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: '/directors(/:director)(/:product)', inverse: true, component: _pages.Directors }),
    _react2.default.createElement(_reactRouter.Route, { path: '/work/:showcase(/:product)', inverse: true, component: _pages.Work }),
    _react2.default.createElement(_reactRouter.Route, { path: '/private/portfolio/:showcase(/:product)', inverse: true, dark: true, _private: true, component: _pages.Work }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about(/:person)', dark: true, component: _pages.About })
);