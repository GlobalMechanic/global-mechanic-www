'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ONE_YEAR = undefined;

exports.default = function () {

  return function (req, res, next) {
    var key = req.params.key;
    var download = req.query.download;


    return (0, _fileStorage.readFile)(key).then(function (result) {
      var stream = result.stream;
      var ext = result.ext;


      if (ext === '.json') {
        (function () {

          var data = '';

          stream.on('data', function (chunk) {
            return data += chunk.toString();
          });
          stream.on('end', function () {

            log('serving ' + key);
            res.setHeader('Content-Type', 'application/json');
            res.json(JSON.parse(data));
          });
        })();
      } else {

        log('serving ' + fn);

        var dot = ext.includes('.') ? '' : '.';
        var disposition = download ? 'attachment;' : 'inline;';
        var fn = download ? download : key + dot + ext;
        var mimeType = _mime2.default.lookup(fn);

        res.setHeader('Content-Disposition', disposition + '; filename=' + fn);
        res.setHeader('Content-Type', mimeType);
        res.setHeader('Cache-Control', 'public, max-age=' + ONE_YEAR);

        stream.pipe(res);
      }
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