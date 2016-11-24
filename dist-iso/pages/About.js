'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _data = require('modules/data');

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var random = Math.random;
var round = Math.round;
var min = Math.min;


var c = function c() {
  return round(random() * 255);
};
var d = function d() {
  return round(100 + random() * 300);
};

// function Staff() {
//
//   const blocks = []
//   for (let i = 0; i < 25; i++) {
//     const width = d()
//     const height = min(d(), width)
//     const backgroundColor = `rgb(${[c(), c(), c()]})`
//     blocks.push({
//       width,
//       height,
//       backgroundColor
//     })
//   }
//
//   return <Freewall>{
//     blocks.map(block => <div style={{...block}} />)
//   }</Freewall>
//   return null
//
// }

var Staff = function (_Component) {
  (0, _inherits3.default)(Staff, _Component);

  function Staff() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Staff);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Staff)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      people: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Staff, [{
    key: 'setPeople',
    value: function setPeople() {
      var _this2 = this;

      _data.people.then(function (data) {
        return _this2.setState({
          people: data
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setPeople();
    }
  }, {
    key: 'render',
    value: function render() {
      var people = this.state.people;


      return _react2.default.createElement(
        'div',
        null,
        people.map(function (person) {
          return _react2.default.createElement(
            'div',
            { key: person._id },
            person.email
          );
        })
      );
    }
  }]);
  return Staff;
}(_react.Component);

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

var About = function (_Component2) {
  (0, _inherits3.default)(About, _Component2);

  function About() {
    var _Object$getPrototypeO2;

    var _temp2, _this3, _ret2;

    (0, _classCallCheck3.default)(this, About);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO2 = (0, _getPrototypeOf2.default)(About)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3.state = {
      height: null
    }, _this3.setBounds = function () {

      if (!_this3.ref) return;

      var bounds = _this3.ref.getBoundingClientRect();
      var height = innerHeight - bounds.top;

      _this3.setState({ height: height });
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this3, _ret2);
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
      var _this4 = this;

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
            return _this4.ref = ref;
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