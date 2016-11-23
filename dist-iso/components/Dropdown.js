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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CARET_POINTS = ['17.3', '28.2 1', '0 33.5', '0'];

function Caret() {
  return _react2.default.createElement(
    'svg',
    { className: 'dropdown-caret', viewBox: '0 0 34.3 28.7' },
    _react2.default.createElement('polygon', { points: CARET_POINTS })
  );
}

function Title(_ref) {
  var items = _ref.items;
  var onClick = _ref.onClick;
  var children = _ref.children;


  var classes = (0, _classnames2.default)({
    'clickable': items.length > 0
  });

  var caret = items.length > 0 ? _react2.default.createElement(Caret, null) : null;
  var click = items.length > 0 ? onClick : null;

  return _react2.default.createElement(
    'h1',
    { className: classes, onClick: click },
    children,
    caret
  );
}

function List(_ref2) {
  var items = _ref2.items;


  if (items.length === 0) return null;

  return _react2.default.createElement(
    'ul',
    null,
    items.map(function (item, i) {
      return _react2.default.createElement(
        'li',
        { className: 'clickable', key: i },
        item
      );
    })
  );
}

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Dropdown)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.toggleOpen = function (e) {
      e.preventDefault();
      _this.setState({ open: !_this.state.open });
    }, _this.setSelected = function (e, value) {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var items = _props.items;

      var classes = (0, _classnames2.default)('dropdown', {
        'dropdown-open': this.state.open
      });

      return _react2.default.createElement(
        'div',
        { className: 'dropdown-container' },
        _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            Title,
            { items: items, onClick: this.toggleOpen },
            title
          ),
          _react2.default.createElement(List, { items: items })
        )
      );
    }
  }]);
  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  title: _react.PropTypes.string,
  items: _react.PropTypes.array
};
Dropdown.defaultProps = {
  items: []
};
exports.default = Dropdown;