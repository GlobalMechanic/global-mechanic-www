'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = navigate;
exports.urlify = urlify;
exports.getFullName = getFullName;

var _reactRouter = require('react-router');

function navigate(path) {
  var sanitized = path.replace(/\/\//g, '/');
  var encoded = encodeURI(sanitized);
  _reactRouter.browserHistory.push(encoded);
}

function urlify(str) {
  return str.toLowerCase().replace(/\s/g, '_').replace(/\?/g, '_qm');
}

function getFullName(person) {
  var name = person.name;
  var first = name.first,
      last = name.last;


  return ((first || '') + ' ' + (last || '')).trim();
}