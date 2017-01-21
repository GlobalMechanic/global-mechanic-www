'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ONE_YEAR = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = function () {

  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
      var key, download, result, stream, ext, start, end, size, dot, disposition, fn, mimeType, chunk;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              key = req.params.key;
              download = req.query.download;
              _context.next = 4;
              return (0, _fileStorage.readFile)(key, req.headers.range);

            case 4:
              result = _context.sent;
              stream = result.stream;
              ext = result.ext;
              start = result.start;
              end = result.end;
              size = result.size;


              if (ext === '.json') {
                (function () {

                  var data = '';

                  stream.on('data', function (chunk) {
                    return data += chunk.toString();
                  });
                  stream.on('end', function () {
                    log('json ' + key);
                    res.setHeader('Content-Type', 'application/json');

                    var json = JSON.parse(data);
                    res.json(json);
                  });
                })();
              } else {
                dot = ext.includes('.') ? '' : '.';
                disposition = download ? 'attachment;' : 'inline;';
                fn = download ? download : key + dot + ext;
                mimeType = _mime2.default.lookup(fn);


                res.setHeader('Content-Disposition', disposition + '; filename=' + fn);
                res.setHeader('Content-Type', mimeType);
                res.setHeader('Cache-Control', 'public, max-age=' + ONE_YEAR);

                if (isFinite(start) && isFinite(end) && isFinite(size)) {
                  chunk = end - start + 1;


                  res.status(206);

                  res.setHeader('Content-Range', 'bytes ' + start + '-' + end + '/' + size);
                  res.setHeader('Accept-Ranges', 'bytes');
                  res.setHeader('Content-Length', chunk);

                  log('serving ' + fn + ' bytes ' + start + '-' + end);
                } else log('serving ' + fn);

                stream.pipe(res);
              }

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var _fileStorage = require('modules/file-storage');

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ONE_YEAR = exports.ONE_YEAR = 31557600;