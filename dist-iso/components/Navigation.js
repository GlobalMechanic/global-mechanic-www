'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Navigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

var _Nut = require('./Nut');

var _Nut2 = _interopRequireDefault(_Nut);

var _styles = require('styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = _react.addons ? _react.addons.CSSTransitionGroup : null;
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function HomeLink(_ref) {
  var _private = _ref._private;


  var classes = (0, _classnames2.default)('left', 'clickable', { private: _private });

  return _react2.default.createElement(
    _reactRouter.Link,
    { to: '/', onlyActiveOnIndex: true, id: 'home-link',
      className: classes, activeClassName: 'active' },
    _react2.default.createElement(
      'div',
      { id: 'home-link-mask' },
      _react2.default.createElement(_Nut2.default, { id: 'home-nut' }),
      _react2.default.createElement(
        'h1',
        { id: 'home-link-title' },
        'Global Mechanic'
      )
    )
  );
}

function PageLink(_ref2) {
  var to = _ref2.to,
      children = _ref2.children;

  return _react2.default.createElement(
    _reactRouter.Link,
    { to: to, activeClassName: 'active',
      className: 'link right clickable' },
    _react2.default.createElement(
      'h1',
      null,
      children
    )
  );
}

function Links(_ref3) {
  var inverse = _ref3.inverse,
      _private = _ref3._private;


  var classes = (0, _classnames2.default)('padded', { inverse: inverse, private: _private });

  return _react2.default.createElement(
    'div',
    { id: 'links', className: classes },
    _react2.default.createElement(HomeLink, null),
    _react2.default.createElement(
      PageLink,
      { to: '/directors' },
      'Directors'
    ),
    _react2.default.createElement(
      PageLink,
      { to: '/work/featured_work' },
      'Work'
    ),
    _react2.default.createElement(
      PageLink,
      { to: '/about' },
      'About'
    )
  );
}

function Pages(_ref4) {
  var children = _ref4.children,
      other = (0, _objectWithoutProperties3.default)(_ref4, ['children']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ id: 'pages' }, other),
    children
  );
}

function Navigation(_ref5) {
  var children = _ref5.children,
      routes = _ref5.routes;


  var route = routes ? routes[routes.length - 1] : {};

  //Navigation should be styled inverse if the current route is
  var inverse = route.inverse,
      dark = route.dark,
      transition = route.transition,
      _private = route._private;


  var path = route.path || 'home';
  var key = path.match(/(\w+)/)[1];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Links, { inverse: inverse, _private: _private }),
    Transition ? _react2.default.createElement(
      Transition,
      {
        component: Pages,
        transitionName: transition || 'navigate',
        transitionEnterTimeout: _styles.variables.animationTime.value,
        transitionLeaveTimeout: _styles.variables.animationTime.value },
      (0, _react.cloneElement)(children, { key: key })
    ) : children,
    _react2.default.createElement(_Background2.default, { dark: dark })
  );
}