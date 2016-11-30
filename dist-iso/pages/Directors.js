'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Directors;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _components = require('../components');

var _Profile = require('../components/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DirectorList(_ref) {
  var documents = _ref.documents;
  var selected = _ref.selected;


  return _react2.default.createElement(_components.Dropdown, { title: 'Directors', items: documents.map(function (doc) {
      return (0, _Profile.getFullName)(doc);
    }),
    path: 'directors/', selected: selected });
}

function Directors(_ref2) {
  var children = _ref2.children;
  var other = (0, _objectWithoutProperties3.default)(_ref2, ['children']);


  var selected = other.routeParams.portfolio;

  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: 'directors-page' }, other),
    _react2.default.createElement(_components.Collection, { selected: selected, component: DirectorList, service: 'people',
      filter: function filter(item) {
        return item.role === 'director';
      } }),
    children
  );
}