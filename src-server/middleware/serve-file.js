import { readFile } from 'modules/file-storage'
import path from 'path'
import mime from 'mime'

export const ONE_YEAR = 31557600

export default function () {

  return function(req, res, next) {

    const { id } = req.params

    return readFile(id)
      .then(({stream, ext}) => {

        const fn = id+'.'+ext
        const mimeType = mime.lookup(fn)

        res.setHeader('Content-Disposition', `inline; filename=${fn}`)
        res.setHeader('Content-Type', mimeType)
        res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}`)

        stream.pipe(res)

      })
      .catch(err => next(err))

  }
}
