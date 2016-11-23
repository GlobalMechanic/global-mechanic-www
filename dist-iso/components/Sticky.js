'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Stick = function (_Component) {
  (0, _inherits3.default)(Stick, _Component);

  function Stick() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Stick);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Stick)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      stick: false
    }, _this.checkStick = function (edge) {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Stick, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      addEvent('resize', window, this.checkStick);
      this.checkStick(this.props.edge);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.checkStick(props.edge);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      removeEvent('resize', window, this.checkStick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var edge = _props.edge;
      var other = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'edge']);


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { ref: function ref(_ref) {
            return _this2.ghostRef = _ref;
          }, className: 'sticky-ghost' }),
        _react2.default.createElement(
          'div',
          { ref: function ref(_ref2) {
              return _this2.mainRef = _ref2;
            } },
          children
        )
      );
    }
  }]);
  return Stick;
}(_react.Component);

Stick.propTypes = {
  edge: _react.PropTypes.string.isRequired
};
Stick.defaultProps = {
  edge: 'bottom'
};
exports.default = Stick;