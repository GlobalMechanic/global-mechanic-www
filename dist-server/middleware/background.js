'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  return function (req, res) {

    console.log(req);

    var poster = req.query.poster === '1' || req.query.poster === 'true';

    var url = poster ? POSTER_URL : VIDEO_URL;
    var mime = poster ? 'image/jpeg' : 'video/mp4';

    res.setHeader('Content-Disposition', 'inline; filename=' + _path2.default.basename(url));
    res.setHeader('Cache-Control', 'public, max-age=' + _serveFile.ONE_YEAR);
    res.setHeader('Content-Type', mime);
    if (!poster) res.setHeader('Content-Range');

    _fs2.default.createReadStream(url).pipe(res);
  };
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFile = require('./serve-file');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORAGE_URL = _path2.default.resolve(__dirname, '../../storage/files');
var POSTER_URL = _path2.default.join(STORAGE_URL, 'background-poster.jpg');
var VIDEO_URL = _path2.default.join(STORAGE_URL, 'background-video.mp4');

var VIDEO_SIZE = _fs2.default.statSync(VIDEO_URL);