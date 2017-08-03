'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.lerp = exports.clamp = exports.SQRT2 = exports.SQRT1_2 = exports.PI = exports.LOG10E = exports.LOG2E = exports.LN10 = exports.LN2 = exports.E = exports.tan = exports.sqrt = exports.sin = exports.round = exports.random = exports.pow = exports.min = exports.max = exports.log = exports.floor = exports.exp = exports.cos = exports.ceil = exports.atan2 = exports.atan = exports.asin = exports.acos = exports.abs = undefined;

var _clamp = require('./clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _lerp = require('./lerp');

var _lerp2 = _interopRequireDefault(_lerp);

var _vector = require('./vector');

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abs = Math.abs,
    acos = Math.acos,
    asin = Math.asin,
    atan = Math.atan,
    atan2 = Math.atan2,
    ceil = Math.ceil,
    cos = Math.cos,
    exp = Math.exp,
    floor = Math.floor,
    log = Math.log,
    max = Math.max,
    min = Math.min,
    pow = Math.pow,
    random = Math.random,
    round = Math.round,
    sin = Math.sin,
    sqrt = Math.sqrt,
    tan = Math.tan,
    E = Math.E,
    LN2 = Math.LN2,
    LN10 = Math.LN10,
    LOG2E = Math.LOG2E,
    LOG10E = Math.LOG10E,
    PI = Math.PI,
    SQRT1_2 = Math.SQRT1_2,
    SQRT2 = Math.SQRT2;

/******************************************************************************/
// Exports
/******************************************************************************/

exports.abs = abs;
exports.acos = acos;
exports.asin = asin;
exports.atan = atan;
exports.atan2 = atan2;
exports.ceil = ceil;
exports.cos = cos;
exports.exp = exp;
exports.floor = floor;
exports.log = log;
exports.max = max;
exports.min = min;
exports.pow = pow;
exports.random = random;
exports.round = round;
exports.sin = sin;
exports.sqrt = sqrt;
exports.tan = tan;
exports.E = E;
exports.LN2 = LN2;
exports.LN10 = LN10;
exports.LOG2E = LOG2E;
exports.LOG10E = LOG10E;
exports.PI = PI;
exports.SQRT1_2 = SQRT1_2;
exports.SQRT2 = SQRT2;
exports.clamp = _clamp2.default;
exports.lerp = _lerp2.default;
exports.Vector = _vector2.default;