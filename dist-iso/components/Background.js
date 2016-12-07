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
  var darken = _ref.darken;
  var inverse = _ref.inverse;


  var opacity = darken || 0;
  var blur = opacity * 20;

  var classes = (0, _classnames2.default)({ inverse: inverse });

  var overlayStyle = {
    backgroundColor: inverse ? null : 'rgba(0,0,0,' + opacity + ')'
  };

  var bgStyle = {
    WebkitFilter: opacity > 0 && opacity < 1 && !inverse ? 'blur(' + blur + 'px)' : null
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { id: 'video-background-overlay', className: classes, style: overlayStyle }),
    _react2.default.createElement(
      'video',
      { id: 'video-background', loop: true, autoPlay: true, muted: true, poster: poster,
        className: classes, style: bgStyle },
      _react2.default.createElement('source', { src: video, type: 'video/mp4' })
    )
  );
}