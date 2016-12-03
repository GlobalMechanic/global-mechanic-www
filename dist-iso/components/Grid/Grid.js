'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _Block = require('./Block');

var _Block2 = _interopRequireDefault(_Block);

var _math = require('modules/math');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Exports
/******************************************************************************/

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Grid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      blocks: [],
      gridHeight: null
    }, _this.getCoords = function (block, item) {

      if (block && block.coords) return block.coords;

      var _this$props$sizeFunc = _this.props.sizeFunc(item),
          width = _this$props$sizeFunc.width,
          height = _this$props$sizeFunc.height;

      var x = 0,
          y = 0;

      width = (0, _math.max)((0, _math.round)(width), 1);
      height = (0, _math.max)((0, _math.round)(height), 1);

      return new _layout2.default.Coords(x, y, width, height);
    }, _this.applyLayoutTimeout = function (props) {
      if ((0, _isExplicit2.default)(_this.layoutTimer)) clearTimeout(_this.layoutTimer);

      _this.layoutTimer = setTimeout(function () {
        return _this.applyLayout(props);
      }, 10);
    }, _this.applyLayout = function (props, resize) {
      props = props || _this.props;

      var _props = props,
          layout = _props.layout,
          items = _props.items;
      var _this2 = _this,
          ref = _this2.ref;


      var needsUpdate = resize || _this.needsUpdate(items);
      var blocks = needsUpdate ? _this.createBlocksFromItems(items) : _this.state.blocks;

      layout.bounds = ref.getBoundingClientRect();

      if (needsUpdate) layout.apply(blocks, _this.setBlocks).then(_this.spliceBlocks);
    }, _this.setBlocks = function (blocks, gridHeight) {
      _this.setState({ blocks: blocks, gridHeight: gridHeight });
    }, _this.spliceBlocks = function (input) {
      var output = _this.state.blocks;

      if (input.length < output.length) {
        var _output;

        (_output = output).splice.apply(_output, [0, input.length].concat((0, _toConsumableArray3.default)(input)));
        for (var i = input.length; i < output.length; i++) {
          output[i].coords.dim = _math.Vector.zero;
        }
      } else output = input;

      _this.setState({ blocks: output });
    }, _this.resize = function () {
      _this.applyLayout(_this.props, true);
    }, _this.createBlock = function (block, i) {
      var coords = block.coords,
          item = block.item;
      var _this$props = _this.props,
          layout = _this$props.layout,
          component = _this$props.component;
      var dimension = layout.dimension;


      var style = {
        left: coords.pos.x * dimension,
        top: coords.pos.y * dimension,
        width: coords.dim.x * dimension,
        height: coords.dim.y * dimension
      };

      return (0, _react.createElement)(component, { style: style, item: item, key: i });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Grid, [{
    key: 'createBlocksFromItems',
    value: function createBlocksFromItems() {
      var _this3 = this;

      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


      var blocks = this.state.blocks;

      return items.map(function (item, i) {
        return {
          item: item,
          coords: _this3.getCoords(blocks[i], item)
        };
      });
    }
  }, {
    key: 'needsUpdate',
    value: function needsUpdate(items) {
      var blocks = this.state.blocks;


      var allSmall = true;

      blocks.forEach(function (block) {
        if (block.coords.dim.x > 0 || block.coords.dim.y > 0) allSmall = false;
      });

      if (allSmall) return true;

      var blockItems = blocks.map(function (block) {
        return block.item;
      });
      for (var i = 0; i < items.length; i++) {
        if (!blockItems.includes(items[i])) return true;
      }return items.length === 0 || blocks.length === 0;
    }
  }, {
    key: 'createBlocks',
    value: function createBlocks() {
      var blocks = this.state.blocks;

      return blocks.map(this.createBlock);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyLayout();
      addEvent('resize', window, this.resize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      removeEvent('resize', window, this.resize);
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

      var _props2 = this.props,
          className = _props2.className,
          clip = _props2.clip,
          other = (0, _objectWithoutProperties3.default)(_props2, ['className', 'clip']);
      var gridHeight = this.state.gridHeight;


      this.gridHeight = (0, _isExplicit2.default)(gridHeight, Number) ? gridHeight : this.gridHeight;

      var style = other.style;
      if (clip) {
        style = style || {};
        style.height = this.gridHeight;
      }

      var classes = (0, _classnames2.default)('grid', className);

      delete other.component;
      delete other.items;
      delete other.layout;
      delete other.getCellId;
      delete other.sizeFunc;
      delete other.style;
      delete other.className;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: classes, style: style, ref: function ref(_ref2) {
            return _this4.ref = _ref2;
          } }, other),
        this.createBlocks()
      );
    }
  }]);
  return Grid;
}(_react.Component);

Grid.propTypes = {
  component: _react.PropTypes.func.isRequired,
  items: _react.PropTypes.arrayOf(Object).isRequired,
  layout: _react.PropTypes.instanceOf(_layout2.default).isRequired,
  sizeFunc: _react.PropTypes.func,
  clip: _react.PropTypes.bool
};
Grid.defaultProps = {
  component: _Block2.default,
  layout: new _layout2.default(),
  clip: true,
  sizeFunc: function sizeFunc() {
    var width = 4 + (0, _math.random)() * 5;
    var height = width - 1;

    return { width: width, height: height };
  }
};
exports.default = Grid;