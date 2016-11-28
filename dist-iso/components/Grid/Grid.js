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

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _math = require('modules/math');

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Exports
/******************************************************************************/

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Grid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Grid)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      blocks: []
    }, _this.createNewCoords = function (item) {
      var _this$props$sizeFunc = _this.props.sizeFunc(item);

      var width = _this$props$sizeFunc.width;
      var height = _this$props$sizeFunc.height;


      width = (0, _math.max)((0, _math.round)(width), 1);
      height = (0, _math.max)((0, _math.round)(height), 1);

      return new _layout2.default.Coords(0, 0, width, height);
    }, _this.applyLayoutTimeout = function (props) {
      if ((0, _isExplicit2.default)(_this.layoutTimer)) clearTimeout(_this.layoutTimer);

      _this.layoutTimer = setTimeout(function () {
        return _this.applyLayout(props);
      }, 100);
    }, _this.applyLayout = function (props) {

      props = props || _this.props;

      var _props = props;
      var layout = _props.layout;
      var items = _props.items;
      var _this2 = _this;
      var ref = _this2.ref;


      var blocks = _this.createBlocksFromItems(items);

      layout.bounds = ref.getBoundingClientRect();
      layout.apply(blocks);

      _this.setState({ blocks: blocks });
    }, _this.createCell = function (block, i) {
      var coords = block.coords;
      var item = block.item;
      var _this$props = _this.props;
      var layout = _this$props.layout;
      var component = _this$props.component;
      var getCellId = _this$props.getCellId;
      var featuredId = _this$props.featuredId;
      var dimension = layout.dimension;

      var featured = featuredId && getCellId(block.i) === featuredId;

      var style = {
        left: coords.pos.x * dimension,
        top: coords.pos.y * dimension,
        width: coords.dim.x * dimension,
        height: coords.dim.y * dimension
      };

      return (0, _react.createElement)(component, { style: style, item: item, key: getCellId(block, i), featured: featured });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Grid, [{
    key: 'createBlocksFromItems',
    value: function createBlocksFromItems() {
      var _this3 = this;

      var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      return items.map(function (item) {
        return {
          item: item,
          coords: _this3.createNewCoords(item)
        };
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyLayout();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.applyLayoutTimeout(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var blocks = this.state.blocks;
      var _props2 = this.props;
      var layout = _props2.layout;
      var className = _props2.className;
      var other = (0, _objectWithoutProperties3.default)(_props2, ['layout', 'className']);
      var cells = layout.cells;
      var dimension = layout.dimension;


      var style = other.style;
      if (cells && dimension) {
        var unusedWidth = (cells.limits.x - cells.max.x) * dimension;
        unusedWidth += layout.bounds.width % dimension;

        style = style || {};
        style.height = cells.max.y * dimension, style.left = unusedWidth * 0.5;
      }

      var classes = (0, _classnames2.default)('grid', className);

      delete other.component;
      delete other.items;
      delete other.layout;
      delete other.getCellId;
      delete other.sizeFunc;
      delete other.style;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: classes, style: style, ref: function ref(_ref) {
            return _this4.ref = _ref;
          } }, other),
        blocks.map(this.createCell)
      );
    }
  }]);
  return Grid;
}(_react.Component);

Grid.propTypes = {
  component: _react.PropTypes.func.isRequired,
  items: _react.PropTypes.arrayOf(Object).isRequired,
  layout: _react.PropTypes.instanceOf(_layout2.default).isRequired,
  getCellId: _react.PropTypes.func.isRequired,
  sizeFunc: _react.PropTypes.func
};
Grid.defaultProps = {
  layout: new _layout2.default(),
  getCellId: function getCellId(block, i) {
    return i;
  },
  sizeFunc: function sizeFunc() {
    var width = 3 + (0, _math.random)() * 5;
    var height = width - 1;

    return { width: width, height: height };
  }
};
exports.default = Grid;