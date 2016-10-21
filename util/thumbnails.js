// import app from '../src-server/app'
// import api from '../src-server/modules/gm-vimeo'
import videos from '../cache/videos.json'
import https from 'https'
import path from 'path'
import fs from 'fs'

function download(url, dest, cb) {
  const file = fs.createWriteStream(dest)

  const request = https.get(url, response => {

    response.pipe(file)
    file.on('finish', () => file.close(cb))

  }).on('error', err => {

    fs.unlink(dest)
    if (cb)
      cb(err.message)

  })
}

function getThumbList() {
  const thumbs = []

  for (const i in videos.data) {
    const video = videos.data[i]
    if (!video || !video.urls)
      continue

    const thumb = video.urls.thumb
    const biggest = thumb[thumb.length - 1]

    thumbs.push({
      name: video.name,
      url: biggest
    })
  }

  return thumbs
}

function downloadThumbs(thumbs) {
  const dest = path.join(__dirname, 'thumbnails')

  let dli = 0 //download index

  const cb = () => dli < thumbs.length ? dl(++dli) : null

  const dl = i => {
    const url = thumbs[i].url
    let fn = path.basename(url)
    const _ = fn.indexOf('_')
    fn = fn.substr(0, _) + '_' + thumbs[i].name + '.jpg'

    console.log(`downloading ${i} of ${thumbs.length}`)

    const fdest = path.join(dest, fn)
    if (fs.existsSync(fdest))
      cb()
    else
      download(url, fdest, cb)
  }

  dl(dli)
}

downloadThumbs(getThumbList())
