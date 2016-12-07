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

var _helper = require('modules/helper');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CARET_POINTS = ['17.3', '28.2 1', '0 33.5', '0'];

function Caret(_ref) {
  var hidden = _ref.hidden;


  var classes = (0, _classnames2.default)('dropdown-caret', { hidden: hidden });
  return _react2.default.createElement(
    'svg',
    { className: classes, viewBox: '0 0 34.3 28.7' },
    _react2.default.createElement('polygon', { points: CARET_POINTS })
  );
}

function Title(_ref2) {
  var items = _ref2.items;
  var onClick = _ref2.onClick;
  var children = _ref2.children;


  var classes = (0, _classnames2.default)({
    'clickable': items.length > 0
  });

  var caret = _react2.default.createElement(Caret, { hidden: items.length === 0 });
  var click = items.length > 0 ? onClick : null;

  return _react2.default.createElement(
    'h1',
    { className: classes, onClick: click },
    children,
    caret
  );
}

function List(_ref3) {
  var items = _ref3.items;
  var selected = _ref3.selected;
  var select = _ref3.select;


  if (items.length === 0) return null;

  return _react2.default.createElement(
    'ul',
    null,
    items.map(function (item) {

      var id = (0, _helper.urlify)(item);
      var classes = (0, _classnames2.default)('clickable', {
        active: selected === id
      });

      return _react2.default.createElement(
        'li',
        { className: classes, key: id,
          onClick: function onClick() {
            return select(id);
          } },
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
    }, _this.toggle = function (e) {
      e.stopPropagation();
      e.preventDefault();
      _this.setState({ open: !_this.state.open });
    }, _this.close = function () {
      _this.setState({ open: false });
    }, _this.select = function (value) {
      var path = _this.props.path;

      (0, _helper.navigate)('/' + path + value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      addEvent('click', window, this.close);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      removeEvent('click', window, this.close);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var items = _props.items;
      var selected = _props.selected;

      var classes = (0, _classnames2.default)('dropdown', {
        'dropdown-open': this.state.open
      });

      return _react2.default.createElement(
        'div',
        { className: 'dropdown-container transition-fade' },
        _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            Title,
            { items: items, onClick: this.toggle },
            title
          ),
          _react2.default.createElement(List, { items: items, selected: selected, select: this.select })
        )
      );
    }
  }]);
  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  title: _react.PropTypes.string,
  items: _react.PropTypes.array,
  path: _react.PropTypes.string
};
Dropdown.defaultProps = {
  items: []
};
exports.default = Dropdown;