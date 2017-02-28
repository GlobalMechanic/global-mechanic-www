"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
function clamp(num) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return num < min ? min : num > max ? max : num;
}