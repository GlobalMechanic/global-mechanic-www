'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ONE_YEAR = undefined;

exports.default = function () {

  return function (req, res, next) {
    var id = req.params.id;


    return _fsPromise2.default.readdir(STORAGE_URL).then(function (files) {
      return files.filter(function (file) {
        return file.includes(id);
      })[0];
    }).then(function (fn) {

      if (fn === undefined) throw new Error('file ' + id + ' doesn\'t exist.');

      var file = _path2.default.join(STORAGE_URL, fn);
      var mimeType = _mime2.default.lookup(fn);

      res.setHeader('Content-Disposition', 'inline; filename=' + fn);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Cache-Control', 'public, max-age=' + ONE_YEAR);

      var read = _fsPromise2.default.createReadStream(file);
      read.pipe(res);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORAGE_URL = _path2.default.resolve(__dirname, '../../storage/files');
var ONE_YEAR = exports.ONE_YEAR = 31557600;