'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _reactRouter = require('react-router');

var _components = require('components');

var _dataLoader = require('modules/data-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pathified(str) {
  return str.toLowerCase().replace(/ /g, '_').replace(/&/g, 'and');
}

function navigate(e, value) {
  _reactRouter.browserHistory.push('/work/' + pathified(value.name));
}

var Work = function (_React$Component) {
  (0, _inherits3.default)(Work, _React$Component);

  function Work(props) {
    (0, _classCallCheck3.default)(this, Work);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Work.__proto__ || (0, _getPrototypeOf2.default)(Work)).call(this, props));

    _this.state = { portfolios: [] };
    _this.setPortfolios = _this.setPortfolios.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Work, [{
    key: 'setPortfolios',
    value: function setPortfolios(allPortfolios) {
      var portfolios = [];

      for (var i in allPortfolios) {
        portfolios.push(allPortfolios[i]);
      }this.setState({ portfolios: portfolios });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _dataLoader.events.on('portfolios-loaded', this.setPortfolios);
      if (_dataLoader.data.portfolios) this.setPortfolios(_dataLoader.data.portfolios);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _dataLoader.events.removeListener('portfolios-loaded', this.setPortfolios);
    }
  }, {
    key: 'setVideos',
    value: function setVideos(allVideos) {
      var id = this.props.portfolio.toString();
      var videos = [];

      for (var i in allVideos) {
        var video = allVideos[i];
        if (video.portfolios.includes(id)) videos.push(video);
      }

      this.setState({ videos: videos });
    }
  }, {
    key: 'getPortfolio',
    value: function getPortfolio(idOrName) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = (0, _getIterator3.default)(this.state.portfolios), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var port = _step.value;

          if (port.id === idOrName || pathified(port.name) === idOrName) return port;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var portfolios = this.state.portfolios;

      var idOrName = this.props.params.portfolio;
      var publicPortfolios = portfolios.filter(function (port) {
        return port.scope === 'public';
      });

      var portfolio = this.getPortfolio(idOrName);

      var id = portfolio ? pathified(portfolio.name) + '-portfolio' : 'blank-portfolio';

      var urlPrefixPath = portfolio && portfolio.scope === 'private' ? 'private/portfolio' : 'work';

      var route = this.props.route;

      return _react2.default.createElement(
        _Page2.default,
        (0, _extends3.default)({ id: 'work-page' }, this.props),
        _react2.default.createElement(
          _components.Content,
          { id: 'work-content' },
          _react2.default.createElement(_components.Dropdown, { title: portfolio ? portfolio.name : '', items: publicPortfolios, titleOnly: route.private, onSelection: navigate }),
          portfolio ? _react2.default.createElement(_components.Portfolio, { key: id, id: id, portfolio: portfolio.id, urlPrefix: '/' + urlPrefixPath + '/' + idOrName + '/' }) : null,
          this.props.children
        )
      );
    }
  }]);
  return Work;
}(_react2.default.Component);

exports.default = Work;