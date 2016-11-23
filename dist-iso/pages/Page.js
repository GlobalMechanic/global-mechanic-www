'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Page;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(_ref) {
  var className = _ref.className,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children']);


  var classes = (0, _classnames2.default)(className, 'page');

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: classes }, other),
    children
  );
}