'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  return function (req, res) {
    (0, _gmVimeo.invalidate)();
    res.send('<h3 style="font-family: sans-serif;">Vimeo Cache Invalidated</h3>');
  };
};

var _gmVimeo = require('modules/gm-vimeo');