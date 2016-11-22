'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = About;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var random = Math.random;
var round = Math.round;


var c = function c() {
  return round(random() * 255);
};
var d = function d() {
  return round(50 + random() * 450);
};

function Staff() {

  var blocks = [];
  for (var i = 0; i < 25; i++) {
    var width = d();
    var height = d();
    var backgroundColor = 'rgb(' + [c(), c(), c()] + ')';
    blocks.push({
      width: width,
      height: height,
      backgroundColor: backgroundColor
    });
  }

  return _react2.default.createElement(
    _components.Freewall,
    null,
    blocks.map(function (block) {
      return _react2.default.createElement('div', { style: (0, _extends3.default)({}, block) });
    })
  );
}

function Writeup() {
  return _react2.default.createElement(
    'div',
    { id: 'about-writeup', className: 'padded' },
    _react2.default.createElement(
      'h1',
      null,
      'Global Mechanic is a design studio.'
    ),
    _react2.default.createElement(
      'h1',
      null,
      'We experiment, we create, we make beautiful things.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of hours of award winning content for films, commercials, television series, digital media and art projects. Oscar and Emmy nominated, we\'re well decorated in festival and ad circuits worldwide.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'With a core staff of seasoned creatives and producers, we hub and spoke to handle projects small and large. That makes us nimble, adaptive, and it saves us from getting set in our ways. It\'s a studio culture of invention and collaboration, where change is expected. Welcome, even.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'It shows in our work. We love what we do, for big ad agencies and clients like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola, BMW, P&G, Nestle and Bell. For broadcasters like PBS, the Cartoon Network, Nickelodeon and CBC, the films we produce independently and in co-production with the National Film Board of Canada (NFB), our theatre and installation work and, of course, constant experimentation for the fun of it.'
    ),
    _react2.default.createElement('div', { className: 'about-writeup-push' })
  );
}

function Block(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { id: 'about-block', className: 'inverse padded' },
    _react2.default.createElement(
      'h1',
      null,
      'Key Staff'
    ),
    _react2.default.createElement('br', null),
    children ? children : _react2.default.createElement(Staff, null),
    _react2.default.createElement(
      'h2',
      null,
      'USA | Liz Laine Reps +1 312 329 1111'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Canada | Hestyreps +1 416 482 0411'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Suite 208 - 1525 West 8th Avenue'
    ),
    _react2.default.createElement(
      'h4',
      null,
      'Vancouver BC'
    ),
    _react2.default.createElement(
      'h4',
      null,
      'Canada V6J 1T5'
    ),
    _react2.default.createElement(
      'h4',
      null,
      '+1 604 733 7475'
    ),
    _react2.default.createElement(
      'h4',
      null,
      'studio@globalmechanic.com'
    ),
    _react2.default.createElement('a', { id: 'twitter', href: 'https://www.twitter.com' }),
    _react2.default.createElement('a', { id: 'facebook', href: 'https://www.facebook.com' })
  );
}

function About(_ref2) {
  var children = _ref2.children;

  return _react2.default.createElement(
    _Page2.default,
    { id: 'about-page' },
    _react2.default.createElement(Writeup, null),
    _react2.default.createElement(
      Block,
      null,
      children
    )
  );
}