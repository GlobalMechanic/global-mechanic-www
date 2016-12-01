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

//Because ServerSide rendering isn't done with webpack, and therefore can't
//require .jpg or .mp4 files
var isBrowser = typeof window !== 'undefined';

var poster = isBrowser ? require('../assets/background-poster.jpg') : '';
var video = isBrowser ? require('../assets/background-video.mp4') : '';

function Background(_ref) {
  var dark = _ref.dark;


  var classes = (0, _classnames2.default)({ dark: dark });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { id: 'video-background-overlay', className: classes }),
    _react2.default.createElement(
      'video',
      { id: 'video-background', className: classes, loop: true, autoPlay: true, muted: true, poster: poster },
      _react2.default.createElement('source', { src: video, type: 'video/mp4' })
    )
  );
}