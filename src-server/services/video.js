/******************************************************************************/
// Defines
/******************************************************************************/

import { Vimeo } from 'vimeo'

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

class VimeoService {

  constructor(config) {
    this.config = config
    this.lib = new Vimeo(config.clientId, config.clientSecret)
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

  get(id) {
    log(id)
  }

  find(params) {
    log(params)
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

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default function() {
  const app = this
  const config = app.get('vimeo')

  app.use('/vimeo', new VimeoService(config))


  // const vimeoService = app.service('/vimeo')
  // vimeoService.before(beforeHooks)
  // vimeoService.after(aterHooks)
}

export { VimeoService as Service }
