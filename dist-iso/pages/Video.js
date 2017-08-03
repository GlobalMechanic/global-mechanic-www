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

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _helper = require('modules/helper');

var _data = require('modules/data');

var _Showcase = require('components/Showcase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function (_React$Component) {
  (0, _inherits3.default)(Video, _React$Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      videos: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Video, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _data.products.then(function (ps) {
        var videos = ps.filter(function (p) {
          return p && p.video && p.video.vimeoId;
        });
        _this2.setState({ videos: videos });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['children']);
      var videos = this.state.videos;
      var video = other.params.video;


      var videoDoc = videos.filter(function (v) {
        return (0, _helper.urlify)(v.name) === video || v._id === video;
      })[0];

      var vimeoId = videoDoc && videoDoc.video ? videoDoc.video.vimeoId : null;
      var name = videoDoc ? videoDoc.name : null;

      return _react2.default.createElement(
        _Page2.default,
        (0, _extends3.default)({ id: 'video-page' }, other),
        _react2.default.createElement(
          'div',
          { id: 'video', className: 'transition-slide-up' },
          _react2.default.createElement(_Showcase.Vimeo, { vimeoId: vimeoId }),
          _react2.default.createElement(_Showcase.ProductTitle, { name: name })
        ),
        children
      );
    }
  }]);
  return Video;
}(_react2.default.Component);

exports.default = Video;