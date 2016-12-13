'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.Vimeo = Vimeo;
exports.ProductTitle = ProductTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./Grid');

var _data = require('modules/data');

var _helper = require('modules/helper');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('styles');

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals HOST */

function Vimeo(_ref) {
  var vimeoId = _ref.vimeoId;
  var className = _ref.className;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['vimeoId', 'className']);


  var classes = (0, _classnames2.default)(className, 'product-video');

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: classes }, other),
    vimeoId ? _react2.default.createElement('iframe', { src: '//player.vimeo.com/video/' + vimeoId + '?badge=0&title=0&portrait=0&byline=0&embed=0&autoplay=0',
      frameBorder: false }) : null
  );
}

function Image(_ref2) {
  var id = _ref2.id;
  var className = _ref2.className;

  var classes = (0, _classnames2.default)(className, 'product-image');

  var href = HOST + '/assets/file/' + id;

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      'a',
      { href: href },
      _react2.default.createElement('img', { src: href })
    )
  );
}

function ProductTitle(_ref3) {
  var name = _ref3.name;
  var className = _ref3.className;


  var classes = (0, _classnames2.default)(className, 'product-title');
  return name ? _react2.default.createElement(
    'h2',
    { className: classes },
    name
  ) : null;
}

function ProductFeature(_ref4, _ref5) {
  var items = _ref4.items;
  var featured = _ref4.featured;
  var path = _ref5.path;


  var back = function back() {
    return (0, _helper.navigate)(path);
  };
  var hasFeature = !!featured;

  var classes = (0, _classnames2.default)('product-feature', {
    'product-feature-show': hasFeature
  });

  var item = hasFeature ? items.filter(function (item) {
    var isVimeo = item.productType === 'vimeo';
    if (isVimeo && (0, _helper.urlify)(item.name) === featured) return true;

    if (!isVimeo && item.images.includes(featured)) return true;

    return false;
  })[0] : null;

  var video = item ? item.video : {};
  var image = item && item.productType ? item.images.filter(function (id) {
    return id === featured;
  })[0] : null;

  var name = (item && item.name ? item.name : '').trim();

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement('div', { className: 'product-modal', onClick: back }),
    _react2.default.createElement(
      'div',
      { className: 'product-detail' },
      image ? _react2.default.createElement(Image, { id: image }) : _react2.default.createElement(Vimeo, video),
      image ? null : _react2.default.createElement(ProductTitle, { name: name })
    )
  );
}
ProductFeature.contextTypes = {
  path: _react.PropTypes.string.isRequired
};

function ProductBlock(_ref6, _ref7) {
  var item = _ref6.item;
  var other = (0, _objectWithoutProperties3.default)(_ref6, ['item']);
  var path = _ref7.path;


  var itemIsId = (0, _isExplicit2.default)(item, String);
  var imageId = item ? itemIsId ? item : item.portrait : null;

  var onClick = imageId ? function () {
    return (0, _helper.navigate)(path + '/' + imageId);
  } : null;

  return _react2.default.createElement(_Grid.Block, (0, _extends3.default)({ imageId: imageId, onClick: onClick }, other));
}
ProductBlock.contextTypes = {
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
    key: 'loadAfterTransition',
    value: function loadAfterTransition(service, items) {
      var _this2 = this;

      setTimeout(function () {
        return _this2.setState((0, _defineProperty3.default)({}, service, items));
      }, _styles.variables.animationTime.value);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _data.products.then(function (res) {
        return _this3.loadAfterTransition('products', res);
      });
      _data.showcases.then(function (res) {
        return _this3.loadAfterTransition('showcases', res);
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
      var _this4 = this;

      var _props = this.props;
      var featuredShowcase = _props.featuredShowcase;
      var featuredProduct = _props.featuredProduct;
      var className = _props.className;
      var other = (0, _objectWithoutProperties3.default)(_props, ['featuredShowcase', 'featuredProduct', 'className']);
      var _state = this.state;
      var showcases = _state.showcases;
      var products = _state.products;


      var showcase = showcases.filter(function (show) {
        return (0, _helper.urlify)(show.name) === featuredShowcase || show._id === featuredShowcase;
      })[0];

      var allProducts = showcase ? products.filter(function (product) {
        return showcase.products.includes(product._id);
      }) : [];

      var vimeoProducts = allProducts.filter(function (product) {
        return product.productType === 'vimeo';
      });
      var galleryProducts = allProducts.filter(function (product) {
        return product.productType === 'gallery';
      });

      delete other.path;

      var classes = (0, _classnames2.default)('showcase', className);

      return _react2.default.createElement(
        'div',
        { className: classes, ref: function ref(_ref8) {
            return _this4.ref = _ref8;
          } },
        _react2.default.createElement(ProductFeature, { items: allProducts, featured: featuredProduct }),
        _react2.default.createElement(_Grid.Grid, (0, _extends3.default)({ items: vimeoProducts, component: ProductBlock }, other)),
        galleryProducts.map(function (gallery) {
          return _react2.default.createElement(_Grid.Grid, (0, _extends3.default)({ items: gallery.images, component: ProductBlock }, other));
        })
      );
    }
  }]);
  return Showcase;
}(_react2.default.Component);

Showcase.childContextTypes = {
  path: _react.PropTypes.string.isRequired
};
exports.default = Showcase;