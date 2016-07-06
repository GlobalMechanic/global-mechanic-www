'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;
  app.use('/vimeo', new Service());

  // const vimeoService = app.service('/vimeo')
  // vimeoService.before(beforeHooks)
  // vimeoService.after(aterHooks)
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function Service() {
  _classCallCheck(this, Service);
};

////

exports.Service = Service;