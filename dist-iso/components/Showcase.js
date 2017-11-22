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

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _data = require('modules/data');

var _helper = require('modules/helper');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('styles');

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals HOST */

function Vimeo(_ref) {
  var vimeoId = _ref.vimeoId,
      className = _ref.className,
      other = (0, _objectWithoutProperties3.default)(_ref, ['vimeoId', 'className']);


  var classes = (0, _classnames2.default)(className, 'product-video');

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: classes }, other),
    vimeoId ? _react2.default.createElement('iframe', {
      src: '//player.vimeo.com/video/' + vimeoId + '?badge=0&title=0&portrait=0&byline=0&embed=0&autoplay=0',
      frameBorder: false
    }) : null
  );
}

function Essay(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      children = _ref2.children;


  if (!(0, _isExplicit2.default)(children, String)) return null;

  return _react2.default.createElement(_reactMarkdown2.default, { className: className, style: style, source: children });
}

var Media = function (_React$Component) {
  (0, _inherits3.default)(Media, _React$Component);

  function Media() {
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Media.__proto__ || (0, _getPrototypeOf2.default)(Media)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      controls: false
    }, _this.showControls = function () {
      return _this.setState({ controls: true });
    }, _this.hideControls = function () {
      return _this.setState({ controls: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Media, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          poster = _props.poster,
          src = _props.src,
          type = _props.type;
      var controls = this.state.controls;


      return _react2.default.createElement(
        'video',
        { className: 'wip-icon-container',
          controls: controls,
          onMouseEnter: this.showControls,
          onMouseLeave: this.hideControls,
          preload: true,
          style: {
            backgroundImage: 'url(' + poster + ')',
            backgroundSize: '45%', //not sure why 48
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          } },
        _react2.default.createElement('source', { src: src, type: type })
      );
    }
  }]);
  return Media;
}(_react2.default.Component);

