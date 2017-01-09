import { readFile } from 'modules/file-storage'
import mime from 'mime'

export const ONE_YEAR = 31557600

export default function () {

  return function(req, res, next) {

    const { key } = req.params
    const { download } = req.query

    return readFile(key)
      .then(result => {

        const { stream, ext } = result

        if (ext === '.json') {

          let data = ''

          stream.on('data', chunk => data += chunk.toString())
          stream.on('end', () => {

            log(`serving ${key}`)
            res.setHeader('Content-Type', 'application/json')
            res.json(JSON.parse(data))

          })

        } else {

          log(`serving ${fn}`)

          const dot = ext.includes('.') ? '' : '.'
          const disposition = download ? 'attachment;' : 'inline;'
          const fn = download ? download : key + dot + ext
          const mimeType = mime.lookup(fn)

          res.setHeader('Content-Disposition', `${disposition}; filename=${fn}`)
          res.setHeader('Content-Type', mimeType)
          res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}`)

          stream.pipe(res)

        }

      })
      .catch(err => next(err))

  }
}
