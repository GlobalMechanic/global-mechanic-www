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

var _TitleText = require('./TitleText');

var _TitleText2 = _interopRequireDefault(_TitleText);

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Caret(_ref) {
  var show = _ref.show;


  return show ? _react2.default.createElement('span', { className: 'caret' }) : null;
}

function Item(_ref2) {
  var value = _ref2.value;
  var onSelection = _ref2.onSelection;

  return _react2.default.createElement(
    'div',
    { className: 'dropdown-item', onClick: function onClick(e) {
        return onSelection(e, value);
      } },
    _react2.default.createElement(
      _TitleText2.default,
      { className: 'medium clickable' },
      value.name
    )
  );
}

function List(_ref3) {
  var items = _ref3.items;
  var open = _ref3.open;
  var onSelection = _ref3.onSelection;


  return _react2.default.createElement(
    'div',
    { className: 'dropdown-list' + (open ? ' active' : '') },
    items.map(function (item) {
      return _react2.default.createElement(Item, { key: item.id, value: item, onSelection: onSelection });
    })
  );
}

var Dropdown = function (_React$Component) {
  (0, _inherits3.default)(Dropdown, _React$Component);

  function Dropdown(props) {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Dropdown).call(this, props));

    _this.state = {
      open: false
    };
    _this.setOpen = _this.setOpen.bind(_this);
    _this.setSelected = _this.setSelected.bind(_this);
    _this.clickAnywhereToClose = _this.clickAnywhereToClose.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'setSelected',
    value: function setSelected(e, value) {
      var onSelection = this.props.onSelection;

      if ((0, _isExplicit2.default)(onSelection, Function)) onSelection(e, value);
    }
  }, {
    key: 'setOpen',
    value: function setOpen(e, value) {
      e.stopPropagation();

      var open = (0, _isExplicit2.default)(value, Boolean) ? value : !this.state.open;
      this.setState({ open: open });
    }
  }, {
    key: 'clickAnywhereToClose',
    value: function clickAnywhereToClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(window).click(this.clickAnywhereToClose);

      if (this.props.open) this.setOpen();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(window).off('click', this.clickAnywhereToClose);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var items = _props.items;
      var other = (0, _objectWithoutProperties3.default)(_props, ['className', 'items']);
      var open = this.state.open;


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: 'dropdown padded inverse ' + (className || '') }, other, { onClick: this.setOpen }),
        _react2.default.createElement(
          'h1',
          { className: 'clickable' },
          this.props.title,
          _react2.default.createElement(Caret, { show: !!this.props.title })
        ),
        _react2.default.createElement(List, { items: items, open: open, onSelection: this.setSelected, $dom: this.$dom })
      );
    }
  }]);
  return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;