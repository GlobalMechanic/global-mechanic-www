import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import EventEmitter from 'events'
import $ from 'jquery'

/******************************************************************************/
// Config
/******************************************************************************/

const host = 'http://192.168.1.158:3030'
const config = rest(host).jquery($)
const app = feathers().configure(config)

/******************************************************************************/
// Emitter
/******************************************************************************/

const events = new EventEmitter()

const data = {
  portfolios: null,
  videos: null
}

/******************************************************************************/
// Fetch
/******************************************************************************/

export function loadPortfolios() {
  app.service('portfolios')
     .find()
     .then(portfolios => {
       data.portfolios = portfolios
       events.emit('portfolios-loaded', portfolios)
     })
}

export function loadVideos() {
  app.service('videos')
     .find()
     .then(videos => {
       data.videos = videos
       events.emit('videos-loaded', videos)
     })
}

/******************************************************************************/
// Exports
/******************************************************************************/

export { data, events }
