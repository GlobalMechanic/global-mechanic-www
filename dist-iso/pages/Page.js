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

var _dataLoader = require('modules/data-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(props) {
  var className = props.className;
  var children = props.children;
  var routes = props.routes;
  var other = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'routes']);
  var _routes = routes[routes.length - 1];
  var path = _routes.path;
  var backgroundProps = (0, _objectWithoutProperties3.default)(_routes, ['path']); // eslint-disable-line no-unused-vars

  setTimeout(function () {
    return _dataLoader.events.emit('background-style', backgroundProps);
  }, 100);

  var classes = className || 'page';
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { className: classes }),
    children
  );
}