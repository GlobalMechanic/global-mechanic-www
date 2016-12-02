'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Director;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _directors = require('modules/directors');

var _directors2 = _interopRequireDefault(_directors);

var _components = require('components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Director(props) {
  var id = props.params.director;
  var children = props.children,
      other = (0, _objectWithoutProperties3.default)(props, ['children']);

  var director = _directors2.default.filter(function (dir) {
    return dir.id === id;
  })[0];

  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: id, className: 'inverse' }, other),
    _react2.default.createElement(_components.StaffPicture, { staff: director }),
    _react2.default.createElement(_components.Portfolio, { id: 'directors-portfolio', key: director.id, portfolio: director.portfolio,
      portfolioImagesHack: director.portfolioImagesHack,
      urlPrefix: '/directors/' + director.id + '/' }),
    children
  );
}