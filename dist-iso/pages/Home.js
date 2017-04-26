'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PLAY_PTS = ['472.8', '273 0', '546 0', '0'];

function PlayButton() {
  return _react2.default.createElement(
    'svg',
    { id: 'just-clicks-button', viewBox: '0 0 472.8 546' },
    _react2.default.createElement('polygon', { points: PLAY_PTS })
  );
}

function JustClicks() {
  return _react2.default.createElement(
    'div',
    { id: 'just-clicks-link', className: 'transition-slide-down' },
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/video/just_clicks', className: 'clickable link' },
      _react2.default.createElement(PlayButton, null),
      _react2.default.createElement(
        'h2',
        null,
        'Just Clicks'
      )
    )
  );
}

function Home(_ref) {
  var children = _ref.children;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children']);


  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: 'home-page' }, other),
    _react2.default.createElement(
      'h1',
      { id: 'splash-title', className: 'transition-pop' },
      'Global Mechanic'
    ),
    _react2.default.createElement(JustClicks, null),
    children
  );
}