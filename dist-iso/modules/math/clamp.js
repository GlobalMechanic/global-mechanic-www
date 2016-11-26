"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
function clamp(num) {
  var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var max = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return num < min ? min : num > max ? max : num;
}