'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = initialize;
exports.hasFile = hasFile;
exports.writeFile = writeFile;
exports.readFile = readFile;

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _awsSdk = require('aws-sdk');

var _stream = require('stream');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/

var s3 = null;
var bucket = null;

var LOCAL_FILES = _path2.default.resolve(__dirname, '../../storage/files');

/******************************************************************************/
// Helper
/******************************************************************************/

function getLocalUrl(key) {
  return _fsPromise2.default.readdir(LOCAL_FILES).then(function (files) {
    var file = files.filter(function (file) {
      return key === _path2.default.basename(file, _path2.default.extname(file));
    })[0];
    return file ? _path2.default.join(LOCAL_FILES, file) : null;
  });
}

/******************************************************************************/
// Init
/******************************************************************************/

function initialize() {

  var app = this;
  var bucketeer = app.get('bucketeer');

  if (bucketeer) {
    var name = bucketeer.name;
    var other = (0, _objectWithoutProperties3.default)(bucketeer, ['name']);

    bucket = name;
    s3 = new _awsSdk.S3(other);
  }
}

/******************************************************************************/
// API
/******************************************************************************/

function hasFile(key) {

  if (!s3) return getLocalUrl(key).then(function (url) {
    return !!url;
  });

  var params = { Bucket: bucket, Key: key };

  return new _promise2.default(function (resolve, reject) {
    s3.headObject(params, function (err) {
      if (err && (err.code === 'NoSuchKey' || err.code === 'NotFound')) return resolve(false);else if (err) return reject(err);else resolve(true);
    });
  });
}

function writeFile(key, ext, read) {

  if (!s3) {
    var _ret = function () {
      var write = _fsPromise2.default.createWriteStream(_path2.default.join(LOCAL_FILES, key + '.' + ext));
      return {
        v: new _promise2.default(function (resolve, reject) {
          read.pipe(write);
          read.on('end', resolve);
          read.on('error', reject);
        })
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  }

  var upload = new _stream.PassThrough();
  var params = { Bucket: bucket, Key: key, Body: upload, Metadata: { ext: ext } };

  return new _promise2.default(function (resolve, reject) {
    s3.upload(params, function (err, data) {
      if (err) reject(err);else resolve(data);
    });
    log('writing file to s3:', key);
    read.pipe(upload);
  });
}

function readFile(key) {

  if (!s3) return getLocalUrl(key).then(function (url) {
    return url ? {
      stream: _fsPromise2.default.createReadStream(url),
      ext: _path2.default.extname(url)
    } : null;
  });

  var params = { Bucket: bucket, Key: key };

  return new _promise2.default(function (resolve, reject) {

    s3.headObject(params, function (err, data) {
      if (err) return reject(err);

      var ext = data.Metadata.ext;

      var stream = s3.getObject(params).createReadStream();
      log('reading file from s3', key);

      resolve({ stream: stream, ext: ext });
    });
  });
}