'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

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
  var back = _ref2.back;
  var className = _ref2.className;

  var classes = (0, _classnames2.default)(className, 'product-image');

  var href = HOST + '/assets/file/' + id;

  return _react2.default.createElement(
    'div',
    { className: classes, onClick: back },
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

  var item = hasFeature ? items.filter(function (item) {
    if (item.productType === 'vimeo' && (item._id === featured || (0, _helper.urlify)(item.name) === featured)) return true;

    if (item.productType === 'gallery' && item.images.includes(featured)) return true;

    return false;
  })[0] : null;

  var video = item ? item.video : null;
  var image = item && item.productType === 'gallery' ? item.images.filter(function (id) {
    return id === featured;
  })[0] : null;

  var name = (item && item.name ? item.name : '').trim();

  var classes = (0, _classnames2.default)('product-feature', {
    'product-feature-show': hasFeature,
    'product-feature-video': video,
    'product-feature-image': image
  });

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement('div', { className: 'product-modal', onClick: back }),
    _react2.default.createElement(
      'div',
      { className: 'product-detail' },
      image ? _react2.default.createElement(Image, { id: image, back: back }) : _react2.default.createElement(Vimeo, video),
      image ? null : _react2.default.createElement(ProductTitle, { name: name })
    )
  );
}
ProductFeature.contextTypes = {
  path: _react.PropTypes.string.isRequired
};

function ProductBlockIcon(_ref6) {
  var type = _ref6.type;

  return type ? _react2.default.createElement('div', { className: 'product-block-icon ' + type }) : null;
}

var ProductBlock = function (_React$Component) {
  (0, _inherits3.default)(ProductBlock, _React$Component);

  function ProductBlock() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProductBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(ProductBlock)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      type: false
    }, _this.setIconType = function (image) {
      var item = _this.props.item;

      var itemIsImage = (0, _isExplicit2.default)(item, String);

      if (itemIsImage) (0, _isomorphicFetch2.default)(image.src.replace('-thumb', '')).then(function (res) {
        var mime = res.headers.get('content-type');
        var iconType = mime.replace('image/', '');
        _this.setState({ iconType: iconType });
      });else _this.setState({ iconType: 'video' });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProductBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var item = _props.item;
      var other = (0, _objectWithoutProperties3.default)(_props, ['item']);
      var _context = this.context;
      var path = _context.path;
      var showIcons = _context.showIcons;

      //bc

      var itemIsImage = (0, _isExplicit2.default)(item, String);
      var imageId = item ? itemIsImage ? item : item.portrait : null;
      var pathSuffix = itemIsImage ? imageId : (0, _helper.urlify)(item.name);

      var onClick = imageId ? function () {
        return (0, _helper.navigate)(path + '/' + pathSuffix);
      } : null;

      return _react2.default.createElement(
        _Grid.Block,
        (0, _extends3.default)({ imageId: imageId, onClick: onClick }, other, { onImageLoad: showIcons ? this.setIconType : null }),
        showIcons ? _react2.default.createElement(ProductBlockIcon, { type: this.state.iconType }) : null
      );
    }
  }]);
  return ProductBlock;
}(_react2.default.Component);

ProductBlock.contextTypes = {
  path: _react.PropTypes.string.isRequired,
  showIcons: _react.PropTypes.bool
};

var Showcase = function (_React$Component2) {
  (0, _inherits3.default)(Showcase, _React$Component2);

  function Showcase() {
    var _Object$getPrototypeO2;

    var _temp2, _this2, _ret2;

    (0, _classCallCheck3.default)(this, Showcase);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO2 = (0, _getPrototypeOf2.default)(Showcase)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.state = {
      products: [],
      items: []
    }, _this2.setProducts = function (props) {
      var _ref7 = props || _this2.props;

      var featuredShowcase = _ref7.featuredShowcase;


      _data.showcases.then(function (shows) {
        var showcase = shows.filter(function (show) {
          return (0, _helper.urlify)(show.name) === featuredShowcase || show._id === featuredShowcase;
        })[0];

        if (!showcase) return null;

        _data.products.then(function (prods) {

          var showIcons = false;
          var products = prods.filter(function (prod) {
            return showcase.products.includes(prod._id);
          });
          var items = [];

          products.forEach(function (product) {
            if (product.productType === 'vimeo') items.push(product);else {
              showIcons = true;
              items.push.apply(items, (0, _toConsumableArray3.default)(product.images));
            }
          });

          _this2.setState({
            products: products,
            items: items,
            showIcons: showIcons
          });
        });
      });
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(Showcase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(this.setProducts, _styles.variables.animationTime.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      this.setProducts(next);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var path = this.props.path;
      var showIcons = this.state.showIcons;

      return {
        path: path,
        showIcons: showIcons
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props;
      var featuredProduct = _props2.featuredProduct;
      var className = _props2.className;
      var other = (0, _objectWithoutProperties3.default)(_props2, ['featuredProduct', 'className']);
      var _state = this.state;
      var products = _state.products;
      var items = _state.items;


      delete other.path;
      delete other.featuredShowcase;
      delete other.onImageLoad;

      var classes = (0, _classnames2.default)('showcase', className);

      return _react2.default.createElement(
        'div',
        { className: classes, ref: function ref(_ref8) {
            return _this3.ref = _ref8;
          } },
        _react2.default.createElement(ProductFeature, { items: products, featured: featuredProduct }),
        _react2.default.createElement(_Grid.Grid, (0, _extends3.default)({ items: items, component: ProductBlock }, other))
      );
    }
  }]);
  return Showcase;
}(_react2.default.Component);

Showcase.childContextTypes = {
  path: _react.PropTypes.string.isRequired,
  showIcons: _react.PropTypes.bool
};
exports.default = Showcase;