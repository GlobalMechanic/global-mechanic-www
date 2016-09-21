import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import EventEmitter from 'events'
import $ from 'jquery'

/******************************************************************************/
// Config
/******************************************************************************/

const host = 'http://localhost:3030'
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

function randomCellSize(plus = 1) {
  return (plus + Math.ceil(Math.random() * 3)) * 50
}

function randomizeWidthAndHeight(videos) {
  for (const i in videos) {
    videos[i].width = randomCellSize(3)
    videos[i].height = randomCellSize(2)
  }

  return videos
}

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
     data.videos = randomizeWidthAndHeight(videos)
     events.emit('videos-loaded', data.videos)
   })
}

/******************************************************************************/
// Exports
/******************************************************************************/

export { data, events }