var File = function (_React$Component2) {
  (0, _inherits3.default)(File, _React$Component2);

  function File() {
    var _ref4;

    var _temp2, _this2, _ret2;

    (0, _classCallCheck3.default)(this, File);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref4 = File.__proto__ || (0, _getPrototypeOf2.default)(File)).call.apply(_ref4, [this].concat(args))), _this2), _this2.state = {
      description: null,
      name: null,
      ext: null,
      mime: null,
      size: null
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(File, [{
    key: 'getMetaData',
    value: function getMetaData(props) {
      var _this3 = this;

      var file = props.file;


      if (this.state.size && file === this.props.file) return;

      var url = HOST + '/assets/file/' + file + '-meta';
      (0, _isomorphicFetch2.default)(url).then(function (res) {
        var type = res.headers.get('content-type');
        if (type && type.includes('application/json')) return res.json();else throw new Error('No JSON in response');
      }).then(function (data) {
        var json = JSON.parse(data);
        _this3.setState((0, _extends3.default)({}, json));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getMetaData(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.getMetaData(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var file = this.props.file;
      var _state = this.state,
          name = _state.name,
          description = _state.description,
          mime = _state.mime,
          ext = _state.ext;


      var url = HOST + '/assets/file/' + file;
      var thumb = url + '-thumb';
      var download = url + '?download=' + name + ext;

      var icon = function () {

        var isVideo = mime && mime.includes('video');
        var isAudio = mime && mime.includes('audio');
        var isImage = mime && mime.includes('image');

        if (isVideo || isAudio) return _react2.default.createElement(Media, { poster: isAudio ? thumb : null, src: url, type: mime });else if (isImage) return _react2.default.createElement(
            'a',
            { className: 'wip-icon-container', href: isImage ? url : download, target: isImage ? '_blank' : null },
            _react2.default.createElement(_Image2.default, { className: 'wip-image', thumb: false, imageId: file, style: {
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom'
              } })
          );else return null;
      }();

      return _react2.default.createElement(
        'div',
        { className: 'wip-file' },
        icon,
        _react2.default.createElement(
          'div',
          { className: 'wip-meta' },
          _react2.default.createElement(
            'span',
            { className: 'wip-title' },
            _react2.default.createElement('a', { href: download, className: 'wip-download' }),
            _react2.default.createElement(
              'h2',
              { className: 'wip-name' },
              name
            ),
            _react2.default.createElement(
              'h4',
              { className: 'wip-ext' },
              ext
            )
          ),
          _react2.default.createElement(
            Essay,
            { className: 'wip-description' },
            description
          )
        )
      );
    }
  }]);
  return File;
}(_react2.default.Component);

function FileList(_ref5) {
  var files = _ref5.files;

  return files ? _react2.default.createElement(
    'div',
    { className: 'padded' },
    ' ',
    files.map(function (file) {
      return _react2.default.createElement(File, { file: file });
    }),
    ' '
  ) : null;
}

function LinkImage(_ref6) {
  var id = _ref6.id,
      back = _ref6.back,
      className = _ref6.className;

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

function ProductTitle(_ref7) {
  var name = _ref7.name,
      className = _ref7.className;


  var classes = (0, _classnames2.default)(className, 'product-title');
  return name ? _react2.default.createElement(
    'h2',
    { className: classes },
    name
  ) : null;
}

function ProductFeature(_ref8, _ref9) {
  var items = _ref8.items,
      featured = _ref8.featured;
  var path = _ref9.path;


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
      image ? _react2.default.createElement(LinkImage, { id: image, back: back }) : _react2.default.createElement(Vimeo, video),
      image ? null : _react2.default.createElement(ProductTitle, { name: name })
    )
  );
}
ProductFeature.contextTypes = {
  path: _react.PropTypes.string.isRequired
};

function ProductBlockIcon(_ref10) {
  var type = _ref10.type;

  return type ? _react2.default.createElement('div', { className: 'product-block-icon ' + type }) : null;
}

var ProductBlock = function (_React$Component3) {
  (0, _inherits3.default)(ProductBlock, _React$Component3);

  function ProductBlock() {
    var _ref11;

    var _temp3, _this4, _ret3;

    (0, _classCallCheck3.default)(this, ProductBlock);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this4 = (0, _possibleConstructorReturn3.default)(this, (_ref11 = ProductBlock.__proto__ || (0, _getPrototypeOf2.default)(ProductBlock)).call.apply(_ref11, [this].concat(args))), _this4), _this4.state = {
      type: false
    }, _this4.setIconType = function (image) {
      var item = _this4.props.item;

      var itemIsImage = (0, _isExplicit2.default)(item, String);

      if (itemIsImage) (0, _isomorphicFetch2.default)(image.src.replace('-thumb', '')).then(function (res) {
        var mime = res.headers.get('content-type');
        var iconType = mime.replace('image/', '');
        _this4.setState({ iconType: iconType });
      });else _this4.setState({ iconType: 'video' });
    }, _temp3), (0, _possibleConstructorReturn3.default)(_this4, _ret3);
  }

  (0, _createClass3.default)(ProductBlock, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          item = _props2.item,
          other = (0, _objectWithoutProperties3.default)(_props2, ['item']);
      var _context = this.context,
          path = _context.path,
          showIcons = _context.showIcons;

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

var Showcase = function (_React$Component4) {
  (0, _inherits3.default)(Showcase, _React$Component4);

  function Showcase() {
    var _ref12;

    var _temp4, _this5, _ret4;

    (0, _classCallCheck3.default)(this, Showcase);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret4 = (_temp4 = (_this5 = (0, _possibleConstructorReturn3.default)(this, (_ref12 = Showcase.__proto__ || (0, _getPrototypeOf2.default)(Showcase)).call.apply(_ref12, [this].concat(args))), _this5), _this5.state = {
      showcase: null,
      files: null,
      products: [],
      items: []
    }, _this5.setProducts = function (props) {
      var _ref13 = props || _this5.props,
          featuredShowcase = _ref13.featuredShowcase;

      _data.showcases.then(function (shows) {
        var showcase = shows.filter(function (show) {
          return (0, _helper.urlify)(show.name) === featuredShowcase || show._id === featuredShowcase;
        })[0];

        if (!showcase) return _this5.setState({ showcase: showcase, products: [], files: null, items: [] });

        var scope = showcase.website.scope;

        if (scope === 'work-in-progress') {

          var files = showcase.files;

          _this5.setState({
            showcase: showcase,
            products: _data.products,
            files: files
          });
        } else {

          _data.products.then(function (prods) {

            var showIcons = false;
            var products = prods.filter(function (prod) {
              return showcase.products && showcase.products.includes(prod._id);
            });
            var items = [];

            products.forEach(function (product) {
              if (product.productType === 'vimeo') items.push(product);else {
                showIcons = true;
                items.push.apply(items, (0, _toConsumableArray3.default)(product.images));
              }
            });

            _this5.setState({
              showcase: showcase,
              products: products,
              items: items,
              showIcons: showIcons
            });
          });
        }
      });
    }, _temp4), (0, _possibleConstructorReturn3.default)(_this5, _ret4);
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
      var _this6 = this;

      var _props3 = this.props,
          featuredProduct = _props3.featuredProduct,
          className = _props3.className,
          other = (0, _objectWithoutProperties3.default)(_props3, ['featuredProduct', 'className']);
      var _state2 = this.state,
          products = _state2.products,
          items = _state2.items,
          showcase = _state2.showcase,
          files = _state2.files;


      delete other.path;
      delete other.featuredShowcase;
      delete other.onImageLoad;

      var classes = (0, _classnames2.default)('showcase', className);

      var portrait = showcase && showcase.portrait && showcase.website && showcase.website.showPortrait ? _react2.default.createElement(_Image2.default, { className: 'showcase-portrait', imageId: showcase.portrait }) : null;

      var essay = showcase && showcase.website && showcase.website.essay && showcase.website.showEssay ? _react2.default.createElement(
        Essay,
        { className: (0, _classnames2.default)('showcase-essay', { 'showcase-essay-right': portrait }) },
        showcase.website.essay
      ) : null;

      return _react2.default.createElement(
        'div',
        { className: classes, ref: function ref(_ref14) {
            return _this6.ref = _ref14;
          } },
        portrait || essay ? _react2.default.createElement(
          'div',
          { className: 'showcase-detail' },
          portrait,
          essay
        ) : null,
        _react2.default.createElement(FileList, { files: files }),
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