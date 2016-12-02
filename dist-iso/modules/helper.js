'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = navigate;
exports.urlify = urlify;
exports.getFullName = getFullName;

var _reactRouter = require('react-router');

function navigate(path) {
  _reactRouter.browserHistory.push(path.replace(/\/\//g, '/'));
}

function urlify(str) {
  return str.toLowerCase().replace(/\s/g, '_').replace(/\?/g, '');
}

function getFullName(person) {
  var name = person.name;
  var first = name.first,
      last = name.last;


  return ((first || '') + ' ' + (last || '')).trim();
}