'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _globalMechanicComponents = require('global-mechanic-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/
var isBrowser = typeof window !== 'undefined';

var poster = isBrowser ? require('../assets/background-poster.jpg') : '';
var video = isBrowser ? require('../assets/background-video.mp4') : '';

var component = _globalMechanicComponents.IS_MOBILE ? 'img' : 'video';

var props = _globalMechanicComponents.IS_MOBILE ? {
  src: poster
} : {
  src: video,
  poster: poster,
  loop: true,
  autoPlay: true,
  muted: true
};

/******************************************************************************/
// Helper Components
/******************************************************************************/

var Overlay = function Overlay(_ref) {
  var children = _ref.children;
  return _React2.default.createElement(
    _globalMechanicComponents.Base,
    { id: 'video-background-overlay' },
    children
  );
};

var Picture = function Picture() {
  return _React2.default.createElement(_globalMechanicComponents.Base, (0, _extends3.default)({ id: 'video-background', component: component }, props));
};

/******************************************************************************/
// Exports
/******************************************************************************/

var Background = function Background() {
  return _React2.default.createElement(
    _globalMechanicComponents.Base,
    { id: 'background' },
    _React2.default.createElement(Overlay, null),
    _React2.default.createElement(Picture, null)
  );
};

exports.default = Background;