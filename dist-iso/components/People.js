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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('components/Grid');

var _helper = require('modules/helper');

var _data = require('modules/data');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global HOST */

var DirectorFirst = ['directorData', 'staffData'];
var StaffFirst = DirectorFirst.slice().reverse();

function PersonProfile(_ref, _ref2) {
  var person = _ref.person;
  var className = _ref.className;
  var other = (0, _objectWithoutProperties3.default)(_ref, ['person', 'className']);
  var director = _ref2.director;

  var _ref3 = director ? DirectorFirst : StaffFirst;

  var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);

  var primary = _ref4[0];
  var secondary = _ref4[1];


  var name = person ? (0, _helper.getFullName)(person) : null;

  var essay = person ? person[primary] && person[primary].essay ? person[primary].essay : person[secondary] && person[secondary].essay ? person[secondary].essay : null : null;

  var portraitId = person ? person[primary] && person[primary].portrait ? person[primary].portrait : person[secondary] && person[secondary].portrait ? person[secondary].portrait : null : null;

  var portrait = portraitId ? HOST + '/assets/file/' + portraitId + '-thumb' : null;
  var classes = (0, _classnames2.default)('profile', className);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { className: classes }),
    _react2.default.createElement('img', { className: 'profile-image grayscale', src: portrait }),
    _react2.default.createElement(
      'div',
      { className: 'profile-detail' },
      _react2.default.createElement(
        'h1',
        null,
        name
      ),
      _react2.default.createElement(
        'p',
        null,
        essay
      )
    )
  );
}
PersonProfile.contextTypes = {
  director: _react.PropTypes.bool
};

function PersonBlock(_ref5, _ref6) {
  var item = _ref5.item;
  var other = (0, _objectWithoutProperties3.default)(_ref5, ['item']);
  var director = _ref6.director;
  var path = _ref6.path;

  var _ref7 = director ? DirectorFirst : StaffFirst;

  var _ref8 = (0, _slicedToArray3.default)(_ref7, 2);

  var primary = _ref8[0];
  var secondary = _ref8[1];


  var portraitId = item ? item[primary] && item[primary].portrait ? item[primary].portrait : item[secondary] && item[secondary].portrait ? item[secondary].portrait : null : null;

  var name = (0, _helper.getFullName)(item);
  var id = (0, _helper.urlify)(name);
  var onClick = function onClick() {
    return (0, _helper.navigate)(path + '/' + id);
  };

  return _react2.default.createElement(_Grid.Block, (0, _extends3.default)({ imageId: portraitId, onClick: onClick, grayscale: true }, other));
}
PersonBlock.contextTypes = {
  director: _react.PropTypes.bool,
  path: _react.PropTypes.string.isRequired
};

var People = function (_Component) {
  (0, _inherits3.default)(People, _Component);

  function People() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, People);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(People)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      people: [],
      featuredPerson: null
    }, _this.size = function () {
      return { width: 5, height: 4 };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(People, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props;
      var path = _props.path;
      var director = _props.director;


      return {
        path: path,
        director: director
      };
    }
  }, {
    key: 'setFeaturedPerson',
    value: function setFeaturedPerson(_ref9) {
      var featured = _ref9.featured;
      var people = this.state.people;

      var featuredPerson = featured ? people.filter(function (p) {
        return (0, _helper.urlify)((0, _helper.getFullName)(p)) === featured;
      })[0] : null;
      if (featuredPerson) this.setState({ featuredPerson: featuredPerson });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var data = this.props.director ? DirectorFirst[0] : StaffFirst[0];

      _data.people.then(function (arr) {
        var people = arr.filter(function (p) {
          return p && p[data] && p[data].showOnWebsite;
        }).sort(function (a, b) {
          return a[data].order > b[data].order ? 1 : -1;
        });

        _this2.setState({ people: people });
        _this2.setFeaturedPerson(_this2.props);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setFeaturedPerson(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var people = _state.people;
      var featuredPerson = _state.featuredPerson;
      var _props2 = this.props;
      var featured = _props2.featured;
      var size = _props2.size;
      var layout = _props2.layout;


      this.layout = this.layout || layout || new _Grid.Layout(50, true);
      var gridClasses = (0, _classnames2.default)({ hidden: featured });
      var profileClasses = (0, _classnames2.default)({ hidden: !featured });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(PersonProfile, { person: featuredPerson, className: profileClasses }),
        _react2.default.createElement(_Grid.Grid, { id: 'staff-wall', component: PersonBlock, items: people,
          layout: layout, sizeFunc: size || this.size, className: gridClasses })
      );
    }
  }]);
  return People;
}(_react.Component);

People.propTypes = {
  featured: _react.PropTypes.string,
  path: _react.PropTypes.string.isRequired,
  director: _react.PropTypes.bool.isRequired
};
People.childContextTypes = {
  path: _react.PropTypes.string,
  director: _react.PropTypes.bool
};
exports.default = People;