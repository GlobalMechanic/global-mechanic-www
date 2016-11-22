'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

var _Nut = require('./Nut');

var _Nut2 = _interopRequireDefault(_Nut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeLink() {
  return React.createElement(
    _reactRouter.Link,
    { to: '/', onlyActiveOnIndex: true,
      id: 'home-link', className: 'left clickable',
      activeClassName: 'active' },
    React.createElement(
      'div',
      { id: 'home-link-mask' },
      React.createElement(_Nut2.default, { id: 'home-nut' }),
      React.createElement(
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

  return React.createElement(
    _reactRouter.Link,
    { to: to, activeClassName: 'active',
      className: 'link right clickable' },
    React.createElement(
      'h1',
      null,
      children
    )
  );
}

function Links(_ref2) {
  var inverse = _ref2.inverse;


  var classes = (0, _classnames2.default)({ inverse: inverse, padded: true });

  return React.createElement(
    'div',
    { id: 'links', className: classes },
    React.createElement(HomeLink, null),
    React.createElement(
      PageLink,
      { to: '/directors' },
      'Directors'
    ),
    React.createElement(
      PageLink,
      { to: '/work/featured_work' },
      'Work'
    ),
    React.createElement(
      PageLink,
      { to: '/about' },
      'About'
    )
  );
}

function Navigation(_ref3) {
  var children = _ref3.children;
  var routes = _ref3.routes;


  var route = routes ? routes[routes.length - 1] : {};

  //Navigation should be styled inverse if the current route is
  var inverse = route.inverse;
  var dark = route.dark;


  return React.createElement(
    'div',
    null,
    React.createElement(Links, { inverse: inverse }),
    children,
    React.createElement(_Background2.default, { dark: dark })
  );
}