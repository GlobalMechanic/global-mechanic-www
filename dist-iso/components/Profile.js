'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullName = getFullName;
exports.default = Profile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helper = require('modules/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

function getFullName(staff) {
  var name = staff.name;
  var first = name.first;
  var last = name.last;

  return ((first || '') + ' ' + (last || '')).trim();
}

var ProfileMainStyle = {
  top: 0,
  left: 0
};

function Profile(_ref) {
  var isFeatured = _ref.isFeatured;
  var hasFeatured = _ref.hasFeatured;
  var style = _ref.style;
  var item = _ref.item;
  var path = _ref.path;
  var getImage = _ref.getImage;
  var getWriteup = _ref.getWriteup;


  var fullName = getFullName(item);
  var urlFullName = (0, _helper.urlify)(fullName);

  var classes = (0, _classnames2.default)('profile', {
    'profile-featured': isFeatured,
    'profile-hidden': hasFeatured && !isFeatured
  });

  var mainStyle = isFeatured ? ProfileMainStyle : style;

  var imageStyle = {
    width: isFeatured ? null : style.width,
    height: isFeatured ? null : style.height,
    backgroundImage: 'url(' + HOST + '/assets/file/' + getImage(item) + ')'
  };

  return _react2.default.createElement(
    'div',
    { className: classes, style: mainStyle },
    _react2.default.createElement('div', { className: 'profile-image', style: imageStyle, onClick: function onClick() {
        return _reactRouter.browserHistory.push('/' + path + urlFullName);
      } }),
    _react2.default.createElement(
      'div',
      { className: 'profile-writeup' },
      _react2.default.createElement(
        'h1',
        null,
        fullName
      ),
      _react2.default.createElement(
        'p',
        null,
        getWriteup(item)
      )
    )
  );
}

Profile.propTypes = {
  getImage: _react.PropTypes.func.isRequired,
  getWriteup: _react.PropTypes.func.isRequired,
  path: _react.PropTypes.string.isRequired
};