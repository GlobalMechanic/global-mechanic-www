import { readFile } from 'modules/file-storage'
import mime from 'mime'

export const ONE_YEAR = 31557600

export default function () {

  return function(req, res, next) {

    const { key } = req.params

    log(key)

    return readFile(key)
      .then(({ stream, ext }) => {

        const fn = key + '.' + ext
        const mimeType = mime.lookup(fn)

        log(`serving ${fn}`)

        res.setHeader('Content-Disposition', `inline; filename=${fn}`)
        res.setHeader('Content-Type', mimeType)
        res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}`)

        stream.pipe(res)

      })
      .catch(err => next(err))

  }
}
