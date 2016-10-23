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

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//this class will keep things stuck to the bottom, because I can't figure out reliable css to do the same

var $window = void 0;

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer(props) {
    (0, _classCallCheck3.default)(this, Footer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).call(this, props));

    if (!(0, _isExplicit2.default)(_this.props.content, String)) throw new Error('the content property should be an id');

    _this.state = { classes: '', style: null };
    _this.dom = null;
    _this.$this = null;
    _this.$target = null;
    _this.calcStyle = _this.calcStyle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Footer, [{
    key: 'calcStyle',
    value: function calcStyle() {
      if (!$window) $window = $(window);

      if (!this.$this) this.$this = $(this.dom);

      if (!this.$target) this.$target = $('#' + this.props.content);

      if (this.$target.length === 0) throw new Error('Could not find selection with id ' + this.props.content);

      var bottom = $window.height() > this.$target.height() + this.$target.offset().top + this.$this.height();
      var classes = bottom ? 'bottom' : '';

      this.setState({ classes: classes });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(window).on('resize', this.calcStyle);
      this.calcStyle();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(window).off('resize', this.calcStyle);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

      var suppliedClass = className || '';
      var classes = suppliedClass + (suppliedClass.length > 0 ? ' ' : '') + this.state.classes;
      return _react2.default.createElement(
        'footer',
        (0, _extends3.default)({ className: classes }, other, { ref: function ref(dom) {
            return _this2.dom = dom;
          } }),
        children
      );
    }
  }]);
  return Footer;
}(_react2.default.Component);

exports.default = Footer;