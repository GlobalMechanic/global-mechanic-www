
import http from 'http'
import path from 'path'
import fs from 'fs'
import { Vimeo } from 'vimeo'

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

      setTimeout(() => resolve(response), 1000)
    })
  })
  .then(response => new Promise((resolve, reject) => {

    const { link } = response

    const host = 'https://i.cloud.vimeo.com'
    const subpath = '/video/'

    const rid = link.substr(0, link.indexOf('?')).replace(host + subpath, '')

    const imageData = fs.readFileSync(thumbPath)

    const query = {
      host,
      path: subpath + rid,
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Length': Buffer.byteLength(imageData)
      }
    }

    const req = http.request(query, res => {
      res.setEncoding('utf8')
      res.on('end', () => resolve(rid))
    })
    req.on('error', reject)
    req.write(imageData)
    req.end()

    // fs.createReadStream(thumbPath).pipe(req)
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

}

//upload a random thumb to test.
uploadThumbnail(thumbs[0])
.catch(err => console.error(err))
