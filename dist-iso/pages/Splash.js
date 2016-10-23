'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = Splash;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Play() {
  return _react2.default.createElement('span', { className: 'play-button' });
}

function Splash(props) {
  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: 'splash-page', className: '' }, props),
    _react2.default.createElement(
      'h1',
      null,
      'Global Mechanic'
    ),
    _react2.default.createElement('div', { id: 'gear-background' }),
    _react2.default.createElement(
      _reactRouter.Link,
      { id: 'just_clicks_button', className: 'title mini clickable', to: '/work/just_clicks/86731887' },
      _react2.default.createElement(Play, null),
      ' Just Click'
    )
  );
}