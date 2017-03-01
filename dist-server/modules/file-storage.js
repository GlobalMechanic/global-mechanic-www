'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var readFile = exports.readFile = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(key, rangestr) {
    var url, _ref4, size, options, params;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (s3) {
              _context.next = 12;
              break;
            }

            _context.next = 3;
            return getLocalUrl(key);

          case 3:
            url = _context.sent;

            if (!(url === null)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', null);

          case 6:
            _context.next = 8;
            return _fsPromise2.default.stat(url);

          case 8:
            _ref4 = _context.sent;
            size = _ref4.size;
            options = parseRange(rangestr, size);
            return _context.abrupt('return', (0, _extends3.default)({
              stream: _fsPromise2.default.createReadStream(url, options),
              size: size }, options, {
              ext: _path2.default.extname(url)
            }));

          case 12:
            params = { Bucket: bucket, Key: key };
            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {

              s3.headObject(params, function (err, data) {
                if (err) return reject(err);

                var size = parseInt(data.ContentLength, 10);
                var options = parseRange(rangestr, size);

                if (options.start && options.end) params.Range = rangestr;

                var ext = data.Metadata.ext;

                var stream = s3.getObject(params).createReadStream();

                log('reading file from s3', key);

                resolve((0, _extends3.default)({ stream: stream, ext: ext }, options, { size: size }));
              });
            }).catch(function (err) {
              return log.error('Error reading file from s3', err);
            }));

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function readFile(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = initialize;
exports.hasFile = hasFile;
exports.writeFile = writeFile;

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
    var name = bucketeer.name,
        other = (0, _objectWithoutProperties3.default)(bucketeer, ['name']);

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
  // .catch(err => log.error('Error checking file from s3', err))
}

function writeFile(key, ext, read) {

  if (!s3) {
    var write = _fsPromise2.default.createWriteStream(_path2.default.join(LOCAL_FILES, '' + key + ext));
    return new _promise2.default(function (resolve, reject) {
      read.pipe(write);
      read.on('end', resolve);
      read.on('error', reject);
    });
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
  // .catch(err => log.error('Error writing file from s3', err))
}

function parseRange(str, size) {
  var _ref = is(str, String) //eslint-disable-line prefer-const
  ? str.replace(/bytes=/, '').split('-').map(function (word) {
    return parseInt(word, 10);
  }) : [],
      _ref2 = (0, _slicedToArray3.default)(_ref, 2),
      start = _ref2[0],
      end = _ref2[1];

  if (!isFinite(start)) return {};

  if (!isFinite(end)) end = size - 1;

  return { start: start, end: end };
}