'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Block;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Block(_ref) {
  var style = _ref.style,
      imageId = _ref.imageId,
      grayscale = _ref.grayscale,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children,
      onImageLoad = _ref.onImageLoad,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'imageId', 'grayscale', 'className', 'onClick', 'children', 'onImageLoad']);


  var blockClasses = (0, _classnames2.default)('block', className);
  var imageClasses = (0, _classnames2.default)('block-image', { clickable: onClick, grayscale: grayscale });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: blockClasses, style: style }, other),
    _react2.default.createElement(
      _Image2.default,
      { className: imageClasses, imageId: imageId, onClick: onClick, onImageLoad: onImageLoad },
      children
    )
  );
}