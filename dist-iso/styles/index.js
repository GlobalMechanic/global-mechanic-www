'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var variables = {
  animationTime: { value: 500, units: 'ms' },
  rootFontSize: { value: 1.25, units: 'em' },
  padding: { value: 0.8, units: 'rem' }
};

var colors = {
  textColor: '#fff',
  textColorInverted: '#000',
  textColorInvertedHover: '#aaa',
  bgColor: 'transparent'
};

colors.bgColorInverted = colors.textColor;

exports.variables = variables;
exports.colors = colors;