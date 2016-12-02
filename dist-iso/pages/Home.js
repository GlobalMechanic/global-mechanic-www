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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home(_ref) {
  var children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['children']);


  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: 'home-page' }, other),
    _react2.default.createElement(
      'h1',
      { id: 'splash-title', className: 'transition-pop' },
      'Global Mechanic'
    ),
    children
  );
}