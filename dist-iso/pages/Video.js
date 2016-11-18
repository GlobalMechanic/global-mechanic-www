'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _dataLoader = require('modules/data-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function goBack() {
  _reactRouter.browserHistory.goBack();
}

var Video = function (_React$Component) {
  (0, _inherits3.default)(Video, _React$Component);

  function Video(props) {
    (0, _classCallCheck3.default)(this, Video);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));

    _this.state = {
      video: null
    };
    _this.setVideos = _this.setVideos.bind(_this);
    _this.resize = _this.resize.bind(_this);
    _this.$player = null;
    return _this;
  }

  (0, _createClass3.default)(Video, [{
    key: 'resize',
    value: function resize() {
      if (!this.$player || this.$player.length === 0) return;

      var y = Math.max((window.innerHeight - this.$player.height()) * 0.5, 0);
      this.$player.css('paddingTop', y);
    }
  }, {
    key: 'setVideos',
    value: function setVideos(allVideos) {
      var id = this.props.params.video;
      var video = null;

      for (var i in allVideos) {
        var otherVideo = allVideos[i];
        if (otherVideo.id === id) {
          video = otherVideo;
          break;
        }
      }

      this.setState({ video: video });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _dataLoader.events.on('videos-loaded', this.setVideos);
      $(window).on('resize', this.resize);

      if (_dataLoader.data.videos) this.setVideos(_dataLoader.data.videos);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _dataLoader.events.removeListener('videos-loaded', this.setVideos);
      $(window).off('resize', this.resize);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var video = this.state.video;
      var id = this.props.params.video;

      if (id.includes(':')) id = id.split(':')[0];

      return video ? _react2.default.createElement(
        'div',
        { className: 'video-page clickable', onClick: goBack },
        _react2.default.createElement('iframe', { className: 'video-player', src: '//player.vimeo.com/video/' + id,
          frameBorder: false, title: false, badge: false, byline: false,
          ref: function ref(player) {
            return _this2.$player = $(player);
          },
          webkitallowfullscreen: true,
          mozallowfullscreen: true,
          allowfullscreen: true })
      ) : null;
    }
  }]);
  return Video;
}(_react2.default.Component);

exports.default = Video;