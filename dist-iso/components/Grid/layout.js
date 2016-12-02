'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Coords = undefined;

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

var _math = require('modules/math');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LAYOUT_LOOP_BREAK = (0, _symbol2.default)('layout-loop-break');

var Coords = exports.Coords = function () {
  function Coords() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    (0, _classCallCheck3.default)(this, Coords);

    this.pos = new _math.Vector(x, y);
    this.dim = new _math.Vector(w, h);
  }

  (0, _createClass3.default)(Coords, [{
    key: 'forEach',
    value: function forEach(func) {
      for (var x = this.pos.x; x < this.pos.x + this.dim.x; x++) {
        for (var y = this.pos.y; y < this.pos.y + this.dim.y; y++) {
          if (func(new _math.Vector(x, y)) === LAYOUT_LOOP_BREAK) break;
        }
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.pos + ' ' + this.dim;
    }
  }]);
  return Coords;
}();

var Blocks = function () {
  function Blocks() {
    var limitX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
    var limitY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    (0, _classCallCheck3.default)(this, Blocks);

    this.limits = new _math.Vector(limitX, limitY);
    this.max = _math.Vector.zero;
    this.filled = new _map2.default();
  }

  (0, _createClass3.default)(Blocks, [{
    key: 'tryFill',
    value: function tryFill(block) {
      var _this = this;

      var coords = block.coords;


      var canFill = true;

      coords.forEach(function (v) {
        var withinLimits = v.x < _this.limits.x && v.y < _this.limits.y;
        if (!withinLimits) {
          canFill = false;
          return LAYOUT_LOOP_BREAK;
        }

        var contents = _this.filled.get(v.toString());
        if (contents && contents != block) {
          canFill = false;
          return LAYOUT_LOOP_BREAK;
        }
      });

      if (canFill) {
        this.max.x = (0, _math.max)(this.max.x, coords.pos.x + coords.dim.x);
        this.max.y = (0, _math.max)(this.max.y, coords.pos.y + coords.dim.y);
        coords.forEach(function (v) {
          return _this.filled.set(v.toString(), block);
        });
      }

      return canFill;
    }
  }, {
    key: 'getFreeArea',
    value: function getFreeArea() {
      var area = null;
      var filled = this.filled,
          limits = this.limits,
          max = this.max;

      //find start pos

      for (var y = 0; y < limits.y; y++) {
        for (var x = 0; x < limits.x; x++) {
          var occupied = filled.has(x + ',' + y);
          if (!occupied) {
            area = new Coords(x, y, 1, Infinity);
            break;
          }
        }

        if (area !== null) break;
      }

      //find x limit
      for (var _x7 = area.pos.x + 1; _x7 <= limits.x; _x7++) {
        var _occupied = filled.has(_x7 + ',' + area.pos.y);
        if (_occupied) break;

        area.dim.x = _x7 - area.pos.x;
      }

      //find y limit
      for (var _y = area.pos.y + 1; _y < limits.y; _y++) {
        for (var _x8 = area.pos.x; _x8 < area.pos.x + area.dim.x; _x8++) {
          var _occupied2 = filled.has(_x8 + ',' + _y);
          if (_occupied2) return area;

          area.dim.y = _y - area.pos.y;
        }
        if (_y > max.y) {
          area.dim.y = Infinity;
          break;
        }
      }

      return area;
    }
  }]);
  return Blocks;
}();

var Layout = function () {
  function Layout() {
    var dimension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
    var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _classCallCheck3.default)(this, Layout);

    _initialiseProps.call(this);

    this.dimension = dimension;
    this.fill = fill;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'apply',
    value: function apply(blocks) {
      var _this2 = this;

      this.blocks = new Blocks(this.ceilAxis(this.bounds ? this.bounds.width : Infinity));

      var unplaced = blocks.slice();

      //ensure no block is too big
      blocks.forEach(function (block) {
        var coords = block.coords;
        if (coords.dim.x > _this2.blocks.limits.x) {
          var oldX = coords.dim.x;
          coords.dim.x = _this2.blocks.limits.x;
          coords.dim.y = (0, _math.round)(coords.dim.y * (coords.dim.x / oldX));
        }
      });

      while (unplaced.length > 0) {
        this.place(unplaced);
      }if (!this.fill) return;

      var freeArea = this.blocks.getFreeArea();
      while (freeArea.pos.x > 0 || freeArea.pos.y < this.blocks.max.y) {
        this.resizeAdjacent(freeArea);
        freeArea = this.blocks.getFreeArea();
      }
    }
  }, {
    key: 'place',
    value: function place(unplaced) {
      var freeArea = this.blocks.getFreeArea();

      var bestBlock = this.pluckAnyFit(unplaced, freeArea);
      if (!bestBlock) return this.resizeAdjacent(freeArea);

      var coords = bestBlock.coords;
      if (coords.dim.x > freeArea.dim.x) {
        var oldX = coords.dim.x;
        coords.dim.x = freeArea.dim.x;
        coords.dim.y = (0, _math.round)(coords.dim.y * (coords.dim.x / oldX));
      }

      if (coords.dim.y > freeArea.dim.y) coords.dim.y = freeArea.dim.y;

      coords.pos.x = freeArea.pos.x;
      coords.pos.y = freeArea.pos.y;

      var success = this.blocks.tryFill(bestBlock);
      if (!success) console.warn(bestBlock, ' could not be placed');
    }
  }, {
    key: 'resizeAdjacent',
    value: function resizeAdjacent(freeArea) {
      var success = false;

      var upPos = freeArea.pos.sub({ x: 0, y: 1 });
      var upBlock = this.blocks.filled.get(upPos.toString());
      if (upBlock) {
        var y = freeArea.dim.y === Infinity ? 1 : freeArea.dim.y;
        upBlock.coords.dim.y += y;
        success = this.blocks.tryFill(upBlock);
        if (!success) upBlock.coords.dim.y -= y;
      }

      var leftPos = freeArea.pos.sub({ x: 1, y: 0 });
      var leftBlock = this.blocks.filled.get(leftPos.toString());
      if (leftBlock && !success) {
        leftBlock.coords.dim.x += freeArea.dim.x;
        success = this.blocks.tryFill(leftBlock);
        if (!success) leftBlock.coords.dim.x -= freeArea.dim.x;
      }

      if (!success) console.warn('could not resize');

      return success;
    }
  }, {
    key: 'pluckAnyFit',
    value: function pluckAnyFit(blocks, freeArea) {

      var onlyX = freeArea.dim.y === Infinity;

      for (var i = 0; i < blocks.length; i++) {
        var coords = blocks[i].coords;


        var diffX = freeArea.dim.x - coords.dim.x;
        var diffY = onlyX ? 0 : freeArea.dim.y - coords.dim.y;

        //stop immediatly if any match
        if (diffX >= 0 && diffY >= 0) return blocks.splice(i, 1)[0];
      }

      return null;
    }
  }]);
  return Layout;
}();

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.ceilAxis = function (axis) {

    if (!(0, _isExplicit2.default)(axis, Number)) return 1;

    var dimension = _this3.dimension;

    return (0, _math.max)((0, _math.ceil)(axis / dimension), 1);
  };
};

exports.default = Layout;


Layout.Coords = Coords;