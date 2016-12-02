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

var _data = require('modules/data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLLECTIONS = {
  people: _data.people,
  showcases: _data.showcases,
  products: _data.products
};

var Collection = function (_Component) {
  (0, _inherits3.default)(Collection, _Component);

  function Collection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collection.__proto__ || (0, _getPrototypeOf2.default)(Collection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      documents: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collection, [{
    key: 'setDocuments',
    value: function setDocuments(props) {
      var _this2 = this;

      var service = props.service,
          filter = props.filter;


      var collection = COLLECTIONS[service];

      collection.then(function (documents) {

        if (filter) documents = documents.filter(filter);

        _this2.setState({
          documents: documents
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setDocuments(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      this.setDocuments(next);
    }
  }, {
    key: 'render',
    value: function render() {
      var documents = this.state.documents;
      var _props = this.props,
          component = _props.component,
          filter = _props.filter,
          service = _props.service,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['component', 'filter', 'service', 'children']); //eslint-disable-line no-unused-vars

      return (0, _react.createElement)(component, (0, _extends3.default)({ documents: documents }, other), children);
    }
  }]);
  return Collection;
}(_react.Component);

Collection.propTypes = {
  service: _react.PropTypes.oneOf(['people', 'showcases', 'products']),
  filter: _react.PropTypes.func,
  component: _react.PropTypes.func.isRequired
};
exports.default = Collection;