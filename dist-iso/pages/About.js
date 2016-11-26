'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _components = require('../components');

var _math = require('modules/math');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Profile(_ref) {
  var style = _ref.style;
  var item = _ref.item;
  var index = _ref.index;
  var total = _ref.total;
  var featured = _ref.featured;


  var channel = 50 + (0, _math.floor)((1 - index / total) * 150);
  style = (0, _extends3.default)({}, style, {
    backgroundColor: 'rgb(' + channel + ', ' + channel + ', 255)'
  });

  return _react2.default.createElement(
    'div',
    { className: 'profile', style: style },
    item.email
  );
}

function Staff(_ref2) {
  var documents = _ref2.documents;


  var items = [];

  for (var i = 0; i < 90; i++) {
    items.push({ email: i });
  }

  items = documents;

  return _react2.default.createElement(_components.Grid, { id: 'staff-wall', component: Profile, items: items,
    sizeFunc: function sizeFunc() {
      return Object({ width: 5, height: 4 });
    }
  });
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

function Block(_ref3) {
  var children = _ref3.children;

  return _react2.default.createElement(
    'div',
    { id: 'about-block', className: 'inverse padded' },
    _react2.default.createElement(
      'h1',
      null,
      'Key Staff'
    ),
    _react2.default.createElement('br', null),
    children ? children : _react2.default.createElement(_components.Collection, { service: 'people', component: Staff }),
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

var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(About)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      height: null
    }, _this.setBounds = function () {

      if (!_this.ref) return;

      var bounds = _this.ref.getBoundingClientRect();
      var height = innerHeight - bounds.top;

      _this.setState({ height: height });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      addEvent('resize', window, this.setBounds);
      this.setBounds();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setBounds();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var other = (0, _objectWithoutProperties3.default)(_props, ['children']);
      var height = this.state.height;


      var style = height ? {
        minHeight: height
      } : null;

      return _react2.default.createElement(
        _Page2.default,
        (0, _extends3.default)({ pageRef: function pageRef(ref) {
            return _this2.ref = ref;
          }, style: style, id: 'about-page' }, other),
        _react2.default.createElement(Writeup, null),
        _react2.default.createElement(
          Block,
          null,
          children
        )
      );
    }
  }]);
  return About;
}(_react.Component);

exports.default = About;