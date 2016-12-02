'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Nut;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Points = ['M72.1', '11.7H27.9L5.8', '50l22.1', '38.3h44.2L94.2', '50L72.1', '11.7z M50', '65.6c-8.6', '0-15.6-7-15.6-15.6 c0-8.6', '7-15.6', '15.6-15.6c8.6', '0', '15.6', '7', '15.6', '15.6C65.6', '58.6', '58.6', '65.6', '50', '65.6z'];

function Nut(_ref) {
  var className = _ref.className,
      other = (0, _objectWithoutProperties3.default)(_ref, ['className']);


  var classes = (0, _classnames2.default)('nut', className);
  return _react2.default.createElement(
    'svg',
    (0, _extends3.default)({ viewBox: '5 10 90 80', className: classes }, other),
    _react2.default.createElement('path', { d: Points })
  );
}