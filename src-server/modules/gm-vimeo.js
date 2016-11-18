/******************************************************************************/
// Dependencies
/******************************************************************************/
import fs from 'fs'
import path from 'path'

import { Vimeo } from 'vimeo'

/******************************************************************************/
// Data
/******************************************************************************/

let api

const SIX_HOURS = 1000 * 60 * 60 * 6 // ms * sec * min

const REQUEST_HEADERS = {
  Accept: 'application/vnd.vimeo.*+json;version=3.0'
}

const QUERY = {
  page: 1,
  per_page: 100
}

const cache = {
  portfolios: require('../../cache/portfolios'),
  videos: require('../../cache/videos'),
  write() {
    fs.writeFile(path.resolve(__dirname, '../../cache/portfolios.json'), JSON.stringify(this.portfolios, null, 2))
    fs.writeFile(path.resolve(__dirname, '../../cache/videos.json'), JSON.stringify(this.videos, null, 2))
  }
}

/******************************************************************************/
// Helper
/******************************************************************************/
function valid(timestamp) {
  if (is(timestamp, String))
    timestamp = Date.parse(timestamp)

  const since = new Date() - (timestamp || 0)

  return since < SIX_HOURS
}

function authenticate(asGM) {
  if (asGM) {
    log('Authenticate Vimeo as Global Mechanic')
    api.access_token = config.privateAccess.token

    return Promise.resolve(api.access_token)
  }

  if (!asGM && config.publicAccess.token) {
    log('Authenticate Vimeo as anonymous')
    api.access_token = config.publicAccess.token

    return Promise.resolve(api.access_token)
  }

  return new Promise((resolve, reject) => {
    log('Generating Vimeo Credentials')
    api.generateClientCredentials(config.publicAccess.scope, (err, token) => {
      if (err)
        reject(err)

      if (token.access_token) {
        api.access_token = config.publicAccess.token = token.access_token
        resolve()
      }
    })
  })
}

function fetch_videos(portfolio_id) {

  return new Promise((res, rej) => {
    api.request({
      path: `/users/${config.accountId}/portfolios/${portfolio_id}/videos?sort=manual`,
      query: QUERY
    }, (err, body) => {

      if (err)
        rej(err)

      else
        res(body.data.map(video => {
          return {
            id: video.uri.split('/')[2],
            name: video.name,
            description: video.description,
            duration: video.duration,
            width: video.width,
            height: video.height,
            embedHtml: video.embed.html,
            portfolios: [portfolio_id],
            urls: {
              thumb: video.pictures.sizes.map(thumb => thumb.link),
              file: video.files.map(file => file.link),
              main: video.link
            },
            status: video.status
          }
        }))
    })
  })
  .catch(err => log.error(err))

}

function fetch_portfolios(_private) {

  return authenticate(_private)
  .then(() => new Promise((res,rej) => {
    api.request({
      path: `/users/${config.accountId}/portfolios?sort=alphabetical`,
      query: QUERY,
      headers: REQUEST_HEADERS
    }, (err, body) => {
      if (err)
        return rej(err)

      res(body.data.map(folio => {
        return {
          id: folio.uri.split('/')[4],
          name: folio.name,
          description: folio.description,
          updated: new Date(folio.modified_time),
          link: folio.link
        }
      }))
    })
  }))
  .catch(err => log.error(err))
}

/******************************************************************************/
// Exports
/******************************************************************************/

export const config = {}

export default function() {

  const app = this

  const vimeoOptions = app.get('vimeo')
  for (const i in vimeoOptions)
    config[i] = is(vimeoOptions[i], Object) ? Object.assign({}, vimeoOptions[i]) : vimeoOptions[i]

  api = new Vimeo(config.clientId, config.clientSecret)

}

export function invalidate() {

  cache.videos.timestamp = null
  cache.portfolios.timestamp = null
  cache.write()

  log('vimeo cache invalidated')
}

export function videos() {

  if (valid(cache.videos.timestamp))
    return Promise.resolve(cache.videos.data)

  const timestamp = new Date()
  const data = {}

  return portfolios()
  .then(() => authenticate(true))
  .then(() => {
    const folios = cache.portfolios.data
    const promises = []
    for (const i in folios) {
      const folio = folios[i]
      promises.push(fetch_videos(folio.id))
    }

    return Promise.all(promises)
  })
  .then(results => {
    if (!is(results, Array))
      throw new Error('Results arn\'t getting turned into an array.')

    for (let i = 0; i < results.length; i++) {
      const videos = results[i]
      if (is(videos, Array)) {
        for (let ii = 0; ii < videos.length; ii++) {
          const video = videos[ii]
          if (data[video.id])
            data[video.id].portfolios.push(...video.portfolios)
          else
            data[video.id] = video
        }
      } else
        throw new Error('results isn\'t an array, for some reason')
    }
  })
  .then(() => {

    cache.videos.data = data
    cache.videos.timestamp = timestamp
    cache.write()

    return cache.videos.data
  })
  .catch(err => {
    log.error(err)
    return cache.videos.data
  })
}

export function portfolios() {

  if (valid(cache.portfolios.timestamp))
    return Promise.resolve(cache.portfolios.data)

  const timestamp = new Date()
  const data = {}

  return fetch_portfolios(true)
  .then(private_portfolios => {
    for (let i = 0; i < private_portfolios.length; i++) {
      const folio = private_portfolios[i]
      folio.scope = 'private'
      data[folio.id] = folio
    }

    return fetch_portfolios(false)
  })
  .then(public_portfolios => {
    for (let i = 0; i < public_portfolios.length; i++) {
      const folio = public_portfolios[i]
      folio.scope = 'public'
      //overwriting what was just placed there in the private loop, but who cares
      data[folio.id] = folio
    }
  })
  .then(() => {
    cache.portfolios.data = data
    cache.portfolios.timestamp = timestamp
    cache.write()

    return cache.portfolios.data
  })
  .catch(err => {
    log.error(err)
    return cache.portfolios.data
  })
}
