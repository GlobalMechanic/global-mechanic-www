'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _justClicksWeb = require('assets/just-clicks-web.mp4');

var _justClicksWeb2 = _interopRequireDefault(_justClicksWeb);

var _justClicksWeb3 = require('assets/just-clicks-web.jpg');

var _justClicksWeb4 = _interopRequireDefault(_justClicksWeb3);

var _dataLoader = require('modules/data-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Background = function (_React$Component) {
  (0, _inherits3.default)(Background, _React$Component);

  function Background(props) {
    (0, _classCallCheck3.default)(this, Background);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Background).call(this, props));

    _this.state = { classes: '' };
    _this.backgroundStyleChange = _this.backgroundStyleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Background, [{
    key: 'backgroundStyleChange',
    value: function backgroundStyleChange(data) {
      var classes = '';

      for (var key in data) {
        if (data[key] === true) classes += classes === '' ? key : ' ' + key;
      }this.setState({ classes: classes });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _dataLoader.events.on('background-style', this.backgroundStyleChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _dataLoader.events.removeEventListener('background-style', this.backgroundStyleChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.state.classes;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { id: 'video-background-overlay', className: classes }),
        _react2.default.createElement(
          'video',
          { id: 'video-background', className: classes, loop: true, autoPlay: true, muted: true, poster: _justClicksWeb4.default },
          _react2.default.createElement('source', { src: _justClicksWeb2.default, type: 'video/mp4' })
        )
      );
    }
  }]);
  return Background;
}(_react2.default.Component);

exports.default = Background;