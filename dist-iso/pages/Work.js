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

var _components = require('../components');

var _data = require('modules/data');

var _styles = require('styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShowcaseDropdown(_ref) {
  var documents = _ref.documents;
  var inverse = _ref.inverse;
  var selected = _ref.selected;
  var path = _ref.path;


  var title = selected ? selected.replace(/_/g, ' ') : 'Work';

  return _react2.default.createElement(_components.Dropdown, { title: title, inverse: inverse, items: documents.map(function (doc) {
      return doc.name;
    }),
    path: path, selected: selected });
}

var Work = function (_Component) {
  (0, _inherits3.default)(Work, _Component);

  function Work() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Work);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Work.__proto__ || (0, _getPrototypeOf2.default)(Work)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      showcases: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Work, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.route._private) return;

      _data.showcases.then(function (res) {
        var filtered = res.filter(function (show) {
          return show.website.scope === 'public' && show.products.length > 0;
        });
        setTimeout(function () {
          return _this2.setState({ showcases: filtered });
        }, _styles.variables.animationTime.value);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children']);
      var showcases = this.state.showcases;
      var _other$routeParams = other.routeParams;
      var showcase = _other$routeParams.showcase;
      var product = _other$routeParams.product;
      var _private = other.route._private;


      var inverse = !!other.route.inverse;

      var mainPath = _private ? 'private/portfolio/' : 'work/';

      var path = '/' + mainPath + showcase;

      var showcaseClasses = (0, _classnames2.default)('transition-slide-down', { inverse: inverse });

      return _react2.default.createElement(
        _Page2.default,
        (0, _extends3.default)({ id: 'work-page' }, other),
        _react2.default.createElement(ShowcaseDropdown, {
          inverse: inverse,
          documents: showcases,
          selected: showcase,
          path: mainPath }),
        _react2.default.createElement(_components.Showcase, { id: 'work-wall', path: path,
          className: showcaseClasses,
          featuredShowcase: showcase,
          featuredProduct: product }),
        children
      );
    }
  }]);
  return Work;
}(_react.Component);

exports.default = Work;