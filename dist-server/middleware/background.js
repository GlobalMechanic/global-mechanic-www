'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  return function (req, res) {

    var poster = req.query.poster === '1' || req.query.poster === 'true';

    var url = poster ? POSTER_URL : VIDEO_URL;
    var mime = poster ? 'image/jpeg' : 'video/mp4';

    res.setHeader('Content-disposition', 'inline; filename=' + _path2.default.basename(url));
    res.setHeader('Content-Type', mime);

    _fs2.default.createReadStream(url).pipe(res);
  };
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORAGE_URL = _path2.default.resolve(__dirname, '../../storage/files');
var POSTER_URL = _path2.default.join(STORAGE_URL, 'background-poster.jpg');
var VIDEO_URL = _path2.default.join(STORAGE_URL, 'background-video.mp4');