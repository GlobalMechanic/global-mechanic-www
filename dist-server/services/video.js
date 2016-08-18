'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /******************************************************************************/
// Defines
/******************************************************************************/

exports.default = function () {
  var app = this;
  var config = app.get('vimeo');

  app.use('/vimeo', new VimeoService(config));

  // const vimeoService = app.service('/vimeo')
  // vimeoService.before(beforeHooks)
  // vimeoService.after(aterHooks)
};

var _vimeo = require('vimeo');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******************************************************************************/
// Helper
/******************************************************************************/

// function overAnHourOld(timestamp) {
//   let delta = new Date() - timestamp
//   return delta > 1000 * 60 * 60 // an hour
// }

/******************************************************************************/
// Service
/******************************************************************************/

var VimeoService = function () {
  function VimeoService(config) {
    _classCallCheck(this, VimeoService);

    this.config = config;
    this.lib = new _vimeo.Vimeo(config.clientId, config.clientSecret);
    // this.data = {
    //   public: {
    //     fetched: null,
    //     portfolios: {}
    //   },
    //   private: {
    //     fetched: null,
    //     portfolios: {}
    //   },
    //   videos: {}
    // }
  }
  //
  // clearCache() {
  //   log('clear cache')
  //
  //   this.data.public.fetched = null
  //   for (let i in this.data.public.portfolios)
  //     this.data.public.portfolios[i].fetched = null
  //
  //   this.data.private.fetched = null
  //   for (let i in this.data.private.portfolios)
  //     this.data.private.portfolios[i].fetched = null
  //
  //   for (let i in this.data.videos)
  //     this.data.videos[i].fetched = null
  // }

  // authenticate(as_gm) {
  //
  //   return new Promise((res,rej) => {
  //     if (as_gm) {
  //       log('Authenticate Vimeo as Global Mechanic')
  //       this.lib.access_token = this.config.privateAccess.token
  //       res(this.lib.access_token)
  //
  //     } else if (this.config.publicAccess.token) {
  //       log('Authenticate Vimeo as Anonymous')
  //       this.lib.access_token = this.config.publicAccess.token
  //       res(this.lib.access_token)
  //
  //     } else {
  //       log('Generating Vimeo Credentials')
  //       this.lib.generateClientCredentials(exports.config.publicAccess.scope, (err,res) => {
  //         if (err)
  //           rej(new Error(err))
  //         else if (res.access_token) {
  //           this.lib.access_token = this.config.publicAccess.token = res.access_token
  //           res(this.lib.access_token)
  //         }
  //         else
  //           rej(new Error('No access token generated.'))
  //       })
  //     }
  //   })
  //
  // }

  _createClass(VimeoService, [{
    key: 'get',
    value: function get(id) {
      log(id);
    }
  }, {
    key: 'find',
    value: function find(params) {
      log(params);
      // const scope = params && !!params.public ? 'public' : 'private'
      // const valid = !overAnHourOld(this.data[scope].fetched)
      // const data = this.data[scope]
      //
      // return new Promise((res,rej) => {
      //   if (valid) {
      //     log(`${scope} portfolio cached.`)
      //     return res(data.portfolios)
      //   }
      //
      //   log(`Retreiving ${scope} portfolio list.`)
      //   data.portfolios = {}
      //   this.lib.request({
      //     path: '/users/'+this.config.accountId+'/portfolios?sort=alphabetical',
      //     query: {
      //       page: 1,
      //       per_page: 10
      //     },
      //     headers: {
      //       'Accept': 'application/vnd.vimeo.*+json;version=3.0'
      //     }
      //   }, (err, body, statusCode, headers) => {
      //     if (err)
      //       return rej(new Error(err))
      //
      //     log(`${scope} portfolios retreived.`)
      //     data.fetched = new Date()
      //
      //     for (let i in body.data) {
      //       let portData = body.data[i]
      //       let id = portData.uri.split('/')[4]
      //
      //       let portfolio = this.get(id)
      //
      //     }
      //
      //   })
      // })
    }
  }]);

  return VimeoService;
}();

/******************************************************************************/
// Exports
/******************************************************************************/

exports.Service = VimeoService;
//# sourceMappingURL=/Users/Global/Projects/global-mechanic-www/dist-server-maps/services/video.js.map