import fs from 'fs'
import path from 'path'

const STORAGE_URL = path.resolve(__dirname, '../../storage/files')
const POSTER_URL = path.join(STORAGE_URL, 'background-poster.jpg')
const VIDEO_URL = path.join(STORAGE_URL, 'background-video.mp4')

export default function () {

  return function(req, res) {

    const poster = req.query.poster === '1' || req.query.poster === 'true'

    const url = poster ? POSTER_URL : VIDEO_URL
    const mime = poster ? 'image/jpeg' : 'video/mp4'

    res.setHeader('Content-disposition', 'inline; filename=' + path.basename(url))
    res.setHeader('Content-Type', mime)

    fs.createReadStream(url).pipe(res)

  }
}
