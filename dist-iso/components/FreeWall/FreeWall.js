'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultTargetHeight = exports.DefaultDimension = undefined;

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

var _freewallBengaumondForked = require('./freewall-bengaumond-forked');

var _freewallBengaumondForked2 = _interopRequireDefault(_freewallBengaumondForked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Exports
/******************************************************************************/
/******************************************************************************/
// Dependencies
/******************************************************************************/

var DefaultCellSize = 80;
var DefaultAnimTime = 0.5;

var FreeWall = function (_React$Component) {
  (0, _inherits3.default)(FreeWall, _React$Component);

  function FreeWall(props) {
    (0, _classCallCheck3.default)(this, FreeWall);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FreeWall).call(this, props));

    _this.freewall = null;
    _this.resize = _this.resize.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FreeWall, [{
    key: 'reset',
    value: function reset() {
      var _props = this.props;
      var animTime = _props.animTime;
      var selector = _props.selector;
      var cellSize = _props.cellSize;


      this.freewall.reset({
        selector: selector,
        animate: animTime || DefaultAnimTime,
        cellW: cellSize || DefaultCellSize,
        cellH: cellSize || DefaultCellSize,
        gutterY: 0,
        gutterX: 0,
        delay: 0
      });
      this.resize();
    }
  }, {
    key: 'resize',
    value: function resize() {
      if (this.freewall && this.dom) this.freewall.fitWidth(this.dom.offsetWidth);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.freewall = new _freewallBengaumondForked2.default('#' + this.props.id);

      $(window).on('resize', this.resize);
      $(window).on('reset', this.reset);
      $(window).trigger('reset');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(window).off('resize', this.resize);
      $(window).off('reset', this.reset);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.reset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.children) return null;

      var _props2 = this.props;
      var id = _props2.id;
      var className = _props2.className;
      var children = _props2.children;


      return _react2.default.createElement(
        'div',
        { className: 'freewall-container' },
        _react2.default.createElement(
          'div',
          { id: id, className: className, ref: function ref(div) {
              return _this2.dom = div;
            } },
          children
        )
      );
    }
  }]);
  return FreeWall;
}(_react2.default.Component);

exports.default = FreeWall;
var DefaultDimension = exports.DefaultDimension = 50;

var DefaultTargetHeight = exports.DefaultTargetHeight = 500;