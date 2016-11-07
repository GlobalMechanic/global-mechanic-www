
import request from 'request'
import path from 'path'
import fs from 'fs'
import { Vimeo } from 'vimeo'
import Queue from 'promise-queue'

const thumbUrl = path.join(__dirname, 'fixed-thumbnails')
const thumbs = fs
  .readdirSync(thumbUrl)
  .filter(f => f.includes('.jpg'))

//These credentials are for Gears video credentials, not Global Mechanics.
//Gears credentials include upload scope
const api = new Vimeo(
/*client-id*/    '422a6bcfb6327005cd45184db926a92e9a1e84a9',
/*client-secret*/'Urp+9JGnI2JKjLDLVPpkmcBfWSatdd3q7uEeuadGELHkoQ7MPjcpaey+AGmeDtGctjlRzkjTsp9nMDBsPWLTCYJI+4mstwU/xk2yxmf901Gg/3l/2GUr4+bLs8Gcbnj7',
/*access-token*/ '835cb24f5e93401dda657e8669366d16'
)

function uploadThumbnail(thumb) {
  //picture resource id
  const ids = thumb.split('_')
  const vid = ids[0]
  const thumbPath = path.join(__dirname, 'fixed-thumbnails', thumb)

  return new Promise((resolve, reject) => {
    api.request({

      method: 'POST',
      path: `/videos/${vid}/pictures`

    }, (err, response) => {
      if (err)
        reject(err)

      resolve(response)
    })
  })
  .then(response => new Promise((resolve, reject) => {

    const { link } = response

    const rid = link
      .substr(0, link.indexOf('?'))
      .replace('https://i.cloud.vimeo.com/video/', '')

    const req = request.put(link)

    fs.createReadStream(thumbPath)
      .pipe(req)

    req.on('error', err => reject(err))
    req.on('response', () => resolve(rid))

  }))
  .then(rid => new Promise((resolve, reject) => {

    api.request({
      method: 'PATCH',
      path: `/videos/${vid}/pictures/${rid}`,
      query: {
        active: true
      }
    }, (err, body) => {
      if (err)
        return reject(err)

      else resolve(body)
    })
  }))
  .then(() => console.log(thumbPath + ' uploaded and made active.'))
  .catch(err => console.error(err))

}

const queue = new Queue(1, Infinity)

thumbs.forEach(thumb => queue.add(() => uploadThumbnail(thumb)))
