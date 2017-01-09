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

var DARK = 0.7;

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _components.Navigation },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _pages.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: '/video/:video', darken: 1, component: _pages.Video }),
    _react2.default.createElement(_reactRouter.Route, { path: '/directors(/:director)(/:product)', inverse: true, component: _pages.Directors }),
    _react2.default.createElement(_reactRouter.Route, { path: '/showcase/:showcase(/:product)', inverse: true, component: _pages.Work }),
    _react2.default.createElement(_reactRouter.Redirect, { from: '/work/:showcase(/:product)', to: '/showcase/:showcase(/:product)' }),
    _react2.default.createElement(_reactRouter.Route, { path: '/private/showcase/:showcase(/:product)', inverse: true, darken: DARK, _private: true, component: _pages.Work }),
    _react2.default.createElement(_reactRouter.Route, { path: '/private/video/:video', inverse: true, _private: true, component: _pages.Video }),
    _react2.default.createElement(_reactRouter.Route, { path: '/wip/:showcase(/:product)', _private: true, darken: 1, component: _pages.Work }),
    _react2.default.createElement(_reactRouter.Redirect, { from: '/private/portfolio/602114', to: '/private/showcase/dream_life_of_cities' }),
    _react2.default.createElement(_reactRouter.Redirect, { from: '/private/portfolio/:showcase(/:product)', to: '/private/showcase/:showcase(/:product)' }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about(/:person)', darken: DARK, component: _pages.About })
);