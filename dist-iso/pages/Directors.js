'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = Directors;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _components = require('../components');

var _grid = require('../components/grid');

var _Profile = require('../components/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _helper = require('modules/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DirectorProfile(props) {
  return _react2.default.createElement(_Profile2.default, (0, _extends3.default)({
    getImage: function getImage(item) {
      return item.directorData.portrait || item.staffData.portrait;
    },
    getWriteup: function getWriteup(item) {
      return item.directorData.essay || item.staffData.essay;
    },
    path: 'directors/'
  }, props));
}

function DirectorGrid(_ref) {
  var featured = _ref.featured;
  var documents = _ref.documents;


  var layout = new _grid.Layout(50, false);

  return _react2.default.createElement(_grid.Grid, { id: 'staff-wall', className: 'directors inverse', component: DirectorProfile, items: documents,
    getCellId: function getCellId(item) {
      return (0, _helper.urlify)((0, _Profile.getFullName)(item));
    }, featured: featured,
    layout: layout });
}

function DirectorList(_ref2) {
  var documents = _ref2.documents;
  var video = _ref2.video;
  var director = _ref2.director;


  var directorDoc = director ? documents.filter(function (doc) {
    return (0, _helper.urlify)((0, _Profile.getFullName)(doc)) === director;
  })[0] : null;
  var showcase = directorDoc ? directorDoc.directorData.showcase : null;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_components.Dropdown, { title: 'Directors', items: documents.map(function (doc) {
        return (0, _Profile.getFullName)(doc);
      }),
      path: 'directors/', selected: director }),
    _react2.default.createElement(DirectorGrid, { featured: director, documents: documents }),
    _react2.default.createElement(_components.Showcase, { id: 'director-wall', featuredShowcase: showcase, featuredProduct: video, autoBounds: false, path: '/directors/' + director + '/' })
  );
}

function Directors(_ref3) {
  var children = _ref3.children;
  var other = (0, _objectWithoutProperties3.default)(_ref3, ['children']);


  var director = other.routeParams.director;
  var video = other.routeParams.video;

  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: 'directors-page' }, other),
    _react2.default.createElement(_components.Collection, { director: director, video: video, component: DirectorList, service: 'people',
      filter: function filter(item) {
        return item.role === 'director';
      } }),
    children
  );
}