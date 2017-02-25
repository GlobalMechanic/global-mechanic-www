'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactRouterDom = require('react-router-dom');

var _globalMechanicComponents = require('global-mechanic-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Dummy
/******************************************************************************/

function stringify(obj) {
  var str = '';
  for (var i in obj) {
    str += i + ' : ' + obj[i] + '\n';
  }return str;
}

var Dummy = function Dummy(props) {
  return React.createElement(
    'div',
    null,
    stringify(props)
  );
};

/******************************************************************************/
// Data
/******************************************************************************/

var routes = [{
  path: '/directors',
  component: Dummy
}, {
  path: '/work',
  component: Dummy
}, {
  path: '/about',
  component: Dummy
}];

/******************************************************************************/
// Components
/******************************************************************************/

var NestableRoute = function NestableRoute(_ref) {
  var path = _ref.path,
      routes = _ref.routes,
      props = _ref.props,
      Component = _ref.component;
  return React.createElement(_reactRouterDom.Route, { path: path,
    render: function render(match) {
      return React.createElement(Component, (0, _extends3.default)({}, match, props, { routes: routes }));
    }
  });
};

var Routes = function Routes() {
  return React.createElement(NestableRoute, { path: '/', component: _globalMechanicComponents.Navigation, routes: routes });
};

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = Routes;