'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = TitleText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TitleText(_ref) {
  var children = _ref.children;
  var className = _ref.className;
  var mini = _ref.mini;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'mini']);


  var classes = 'title' + (className ? ' ' + className : '');
  if (mini) classes += ' mini';

  return _react2.default.createElement(
    'p',
    (0, _extends3.default)({ className: classes }, other),
    children
  );
}