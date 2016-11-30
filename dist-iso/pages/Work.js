'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Work;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShowcaseDropdown(_ref) {
  var documents = _ref.documents;
  var selected = _ref.selected;


  var title = selected ? selected.replace(/_/g, ' ') : 'Work';

  return _react2.default.createElement(_components.Dropdown, { title: title, items: documents.map(function (doc) {
      return doc.name;
    }),
    path: 'work/', selected: selected });
}

function Work(_ref2) {
  var children = _ref2.children;
  var other = (0, _objectWithoutProperties3.default)(_ref2, ['children']);


  var showcase = other.routeParams.portfolio;
  var video = other.routeParams.video;
  var path = other.location.pathname;

  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: 'work-page' }, other),
    _react2.default.createElement(_components.Collection, { selected: showcase, component: ShowcaseDropdown, service: 'showcases',
      filter: function filter(item) {
        return item.website.scope === 'public';
      } }),
    _react2.default.createElement(_components.Showcase, { id: 'work-wall', featuredShowcase: showcase, featuredVideo: video, autoBounds: false, path: path }),
    children
  );
}