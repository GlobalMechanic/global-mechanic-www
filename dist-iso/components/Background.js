'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Background;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Background(_ref) {
  var poster = _ref.poster;
  var video = _ref.video;
  var type = _ref.type;
  var dark = _ref.dark;


  var classes = (0, _classnames2.default)({ dark: dark });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { id: 'video-background-overlay', className: classes }),
    _react2.default.createElement(
      'video',
      { id: 'video-background', className: classes, poster: poster, loop: true, autoPlayer: true, muted: true },
      _react2.default.createElement('source', { src: video, type: type || 'video/mp4' })
    )
  );
}