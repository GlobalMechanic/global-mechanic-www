'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = initialize;

var _gmVimeo = require('modules/gm-vimeo');

var vimeo = _interopRequireWildcard(_gmVimeo);

var _queryMatcher = require('modules/query-matcher');

var _queryMatcher2 = _interopRequireDefault(_queryMatcher);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Service Class
/******************************************************************************/

var PortfolioService = function () {
  function PortfolioService() {
    (0, _classCallCheck3.default)(this, PortfolioService);
  }

  (0, _createClass3.default)(PortfolioService, [{
    key: 'get',
    value: function get(id) {

      return vimeo.portfolios().then(function (folios) {
        var folio = folios[id];

        if (folio) return folio;

        throw new Error('Portfolio with id ' + id + ' does not exist.');
      });
    }
  }, {
    key: 'find',
    value: function find(params) {

      var query = params ? params.query : {};

      return vimeo.portfolios().then(function (folios) {
        if (!query) return folios;

        var filtered = {};

        for (var i in folios) {
          var folio = folios[i];
          if ((0, _queryMatcher2.default)(query, folio)) filtered[i] = folio;
        }

        return filtered;
      });
    }
  }]);
  return PortfolioService;
}();

/******************************************************************************/
// Hooks
/******************************************************************************/

var beforeHooks = {};
var afterHooks = {};

/******************************************************************************/
// Exports
/******************************************************************************/

function initialize() {
  var app = this;

  app.use('/portfolios', new PortfolioService());

  var portfolioService = app.service('/portfolios');
  portfolioService.before(beforeHooks);
  portfolioService.after(afterHooks);
}

exports.Service = PortfolioService;