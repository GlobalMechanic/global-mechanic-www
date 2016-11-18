'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

var DefaultPortfolio = 'featured_work';

function HomeTitle() {
  return _react2.default.createElement(
    'span',
    null,
    'Global Mechanic'
  );
}

function HomeIcon(_ref) {
  var addTitle = _ref.addTitle;


  var classes = 'nav-home left title clickable';
  return _react2.default.createElement(
    _reactRouter.Link,
    { to: '/',
      onlyActiveOnIndex: true,
      className: classes,
      activeClassName: 'active' },
    addTitle ? _react2.default.createElement(HomeTitle, null) : null
  );
}

function PageLink(_ref2) {
  var to = _ref2.to;
  var hidden = _ref2.hidden;
  var children = _ref2.children;


  var classes = 'nav-link right title ' + (hidden ? 'hidden' : 'clickable');

  return _react2.default.createElement(
    _reactRouter.Link,
    { to: to,
      className: classes,
      activeClassName: 'active' },
    children
  );
}

function NavHolder(_ref3) {
  var children = _ref3.children;
  var inverse = _ref3.inverse;

  var classes = inverse ? ' inverse' : '';

  return _react2.default.createElement(
    'div',
    { id: 'nav-holder', className: classes },
    children
  );
}

function Navigation(_ref4) {
  var children = _ref4.children;
  var routes = _ref4.routes;

  var currRoute = routes ? routes[routes.length - 1] : null;
  var inverse = currRoute && currRoute.inverse;
  var hidden = currRoute && currRoute.private;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      NavHolder,
      { inverse: inverse },
      _react2.default.createElement(HomeIcon, { addTitle: hidden }),
      _react2.default.createElement(
        PageLink,
        { to: '/directors', hidden: hidden },
        'Directors'
      ),
      _react2.default.createElement(
        PageLink,
        { to: '/work/' + DefaultPortfolio, hidden: hidden },
        'Work'
      ),
      _react2.default.createElement(
        PageLink,
        { to: '/about', hidden: hidden },
        'About'
      )
    ),
    children,
    _react2.default.createElement(_Background2.default, null)
  );
}