'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function getFullName(person) {
  var name = person.name;
  var first = name.first,
      last = name.last;


  return ((first || '') + ' ' + (last || '')).trim();
}

function Profile(_ref) {
  var style = _ref.style,
      item = _ref.item,
      path = _ref.path,
      imageId = _ref.imageId,
      className = _ref.className,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'item', 'path', 'imageId', 'className']);


  var fullName = getFullName(item);
  var urlFullName = (0, _helper.urlify)(fullName);

  var classes = (0, _classnames2.default)('profile', className);

  var imageStyle = {
    backgroundImage: 'url(' + HOST + '/assets/file/' + imageId + ')'
  };

  return _react2.default.createElement(
    'div',
    { className: classes, style: style },
    _react2.default.createElement('div', { className: 'profile-image', style: imageStyle, onClick: function onClick() {
        return _reactRouter.browserHistory.push('/' + path + urlFullName);
      } })
  );
}

Profile.propTypes = {
  getImage: _react.PropTypes.func.isRequired,
  getWriteup: _react.PropTypes.func.isRequired,
  path: _react.PropTypes.string.isRequired
};