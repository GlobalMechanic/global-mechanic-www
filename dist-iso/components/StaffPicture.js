'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = StaffPicture;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TitleText = require('./TitleText');

var _TitleText2 = _interopRequireDefault(_TitleText);

var _BodyText = require('./BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function format(writeup) {
  return writeup.split('\n').map(function (str, i) {
    return _react2.default.createElement(
      'p',
      { key: i },
      italicize(str)
    );
  });
}

function italicize() {
  var paragraph = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return paragraph.split('**').map(function (str, i) {
    return _react2.default.createElement(
      'span',
      { key: i, className: i % 2 == 1 ? 'italic' : '' },
      str
    );
  });
}

function StaffPicture(_ref) {
  var className = _ref.className;
  var staff = _ref.staff;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['className', 'staff']);


  var style = {
    backgroundImage: 'url(' + staff.image + ')'
  };

  return _react2.default.createElement(
    'div',
    { className: 'staff-writeup' + (className || '') },
    _react2.default.createElement('div', (0, _extends3.default)({ className: 'staff-picture', style: style }, other)),
    _react2.default.createElement(
      'div',
      { className: 'staff-bio' },
      _react2.default.createElement(
        _TitleText2.default,
        null,
        staff.name
      ),
      _react2.default.createElement(
        _BodyText2.default,
        null,
        format(staff.writeup)
      )
    )
  );
}