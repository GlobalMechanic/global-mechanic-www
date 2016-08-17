'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /******************************************************************************/
// Defines
/******************************************************************************/

exports.default = function () {
  var app = this;
  app.use('/vimeo', new Service());

  // const vimeoService = app.service('/vimeo')
  // vimeoService.before(beforeHooks)
  // vimeoService.after(aterHooks)
};

var _vimeo = require('vimeo');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
  function Service(options) {
    _classCallCheck(this, Service);

    this.options = options || {};
  }

  _createClass(Service, [{
    key: 'find',
    value: function find(params) {
      return Promise.resolve([]);
    }
  }]);

  return Service;
}();

/******************************************************************************/
// Exports
/******************************************************************************/

exports.Service = Service;