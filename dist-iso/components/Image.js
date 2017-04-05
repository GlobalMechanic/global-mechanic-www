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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

var Image = function (_Component) {
  (0, _inherits3.default)(Image, _Component);

  function Image() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      imageLoaded: false
    }, _this.setSrc = function (props) {
      var imageId = props.imageId,
          thumb = props.thumb;


      if (!imageId) return;

      _this.setState({ imageLoaded: false });
      _this.image = new window.Image();
      _this.image.src = HOST + '/assets/file/' + imageId + (thumb ? '-thumb' : '');
      _this.image.onload = _this.imageLoad;
    }, _this.imageLoad = function () {
      var onImageLoad = _this.props.onImageLoad;

      if (onImageLoad) onImageLoad(_this.image);
      _this.setState({ imageLoaded: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setSrc(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.imageId !== this.props.imageId) this.setSrc(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          imageId = _props.imageId,
          thumb = _props.thumb,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'imageId', 'thumb', 'children']);
      var imageLoaded = this.state.imageLoaded;


      var imageStyle = (0, _extends3.default)({
        backgroundImage: imageLoaded ? 'url(' + HOST + '/assets/file/' + imageId + (thumb ? '-thumb' : '') + ')' : null,
        opacity: imageLoaded ? 1 : 0
      }, style || {});

      delete other.onImageLoad;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: imageStyle }, other),
        children
      );
    }
  }]);
  return Image;
}(_react.Component);

Image.propTypes = {
  imageId: _react.PropTypes.string,
  thumb: _react.PropTypes.bool
};
Image.defaultProps = {
  thumb: true
};
exports.default = Image;