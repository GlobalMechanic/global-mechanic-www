'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Inverted;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Inverted(_ref) {
  var children = _ref.children;
  var className = _ref.className;
  var fill = _ref.fill;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'fill']);


  var classes = 'inverse' + (className ? ' ' + className : '');
  if (fill) classes += classes.length == 0 ? 'fill' : ' fill';

  return _react2.default.createElement('div', (0, _extends3.default)({ className: classes }, other), children);
}