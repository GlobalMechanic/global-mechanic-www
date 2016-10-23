'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Content;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Content(_ref) {
  var children = _ref.children;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    other,
    children
  );
}