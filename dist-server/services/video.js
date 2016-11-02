'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = initialize;

var _gmVimeo = require('modules/gm-vimeo');

var vimeo = _interopRequireWildcard(_gmVimeo);

var _queryMatcher = require('modules/query-matcher');

var _queryMatcher2 = _interopRequireDefault(_queryMatcher);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoService = function () {
  function VideoService() {
    (0, _classCallCheck3.default)(this, VideoService);
  }

  (0, _createClass3.default)(VideoService, [{
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

      console.log('what the fucks');
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