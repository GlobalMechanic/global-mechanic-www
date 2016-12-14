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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

var Block = function (_Component) {
  (0, _inherits3.default)(Block, _Component);

  function Block() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Block);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Block)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      imageLoaded: false
    }, _this.setSrc = function (props) {
      var imageId = props.imageId;


      _this.setState({ imageLoaded: false });
      _this.image = new Image();
      _this.image.src = HOST + '/assets/file/' + imageId + '-thumb';
      _this.image.onload = _this.imageLoad;
    }, _this.imageLoad = function () {
      var onImageLoad = _this.props.onImageLoad;

      if (onImageLoad) onImageLoad(_this.image);
      _this.setState({ imageLoaded: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Block, [{
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
      var _props = this.props;
      var style = _props.style;
      var imageId = _props.imageId;
      var grayscale = _props.grayscale;
      var className = _props.className;
      var onClick = _props.onClick;
      var children = _props.children;
      var other = (0, _objectWithoutProperties3.default)(_props, ['style', 'imageId', 'grayscale', 'className', 'onClick', 'children']);
      var imageLoaded = this.state.imageLoaded;


      var blockClasses = (0, _classnames2.default)('block', className);
      var imageClasses = (0, _classnames2.default)('block-image', { clickable: onClick, grayscale: grayscale });

      var imageStyle = {
        backgroundImage: imageLoaded ? 'url(' + HOST + '/assets/file/' + imageId + '-thumb)' : null,
        opacity: imageLoaded ? 1 : 0
      };

      delete other.onImageLoad;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: blockClasses, style: style }, other),
        _react2.default.createElement(
          'div',
          { style: imageStyle, className: imageClasses, onClick: onClick },
          children
        )
      );
    }
  }]);
  return Block;
}(_react.Component);

Block.propTypes = {
  imageId: _react.PropTypes.string
};
exports.default = Block;