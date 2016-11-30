'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlify = urlify;
function urlify(str) {
  return str.toLowerCase().replace(/\s/g, '_').replace(/\?/g, '');
}