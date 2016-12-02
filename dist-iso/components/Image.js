'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

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

var Image = exports.Image = function (_React$Component) {
  (0, _inherits3.default)(Image, _React$Component);

  function Image(props) {
    (0, _classCallCheck3.default)(this, Image);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, props));

    _this.state = {
      video: null
    };
    _this.resize = _this.resize.bind(_this);
    _this.$holder = null;
    return _this;
  }

  (0, _createClass3.default)(Image, [{
    key: 'resize',
    value: function resize() {
      if (!this.$holder || this.$holder.length === 0) return;

      var y = Math.max((window.innerHeight - this.$holder.height()) * 0.5, 0);
      this.$holder.css('paddingTop', y);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(window).on('resize', this.resize);
      setTimeout(this.resize, 10);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(window).off('resize', this.resize);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      setTimeout(this.resize, 10);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          close = _props.close,
          url = _props.url;

      return _react2.default.createElement(
        'div',
        { className: 'video-page clickable', onClick: close },
        _react2.default.createElement('img', { className: 'hack-image-viewer', src: url, ref: function ref(holder) {
            return _this2.$holder = $(holder);
          } })
      );
    }
  }]);
  return Image;
}(_react2.default.Component);