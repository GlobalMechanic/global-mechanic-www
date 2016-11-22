'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var round = Math.round;

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
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }, _this.place = function () {

      var bounds = _this.ref.getBoundingClientRect();

      var width = bounds.width ? round(bounds.width / 25) * 25 : 25;
      var height = bounds.height ? round(bounds.height / 25) * 25 : 25;
      var top = bounds.top,
          left = bounds.left;

      _this.setState({ width: width, height: height, top: top, left: left });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Block, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.place(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.place(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        { className: 'block', style: (0, _extends3.default)({}, this.state), ref: function ref(_ref) {
            return _this2.ref = _ref;
          } },
        children
      );
    }
  }]);
  return Block;
}(_react.Component);

Block.defaultProps = {
  dimension: 25
};

var Freewall = function (_React$Component) {
  (0, _inherits3.default)(Freewall, _React$Component);

  function Freewall() {
    var _Object$getPrototypeO2;

    var _temp2, _this3, _ret2;

    (0, _classCallCheck3.default)(this, Freewall);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO2 = (0, _getPrototypeOf2.default)(Freewall)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3.state = {
      blocks: []
    }, _this3.blockify = function (children) {

      var blocks = children.map(function (child) {
        return child.type === Block ? child : _react2.default.createElement(
          Block,
          null,
          child
        );
      });

      _this3.setState({ blocks: blocks });
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this3, _ret2);
  }

  (0, _createClass3.default)(Freewall, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.blockify(this.props.children);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.blockify(props.children);
    }
  }, {
    key: 'render',
    value: function render() {
      var blocks = this.state.blocks;


      return _react2.default.createElement(
        'div',
        { className: 'freewall' },
        blocks
      );
    }
  }]);
  return Freewall;
}(_react2.default.Component);

exports.default = Freewall;