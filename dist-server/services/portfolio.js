'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = initialize;

var _gmVimeo = require('../modules/gm-vimeo');

var vimeo = _interopRequireWildcard(_gmVimeo);

var _queryMatcher = require('../modules/query-matcher');

var _queryMatcher2 = _interopRequireDefault(_queryMatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******************************************************************************/
// Service Class
/******************************************************************************/

var PortfolioService = function () {
  function PortfolioService() {
    _classCallCheck(this, PortfolioService);
  }

  _createClass(PortfolioService, [{
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
//# sourceMappingURL=/Volumes/GM Production 02 External/Projects/Git/global-mechanic-www/dist-server-src-maps/services/portfolio.js.map