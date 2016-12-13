'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ONE_YEAR = undefined;

exports.default = function () {

  return function (req, res, next) {
    var id = req.params.id;


    return (0, _fileStorage.readFile)(id).then(function (_ref) {
      var stream = _ref.stream;
      var ext = _ref.ext;


      var fn = id + ext;
      var mimeType = _mime2.default.lookup(fn);

      log('serving ' + fn);

      res.setHeader('Content-Disposition', 'inline; filename=' + fn);
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Cache-Control', 'public, max-age=' + ONE_YEAR);

      stream.pipe(res);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var _fileStorage = require('modules/file-storage');

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ONE_YEAR = exports.ONE_YEAR = 31557600;