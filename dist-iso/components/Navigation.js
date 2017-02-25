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
      'Dummy'
    ),
    console.log(props)
  );
};

/******************************************************************************/
// Helper
/******************************************************************************/

var NavLink = function NavLink(_ref) {
  var children = _ref.children,
      to = _ref.to,
      icon = _ref.icon,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'to', 'icon']);
  return _react2.default.createElement(
    _globalMechanicComponents.Link,
    (0, _extends3.default)({ to: to || '/' + children }, props),
    icon,
    _react2.default.createElement(
      'h1',
      null,
      children
    )
  );
};

/******************************************************************************/
// Exports
/******************************************************************************/

var Navigation = function (_React$Component) {
  (0, _inherits3.default)(Navigation, _React$Component);

  function Navigation() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      light: true,
      public: true
    }, _this.setLight = function (light) {
      return _this.setState({ light: light });
    }, _this.setPublic = function (pub) {
      return _this.setState({ public: pub });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          light = _state.light,
          pub = _state.public;


      return _react2.default.createElement(
        _globalMechanicComponents.Panel,
        { light: light, dark: !light },
        _react2.default.createElement(
          _globalMechanicComponents.Row,
          null,
          _react2.default.createElement(
            NavLink,
            { to: '/', icon: _react2.default.createElement(_globalMechanicComponents.Icons.Nut, { inline: true, width: '2rem' }) },
            !pub ? 'global mechanic' : null
          ),
          _react2.default.createElement(
            NavLink,
            { show: pub, margin: 'left-auto', to: '/gears' },
            'about'
          ),
          _react2.default.createElement(
            NavLink,
            { show: pub, margin: 'left', to: '/showcase' },
            'work'
          ),
          _react2.default.createElement(
            NavLink,
            { show: pub, margin: 'left' },
            'directors'
          )
        ),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Dummy })
      );
    }
  }]);
  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;