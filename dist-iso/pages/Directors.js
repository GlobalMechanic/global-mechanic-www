'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = Directors;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _directors = require('modules/directors');

var _directors2 = _interopRequireDefault(_directors);

var _reactRouter = require('react-router');

var _components = require('components');

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropdownSelect = function dropdownSelect(e, dir) {
  _reactRouter.browserHistory.push('/directors/' + dir.id);
};

function DirectorBlock(_ref) {
  var id = _ref.id,
      name = _ref.name,
      image = _ref.image,
      width = _ref.width,
      height = _ref.height;


  var click = function click() {
    _reactRouter.browserHistory.push('/directors/' + id);
  };

  return _react2.default.createElement(
    'div',
    {
      onClick: click,
      key: name, className: 'director-block bulge',
      style: {
        width: width,
        height: height
      } },
    _react2.default.createElement('div', { className: 'staff-picture', style: { backgroundImage: 'url(' + image + ')' } })
  );
}

function Directors(props) {

  return _react2.default.createElement(
    _Page2.default,
    (0, _extends3.default)({ id: 'directors-page' }, props),
    _react2.default.createElement(
      _components.Content,
      { id: 'directors-content' },
      _react2.default.createElement(_components.Dropdown, { title: 'Directors', items: _directors2.default, onSelection: dropdownSelect }),
      props.params.director ? props.children :
      // <FreeWall key={props.params.director} id='director-free-wall' className='med-width' selector='.director-block'>
      _react2.default.createElement(
        _components.FreeWall,
        { key: props.params.director, id: 'director-free-wall', selector: '.director-block' },
        _directors2.default.map(function (dir) {
          return _react2.default.createElement(DirectorBlock, (0, _extends3.default)({ key: dir.id }, dir));
        })
      )
    )
  );
}