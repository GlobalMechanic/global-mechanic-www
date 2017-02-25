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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _globalMechanicComponents = require('global-mechanic-components');

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Temp
/******************************************************************************/

var Dummy = function Dummy(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      props.match.path
    )
  );
};

var DropDummy = function DropDummy(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_globalMechanicComponents.LinkDropdown, { title: match.path, links: ['yo', 'sup'] })
  );
};

/******************************************************************************/
// Helper
/******************************************************************************/

var TitleLink = function TitleLink(_ref2) {
  var children = _ref2.children,
      to = _ref2.to,
      icon = _ref2.icon,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'to', 'icon']);
  return _react2.default.createElement(
    _globalMechanicComponents.Link,
    (0, _extends3.default)({ exact: true, to: to || '/' + children }, props),
    icon,
    _react2.default.createElement(
      'h1',
      null,
      children
    )
  );
};

var Navigation = function Navigation(_ref3) {
  var priv = _ref3.private,
      disabled = _ref3.disabled;
  return _react2.default.createElement(
    _globalMechanicComponents.Row,
    { padded: true, classes: { 'navigation': true, 'navigation-disabled': disabled } },
    _react2.default.createElement(
      TitleLink,
      { to: '/', icon: _react2.default.createElement(_globalMechanicComponents.Icons.Nut, { inline: true }) },
      priv ? 'global mechanic' : null
    ),
    _react2.default.createElement(
      TitleLink,
      { show: !priv, margin: 'left-auto' },
      'about'
    ),
    _react2.default.createElement(
      TitleLink,
      { show: !priv, margin: 'left' },
      'work'
    ),
    _react2.default.createElement(
      TitleLink,
      { show: !priv, margin: 'left' },
      'directors'
    )
  );
};

var Pages = function Pages(props) {
  return _react2.default.createElement(_globalMechanicComponents.Base, (0, _extends3.default)({ classes: 'navigation-pages' }, props));
};

var PageRoute = function PageRoute(_ref4) {
  var exact = _ref4.exact,
      strict = _ref4.strict,
      path = _ref4.path,
      other = (0, _objectWithoutProperties3.default)(_ref4, ['exact', 'strict', 'path']);
  return _react2.default.createElement(_reactRouterDom.Route, { exact: exact, path: path, strict: strict,
    render: function render(_ref5) {
      var match = _ref5.match;
      return _react2.default.createElement(Page, (0, _extends3.default)({ match: match }, other));
    }
  });
};

var Page = function (_React$PureComponent) {
  (0, _inherits3.default)(Page, _React$PureComponent);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dark = _props.dark,
          priv = _props.private;
      var setBranding = this.context.setBranding;


      setBranding(!!dark, !!priv);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          Component = _props2.page,
          match = _props2.match;


      return _react2.default.createElement(Component, { match: match });
    }
  }]);
  return Page;
}(_react2.default.PureComponent);

/******************************************************************************/
// Exports
/******************************************************************************/

Page.contextTypes = {
  setBranding: _react2.default.PropTypes.func
};

var Routes = function (_React$Component) {
  (0, _inherits3.default)(Routes, _React$Component);

  function Routes() {
    var _ref6;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, Routes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref6 = Routes.__proto__ || (0, _getPrototypeOf2.default)(Routes)).call.apply(_ref6, [this].concat(args))), _this2), _this2.state = {
      dark: false,
      private: false
    }, _this2.setBranding = function (dark, priv) {
      return _this2.setState({ dark: dark, private: priv });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(Routes, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        setBranding: this.setBranding
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          dark = _state.dark,
          priv = _state.private;
      var disableNav = this.props.disableNav;


      return _react2.default.createElement(
        _globalMechanicComponents.Base,
        { id: 'website', classes: { light: !dark, dark: dark } },
        _react2.default.createElement(Navigation, { 'private': priv, disabled: disableNav }),
        _react2.default.createElement(
          Pages,
          null,
          _react2.default.createElement(PageRoute, { exact: true, path: '/', dark: true, page: Dummy }),
          _react2.default.createElement(PageRoute, { path: '/about', dark: true, page: Dummy }),
          _react2.default.createElement(PageRoute, { path: '/work', page: DropDummy }),
          _react2.default.createElement(PageRoute, { path: '/directors', page: DropDummy })
        ),
        _react2.default.createElement(_Background2.default, null)
      );
    }
  }]);
  return Routes;
}(_react2.default.Component);

Routes.childContextTypes = {
  setBranding: _react2.default.PropTypes.func
};
exports.default = Routes;