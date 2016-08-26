'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = function (params, doc) {
  params = params || {};
  doc = doc || {};

  var _loop = function _loop(i) {
    if (i in doc === false) return 'continue';

    //if an array, check if any value matches
    var param_is_array = (0, _isExplicit2.default)(params[i], Array);
    if (param_is_array && !params[i].some(function (val) {
      return val == doc[i];
    })) return {
        v: false
      };

      //otherwise check if the value matches
    else if (!param_is_array && params[i] != doc[i]) return {
          v: false
        };
  };

  for (var i in params) {
    var _ret = _loop(i);

    switch (_ret) {
      case 'continue':
        continue;

      default:
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }

  //true if params is a blank object or if all matches passed
  return true;
};

var _isExplicit = require('is-explicit');

var _isExplicit2 = _interopRequireDefault(_isExplicit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=/Users/bengaumond/Programming/global-mechanic-www/dist-server-maps/modules/param-matcher.js.map