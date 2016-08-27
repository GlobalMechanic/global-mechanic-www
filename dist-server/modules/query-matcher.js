"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = function (query, doc) {
  query = query || {};
  doc = doc || {};

  var _loop = function _loop(i) {
    if (i in doc === false) return "continue";

    //if an array, check if any value matches
    var query_is_array = is(query[i], Array);
    if (query_is_array && !query[i].some(function (val) {
      return val == doc[i];
    })) return {
        v: false
      };

      //otherwise check if the value matches
    else if (!query_is_array && query[i] != doc[i]) return {
          v: false
        };
  };

  for (var i in query) {
    var _ret = _loop(i);

    switch (_ret) {
      case "continue":
        continue;

      default:
        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    }
  }

  //true if params is a blank object or if all matches passed
  return true;
};
//# sourceMappingURL=/Users/bengaumond/Programming/global-mechanic-www/dist-server-src-maps/modules/query-matcher.js.map