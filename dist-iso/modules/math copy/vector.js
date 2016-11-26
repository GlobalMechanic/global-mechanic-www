'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _lerp2 = require('./lerp');

var _lerp3 = _interopRequireDefault(_lerp2);

var _clamp2 = require('./clamp');

var _clamp3 = _interopRequireDefault(_clamp2);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vector = function () {
  (0, _createClass3.default)(Vector, null, [{
    key: 'lerp',
    value: function lerp(from, to) {
      var delta = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

      var x = (0, _lerp3.default)(from.x, to.x, delta);
      var y = (0, _lerp3.default)(from.y, to.y, delta);

      return new Vector(x, y);
    }
  }, {
    key: 'clamp',
    value: function clamp(value, low, hi) {
      var x = (0, _clamp3.default)(value.x, low.x, hi.x);
      var y = (0, _clamp3.default)(value.y, low.y, hi.y);

      return new Vector(x, y);
    }
  }, {
    key: 'distance',
    value: function distance(from, to) {
      return (0, _index.sqrt)(this.sqrDistance(from, to));
    }
  }, {
    key: 'sqrDistance',
    value: function sqrDistance(from, to) {
      return from.sub(to).sqrMagnitude;
    }
  }, {
    key: 'dot',
    value: function dot(a, b) {
      var an = a.normalized();
      var bn = b.normalized();

      return an.x * bn.x + an.y * bn.y;
    }
  }, {
    key: 'zero',
    get: function get() {
      return new Vector();
    }
  }]);

  function Vector() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    (0, _classCallCheck3.default)(this, Vector);

    this.x = x;
    this.y = y;
  }

  (0, _createClass3.default)(Vector, [{
    key: 'iadd',
    value: function iadd() {
      var vec = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];

      this.x += vec.x;
      this.y += vec.y;
      return this;
    }
  }, {
    key: 'add',
    value: function add() {
      var vec = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];

      return new Vector(this.x + vec.x, this.y + vec.y);
    }
  }, {
    key: 'isub',
    value: function isub() {
      var vec = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];

      this.x -= vec.x;
      this.y -= vec.y;
      return this;
    }
  }, {
    key: 'sub',
    value: function sub() {
      var vec = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];

      return new Vector(this.x - vec.x, this.y - vec.y);
    }
  }, {
    key: 'imult',
    value: function imult() {
      var factor = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

      this.x *= factor;
      this.y *= factor;
      return this;
    }
  }, {
    key: 'mult',
    value: function mult() {
      var factor = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

      return new Vector(this.x * factor, this.y * factor);
    }
  }, {
    key: 'idiv',
    value: function idiv() {
      var factor = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

      this.x /= factor;
      this.y /= factor;
      return this;
    }
  }, {
    key: 'div',
    value: function div() {
      var factor = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      return new Vector(this.x / factor, this.y / factor);
    }
  }, {
    key: 'ilerp',
    value: function ilerp() {
      var to = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];
      var delta = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      this.x = (0, _lerp3.default)(this.x, to.x, delta);
      this.y = (0, _lerp3.default)(this.y, to.y, delta);
      return this;
    }
  }, {
    key: 'lerp',
    value: function lerp() {
      var to = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];
      var delta = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      return Vector.lerp(this, to, delta);
    }
  }, {
    key: 'iclamp',
    value: function iclamp() {
      var low = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];
      var hi = arguments.length <= 1 || arguments[1] === undefined ? Vector.zero : arguments[1];

      this.x = (0, _clamp3.default)(this.x, low.x, hi.x);
      this.y = (0, _clamp3.default)(this.y, low.y, hi.y);
      return this;
    }
  }, {
    key: 'clamp',
    value: function clamp() {
      var low = arguments.length <= 0 || arguments[0] === undefined ? Vector.zero : arguments[0];
      var hi = arguments.length <= 1 || arguments[1] === undefined ? Vector.zero : arguments[1];

      return Vector.clamp(this, low, hi);
    }
  }, {
    key: 'normalized',
    value: function normalized() {
      var mag = this.magnitude;
      return mag === 0 ? Vector.zero : new Vector(this.x / mag, this.y / mag);
    }
  }, {
    key: 'rotate',
    value: function rotate(deg) {
      var rad = deg * _index.PI / 180;
      var c = (0, _index.cos)(rad);
      var s = (0, _index.sin)(rad);

      return new Vector(this.x * c - this.y * s, this.y * c + this.y * s);
    }
  }, {
    key: 'perpendicular',
    value: function perpendicular() {
      var h = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

      return new Vector(-this.y, this.x).idiv(this.magnitude).imult(h);
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.x + ',' + this.y;
    }
  }, {
    key: 'angle',
    get: function get() {
      return (0, _index.atan2)(this.y, this.x) * 180 / _index.PI;
    }
  }, {
    key: 'magnitude',
    get: function get() {
      return (0, _index.sqrt)(this.sqrMagnitude);
    }
  }, {
    key: 'sqrMagnitude',
    get: function get() {
      return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
  }]);
  return Vector;
}();

exports.default = Vector;