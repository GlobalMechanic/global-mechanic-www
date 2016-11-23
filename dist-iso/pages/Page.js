'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(_ref) {
  var className = _ref.className;
  var id = _ref.id;
  var pageRef = _ref.pageRef;
  var style = _ref.style;
  var children = _ref.children;


  var classes = (0, _classnames2.default)(className, 'page');

  return _react2.default.createElement(
    'div',
    { id: id, className: classes, ref: pageRef, style: style },
    children
  );
}