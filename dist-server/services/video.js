'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = initialize;

var _gmVimeo = require('../modules/gm-vimeo');

var vimeo = _interopRequireWildcard(_gmVimeo);

var _queryMatcher = require('../modules/query-matcher');

var _queryMatcher2 = _interopRequireDefault(_queryMatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoService = function () {
  function VideoService() {
    _classCallCheck(this, VideoService);
  }

  _createClass(VideoService, [{
    key: 'get',
    value: function get(id) {
      return vimeo.videos().then(function (video) {
        var vid = video[id];

        if (vid) return vid;

        throw new Error('Video with id ' + id + ' does not exist.');
      });
    }
  }, {
    key: 'find',
    value: function find(params) {
      var query = params ? params.query : {};
      return vimeo.videos().then(function (videos) {
        if (!query) return videos;

        var filtered = {};

        for (var i in videos) {
          var vid = videos[i];
          if ((0, _queryMatcher2.default)(query, vid)) filtered[i] = vid;
        }
        return filtered;
      });
    }
  }]);

  return VideoService;
}();

var beforeHooks = {};
var afterHooks = {};

function initialize() {
  var app = this;

  app.use('/videos', new VideoService());

  var videoService = app.service('/videos');
  videoService.before(beforeHooks);
  videoService.after(afterHooks);
}

exports.Service = VideoService;
//# sourceMappingURL=/Volumes/GM Production 02 External/Projects/Git/global-mechanic-www/dist-server-src-maps/services/video.js.map