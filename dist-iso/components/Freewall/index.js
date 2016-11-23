'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floor = Math.floor;
var max = Math.max;


function Block(_ref) {
  var coords = _ref.coords;
  var dimension = _ref.dimension;
  var children = _ref.children;


  var style = {
    top: coords.top * dimension,
    left: coords.left * dimension,
    width: coords.width * dimension,
    height: coords.height * dimension
  };

  return _react2.default.createElement(
    'div',
    { className: 'block', style: style },
    children
  );
}

var Freewall = function (_React$Component) {
  (0, _inherits3.default)(Freewall, _React$Component);

  function Freewall() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Freewall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Freewall)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      data: []
    }, _this.floorCoord = function (axis) {

      if (!(0, _isExplicit2.default)(axis, Number)) return 1;

      var dimension = _this.props.dimension;


      return max(floor(axis / dimension), 1);
    }, _this.placeAll = function (children) {

      var grid = {};

      var contain = _this.ref.getBoundingClientRect();
      var limits = {
        cols: _this.floorCoord(contain.width),
        rows: Infinity
      };

      var data = children.map(function (child, i) {
        return {
          coords: _this.getCoords(child, i),
          child: child
        };
      });

      var unplaced = data.slice();
      while (unplaced.length > 0) {
        var smallest = _this.pluckLargest(unplaced);
        _this.place(smallest.coords, grid, limits);
      }

      _this.setState({ data: data });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Freewall, [{
    key: 'getCoords',
    value: function getCoords(child, index) {
      var data = this.state.data;


      if (data[index]) return data[index].coords;

      var style = child.props.style;


      return {

        width: this.floorCoord(style.width),
        height: this.floorCoord(style.height),
        top: 0,
        left: 0

      };
    }
  }, {
    key: 'canFill',
    value: function canFill(coords, grid, limits) {

      for (var x = coords.left; x < coords.left + coords.width; x++) {
        for (var y = coords.top; y < coords.top + coords.height; y++) {
          if (grid[x + '-' + y] || x >= limits.cols || y >= limits.rows) return false;
        }
      }

      return true;
    }
  }, {
    key: 'fill',
    value: function fill(coords, grid) {
      for (var x = coords.left; x < coords.left + coords.width; x++) {
        for (var y = coords.top; y < coords.top + coords.height; y++) {
          grid[x + '-' + y] = true;
        }
      }
    }
  }, {
    key: 'place',
    value: function place(coords, grid, limits) {

      coords.left = 0;
      coords.top = 0;

      for (var y = 0; y < limits.rows; y++) {
        for (var x = 0; x < limits.cols; x++) {
          coords.left = x, coords.top = y;
          if (this.canFill(coords, grid, limits)) return this.fill(coords, grid);
        }
      }
    }
  }, {
    key: 'pluckLargest',
    value: function pluckLargest(data) {

      var area = null;
      var index = 0;

      for (var i = 0; i < data.length; i++) {
        var curr = data[i].coords;
        var currArea = curr.width * curr.height;

        if (area === null || area < currArea) {
          area = currArea;
          index = i;
        }
      }

      return data.splice(index, 1)[0];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.placeAll(this.props.children);
      addEvent('resize', window, function () {
        return _this2.placeAll(_this2.props.children);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.placeAll(props.children);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var data = this.state.data;


      return _react2.default.createElement(
        'div',
        { className: 'freewall', ref: function ref(_ref2) {
            return _this3.ref = _ref2;
          } },
        data.map(function (d) {
          return _react2.default.createElement(
            Block,
            { coords: d.coords, dimension: _this3.props.dimension },
            d.child
          );
        })
      );
    }
  }]);
  return Freewall;
}(_react2.default.Component);

Freewall.propTypes = {
  dimension: _react.PropTypes.number.isRequired
};
Freewall.defaultProps = {
  dimension: 50
};
exports.default = Freewall;