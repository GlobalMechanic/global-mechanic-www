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

function HomeLink() {
  return _react2.default.createElement(
    _reactRouter.Link,
    { to: '/', onlyActiveOnIndex: true,
      id: 'home-link', className: 'left clickable',
      activeClassName: 'active' },
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

function PageLink(_ref) {
  var to = _ref.to;
  var children = _ref.children;

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

function Links(_ref2) {
  var inverse = _ref2.inverse;


  var classes = (0, _classnames2.default)({ inverse: inverse, padded: true });

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

function Pages(_ref3) {
  var children = _ref3.children;
  var other = (0, _objectWithoutProperties3.default)(_ref3, ['children']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ id: 'pages' }, other),
    children
  );
}

function Navigation(_ref4) {
  var children = _ref4.children;
  var routes = _ref4.routes;


  var route = routes ? routes[routes.length - 1] : {};

  //Navigation should be styled inverse if the current route is
  var inverse = route.inverse;
  var dark = route.dark;
  var transition = route.transition;


  var path = route.path || 'home';
  var key = path.match(/(\w+)/)[1];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Links, { inverse: inverse }),
    Transition ? _react2.default.createElement(
      Transition,
      {
        component: Pages,
        transitionName: transition || 'none',
        transitionEnterTimeout: _styles.variables.animationTime.value,
        transitionLeaveTimeout: _styles.variables.animationTime.value },
      (0, _react.cloneElement)(children, { key: key })
    ) : children,
    _react2.default.createElement(_Background2.default, { dark: dark })
  );
}