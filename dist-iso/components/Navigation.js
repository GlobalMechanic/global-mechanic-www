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

function HomeIcon() {

  return _react2.default.createElement(_reactRouter.Link, { to: '/',
    onlyActiveOnIndex: true,
    className: 'nav-home left title clickable',
    activeClassName: 'active' });
}

function PageLink(_ref) {
  var to = _ref.to;
  var children = _ref.children;


  return _react2.default.createElement(
    _reactRouter.Link,
    { to: to,
      className: 'nav-link right title clickable',
      activeClassName: 'active' },
    children
  );
}

function NavHolder(_ref2) {
  var children = _ref2.children;
  var inverse = _ref2.inverse;

  var classes = inverse ? ' inverse' : '';

  return _react2.default.createElement(
    'div',
    { id: 'nav-holder', className: classes },
    children
  );
}

function Navigation(_ref3) {
  var children = _ref3.children;
  var routes = _ref3.routes;

  var inverse = routes && !!routes[routes.length - 1].inverse;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      NavHolder,
      { inverse: inverse },
      _react2.default.createElement(HomeIcon, null),
      _react2.default.createElement(
        PageLink,
        { to: '/directors' },
        'Directors'
      ),
      _react2.default.createElement(
        PageLink,
        { to: '/work/' + DefaultPortfolio },
        'Work'
      ),
      _react2.default.createElement(
        PageLink,
        { to: '/about' },
        'About'
      )
    ),
    children,
    _react2.default.createElement(_Background2.default, null)
  );
}