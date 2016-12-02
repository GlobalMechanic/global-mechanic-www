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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

function Block(_ref) {
  var style = _ref.style,
      imageId = _ref.imageId,
      className = _ref.className,
      onClick = _ref.onClick,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'imageId', 'className', 'onClick']);


  var blockClasses = (0, _classnames2.default)('block', className);
  var imageClasses = (0, _classnames2.default)('block-image', { clickable: onClick });

  var imageStyle = {
    backgroundImage: 'url(' + HOST + '/assets/file/' + imageId + ')'
  };

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: blockClasses, style: style }, other),
    _react2.default.createElement('div', { style: imageStyle, className: imageClasses, onClick: onClick })
  );
}

Block.propTypes = {
  imageId: _react.PropTypes.string
};