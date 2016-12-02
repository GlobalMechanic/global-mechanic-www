'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Grid = require('components/Grid');

var _components = require('components');

var _data = require('modules/data');

var _helper = require('modules/helper');

var _styles = require('styles');

var _math = require('modules/math');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIRECTOR_PATH = '/directors/';

var DirectorLayout = new _Grid.Layout(60, false);

function DirectorList(_ref) {
  var director = _ref.director,
      directors = _ref.directors;

  return _react2.default.createElement(_components.Dropdown, { title: 'Directors', items: directors.map(function (d) {
      return (0, _helper.getFullName)(d);
    }),
    path: DIRECTOR_PATH, selected: director });
}

var Directors = function (_Component) {
  (0, _inherits3.default)(Directors, _Component);

  function Directors() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Directors);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Directors.__proto__ || (0, _getPrototypeOf2.default)(Directors)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      directors: []
    }, _this.size = function () {
      return {
        width: 4 + (0, _math.random)(),
        height: 3 + (0, _math.random)()
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Directors, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _data.people.then(function (ppl) {
        var directors = ppl.filter(function (p) {
          return p.directorData && p.directorData.showOnWebsite;
        });
        setTimeout(function () {
          return _this2.setState({ directors: directors });
        }, _styles.variables.animationTime.value);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['children']);
      var directors = this.state.directors;
      var _other$routeParams = other.routeParams,
          director = _other$routeParams.director,
          product = _other$routeParams.product;


      var directorDoc = director ? directors.filter(function (doc) {
        return (0, _helper.urlify)((0, _helper.getFullName)(doc)) === director;
      })[0] : null;
      var showcaseId = directorDoc ? directorDoc.directorData.showcase : null;

      return _react2.default.createElement(
        _Page2.default,
        (0, _extends3.default)({ id: 'directors-page' }, other),
        _react2.default.createElement(DirectorList, { director: director, directors: directors }),
        _react2.default.createElement(
          'div',
          { id: 'director', className: 'inverse fill transition-slide-down' },
          _react2.default.createElement(_components.People, { director: true, path: DIRECTOR_PATH, featured: director, layout: DirectorLayout,
            size: this.size }),
          _react2.default.createElement(_components.Showcase, { path: DIRECTOR_PATH + '/' + director, featuredShowcase: showcaseId,
            featuredProduct: product })
        ),
        children
      );
    }
  }]);
  return Directors;
}(_react.Component);

exports.default = Directors;