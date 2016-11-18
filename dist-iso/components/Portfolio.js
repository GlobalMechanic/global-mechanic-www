'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _index = require('./index');

var _reactRouter = require('react-router');

var _dataLoader = require('modules/data-loader');

var _Image = require('./Image');

var _TitleText = require('./TitleText');

var _TitleText2 = _interopRequireDefault(_TitleText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigate(url) {
  _reactRouter.browserHistory.push(url);
}

function ImageBlock(_ref) {
  var width = _ref.width;
  var height = _ref.height;
  var url = _ref.url;
  var onClick = _ref.onClick;

  return _react2.default.createElement('div', {
    className: 'cell-block clickable bulge',
    onClick: onClick,
    style: {
      width: width || 160,
      height: height || 160,
      backgroundImage: 'url(' + url + ')'
    } });
}

function VideoBlock(_ref2) {
  var video = _ref2.video;
  var urlPrefix = _ref2.urlPrefix;


  urlPrefix = urlPrefix || '/';
  var thumb_index = Math.floor(video.urls.thumb.length * 0.5);
  var thumb_url = video.urls.thumb[thumb_index];

  var video_url = urlPrefix + video.id;

  var width = video.width;
  var height = video.height;


  return _react2.default.createElement('div', {
    className: 'cell-block clickable bulge',
    onClick: function onClick() {
      return navigate(video_url);
    },
    style: {
      width: width,
      height: height,
      backgroundImage: 'url(' + thumb_url + ')'
    } });
}

function PortfolioTitle(_ref3) {
  var place = _ref3.place;
  var children = _ref3.children;

  return place ? _react2.default.createElement(
    _TitleText2.default,
    { className: 'padded', style: { paddingBottom: '0.25em' } },
    children
  ) : null;
}

var Portfolio = function (_React$Component) {
  (0, _inherits3.default)(Portfolio, _React$Component);

  function Portfolio(props) {
    (0, _classCallCheck3.default)(this, Portfolio);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Portfolio.__proto__ || (0, _getPrototypeOf2.default)(Portfolio)).call(this, props));

    _this.state = {
      videos: [],
      image: null
    };
    _this.setVideos = _this.setVideos.bind(_this);
    _this.setImage = _this.setImage.bind(_this);
    _this.clearImage = _this.clearImage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Portfolio, [{
    key: 'setImage',
    value: function setImage(image) {
      this.setState({ image: image });
    }
  }, {
    key: 'clearImage',
    value: function clearImage() {
      this.setState({ image: null });
    }
  }, {
    key: 'setVideos',
    value: function setVideos(allVideos) {
      var id = this.props.portfolio.toString();
      var videos = [];

      for (var i in allVideos) {
        var video = allVideos[i];
        if (video.portfolios.includes(id)) videos.push(video);
      }

      this.setState({ videos: videos });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _dataLoader.events.on('videos-loaded', this.setVideos);
      if (_dataLoader.data.videos) this.setVideos(_dataLoader.data.videos);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _dataLoader.events.removeListener('videos-loaded', this.setVideos);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var id = _props.id;
      var urlPrefix = _props.urlPrefix;
      var portfolioImagesHack = _props.portfolioImagesHack;
      var other = (0, _objectWithoutProperties3.default)(_props, ['id', 'urlPrefix', 'portfolioImagesHack']);
      var _state = this.state;
      var videos = _state.videos;
      var image = _state.image;


      var imageBlocks = [],
          gifBlocks = [];
      var imagePort = portfolioImagesHack || [];

      imagePort.forEach(function (img) {
        var arr = img.url.includes('.gif') ? gifBlocks : imageBlocks;
        arr.push(_react2.default.createElement(ImageBlock, (0, _extends3.default)({ key: img.url, onClick: function onClick() {
            return _this2.setImage(img);
          } }, img)));
      });

      var videoBlocks = videos.map(function (video) {
        return _react2.default.createElement(VideoBlock, { key: video.id, video: video, urlPrefix: urlPrefix });
      });

      videoBlocks.push(gifBlocks);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          PortfolioTitle,
          { place: !!portfolioImagesHack },
          'Videos'
        ),
        image ? _react2.default.createElement(_Image.Image, (0, _extends3.default)({}, image, { close: this.clearImage })) : null,
        _react2.default.createElement(
          _index.FreeWall,
          (0, _extends3.default)({ id: id, key: id, selector: '.cell-block' }, other),
          videoBlocks
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          PortfolioTitle,
          { place: !!portfolioImagesHack },
          'Illustrations'
        ),
        portfolioImagesHack ? _react2.default.createElement(
          _index.FreeWall,
          (0, _extends3.default)({ id: id + 'images', key: id + 'images', selector: '.cell-block' }, other),
          imageBlocks
        ) : null
      );
    }
  }]);
  return Portfolio;
}(_react2.default.Component);

exports.default = Portfolio;