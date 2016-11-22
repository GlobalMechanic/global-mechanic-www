'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Work;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Work(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _Page2.default,
    { id: 'work-page' },
    _react2.default.createElement(
      'h1',
      null,
      'Work'
    ),
    children
  );
}