'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _components = require('components');

var _staff = require('modules/staff');

var _staff2 = _interopRequireDefault(_staff);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $window = $(window);

function StaffBlock(_ref) {
  var id = _ref.id;
  var image = _ref.image;
  var width = _ref.width;
  var height = _ref.height;


  var click = function click() {
    _reactRouter.browserHistory.push('/about/' + id);
  };

  return _react2.default.createElement(
    'div',
    {
      onClick: click,
      key: name, className: 'staff-block bulge',
      style: {
        width: width,
        height: height
      } },
    _react2.default.createElement('div', { className: 'staff-picture', style: { backgroundImage: 'url(' + image + ')' } })
  );
}

var About = function (_React$Component) {
  (0, _inherits3.default)(About, _React$Component);

  function About(props) {
    (0, _classCallCheck3.default)(this, About);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(About).call(this, props));

    _this.state = { stick: false };
    return _this;
  }

  (0, _createClass3.default)(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize = this.resize.bind(this);

      $window.on('resize', this.resize);

      this.$section = $('#our-team-section');
      this.$content = $('#about-page-content');

      this.resize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $window.off('resize', this.resize);
    }
  }, {
    key: 'resize',
    value: function resize() {

      var contentY = this.$content.offset().top + this.$content.outerHeight(true);
      var sectionH = this.$section.height();

      var stick = contentY + sectionH < innerHeight;

      this.setState({ stick: stick });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var onStaffMember = props.params.staff;

      return _react2.default.createElement(
        _Page2.default,
        (0, _extends3.default)({ id: 'about-page' }, props),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _components.Content,
          { id: 'about-page-content' },
          _react2.default.createElement(
            _components.TitleText,
            { className: 'padded large' },
            'Global Mechanic is a design studio.'
          ),
          _react2.default.createElement(
            _components.TitleText,
            { className: 'padded large' },
            'We experiment, we create, we make beautiful things.'
          ),
          _react2.default.createElement(
            _components.BodyText,
            { className: 'padded' },
            'Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of hours of award winning content for films, commercials, television series, digital media and art projects. Oscar and Emmy nominated, we\'re well decorated in festival and ad circuits worldwide.'
          ),
          _react2.default.createElement(
            _components.BodyText,
            { className: 'padded' },
            'With a core staff of seasoned creatives and producers, we hub and spoke to handle projects small and large. That makes us nimble, adaptive, and it saves us from getting set in our ways. It\'s a studio culture of invention and collaboration, where change is expected. Welcome, even.'
          ),
          _react2.default.createElement(
            _components.BodyText,
            { className: 'padded' },
            'It shows in our work. We love what we do, for big ad agencies and clients like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola, BMW, P&G, Nestle and Bell. For broadcasters like PBS, the Cartoon Network, Nickelodeon and CBC, the films we produce independently and in co-production with the National Film Board of Canada (NFB), our theatre and installation work and, of course, constant experimentation for the fun of it.'
          )
        ),
        _react2.default.createElement(
          _components.Inverted,
          { id: 'our-team-section', fill: true, className: 'padded-bottom' + (this.state.stick ? ' about-stick' : '') },
          _react2.default.createElement('div', { id: 'about-gear-background' }),
          _react2.default.createElement('br', null),
          onStaffMember ? _react2.default.createElement(
            _reactRouter.Link,
            { to: '/about' },
            _react2.default.createElement(
              _components.TitleText,
              { className: 'clickable padded' },
              'KEY STAFF'
            )
          ) : _react2.default.createElement(
            _components.TitleText,
            { className: 'padded' },
            'KEY STAFF'
          ),
          _react2.default.createElement('br', null),
          props.params.staff ? props.children : _react2.default.createElement(
            _components.FreeWall,
            { id: 'chief-free-wall', selector: '.staff-block' },
            _staff2.default.map(function (dir) {
              return _react2.default.createElement(StaffBlock, (0, _extends3.default)({ key: dir.id }, dir));
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { id: 'bottom-info' },
            _react2.default.createElement(
              _components.TitleText,
              { className: 'padded small' },
              'USA | Liz Laine Reps +1 312 329 1111'
            ),
            _react2.default.createElement(
              _components.TitleText,
              { className: 'padded small' },
              'Canada | Hestyreps +1 416 482 0411'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _components.TitleText,
              { className: 'padded', mini: true },
              'Suite 208 - 1525 West 8th Avenue'
            ),
            _react2.default.createElement(
              _components.TitleText,
              { className: 'padded', mini: true },
              'Vancouver BC'
            ),
            _react2.default.createElement(
              _components.TitleText,
              { className: 'padded', mini: true },
              'Canada V6J 1T5'
            ),
            _react2.default.createElement(
              _components.TitleText,
              { className: 'padded', mini: true },
              '+1 604 733 7475'
            ),
            _react2.default.createElement(
              _components.TitleText,
              { className: 'padded', mini: true },
              'studio@globalmechanic.com'
            )
          )
        )
      );
    }
  }]);
  return About;
}(_react2.default.Component);

exports.default = About;