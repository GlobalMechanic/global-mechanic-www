import * as vimeo from '../modules/gm-vimeo'
import matcher from '../modules/query-matcher'

class VideoService {
  get(id) {
    return vimeo
    .videos()
    .then(video => {
      const vid = video[id]

      if (vid)
        return vid

      throw new Error('Video with id ' + id + ' does not exist.')
    })
  }

  find(params) {
    const query = params ? params.query : {}
    return vimeo
    .videos()
    .then(videos => {
      if (!query)
        return videos

      const filtered = {}

      for (let i in videos) {
        const vid = videos[i]
        if (matcher(query, vid))
          filtered[i] = vid
      }
      return filtered
    })
  }
}

export default function() {
  const app = this

  app.use('/videos', new VideoService())

  // const videoService = app.service('/videos')
  // videoService.before(beforeHooks)
  // videoService.after(afterHooks)
}

export { VideoService as Service }