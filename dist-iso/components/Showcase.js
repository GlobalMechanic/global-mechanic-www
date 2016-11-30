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

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _reactRouter = require('react-router');

var _data = require('modules/data');

var _helper = require('modules/helper');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _math = require('modules/math');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

function Video(_ref) {
  var info = _ref.info;
  var show = _ref.show;
  var style = _ref.style;

  var classes = (0, _classnames2.default)('product-video', {
    'product-video-show': show
  });

  if (show) {
    style.width = (0, _math.min)(info.width, innerWidth);
    style.height = (0, _math.min)(info.height, innerHeight);
    style.top = (0, _math.max)((innerHeight - style.height) * 0.5, 0);
    style.left = (0, _math.max)((innerWidth - style.width) * 0.5, 0);
  }

  return _react2.default.createElement('div', { className: classes, style: style });
}

function Product(_ref2, _ref3) {
  var item = _ref2.item;
  var style = _ref2.style;
  var isFeatured = _ref2.isFeatured;
  var path = _ref3.path;


  var thumbStyle = {
    backgroundImage: 'url(' + HOST + '/assets/file/' + item.portrait + ')'
  };

  var classes = (0, _classnames2.default)('product', {
    'product-featured': isFeatured
  });

  var id = (0, _helper.urlify)(item.name);

  var targetPath = (path + '/' + id).replace(/\/\//g, '/');

  var click = function click() {
    return _reactRouter.browserHistory.push(targetPath);
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: classes, style: style, onClick: click },
      _react2.default.createElement('div', { className: 'product-image', style: thumbStyle })
    ),
    _react2.default.createElement(Video, { info: item.video, show: isFeatured, style: style }),
    _react2.default.createElement('div', { className: 'product-modal' })
  );
}
Product.contextTypes = {
  path: _react.PropTypes.string.isRequired
};

var Showcase = function (_React$Component) {
  (0, _inherits3.default)(Showcase, _React$Component);

  function Showcase() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Showcase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Showcase)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      showcases: [],
      products: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Showcase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _data.products.then(function (res) {
        return _this2.setState({ products: res });
      });
      _data.showcases.then(function (res) {
        return _this2.setState({ showcases: res });
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var path = this.props.path;

      return {
        path: path
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var featuredShowcase = _props.featuredShowcase;
      var featuredVideo = _props.featuredVideo;
      var other = (0, _objectWithoutProperties3.default)(_props, ['featuredShowcase', 'featuredVideo']);
      var _state = this.state;
      var showcases = _state.showcases;
      var products = _state.products;


      var showcase = showcases.filter(function (show) {
        return (0, _helper.urlify)(show.name) === featuredShowcase || show._id === featuredShowcase;
      })[0];
      var items = showcase ? products.filter(function (product) {
        return showcase.products.includes(product._id);
      }) : [];

      delete other.path;

      return _react2.default.createElement(_Grid2.default, (0, _extends3.default)({ items: items, component: Product, getCellId: function getCellId(item) {
          return (0, _helper.urlify)(item.name);
        },
        className: 'showcase' }, other, { featured: featuredVideo }));
    }
  }]);
  return Showcase;
}(_react2.default.Component);

Showcase.childContextTypes = {
  path: _react.PropTypes.string.isRequired
};
exports.default = Showcase;