import fs from 'fs-promise'
import path from 'path'
import mime from 'mime'

const STORAGE_URL = path.resolve(__dirname, '../../storage/files')
export const ONE_YEAR = 31557600

export default function () {

  return function(req, res, next) {

    const { id } = req.params

    return fs.readdir(STORAGE_URL)
      .then(files => files.filter(file => file.includes(id))[0])
      .then(fn => {

        if (fn === undefined)
          throw new Error(`file ${id} doesn't exist.`)

        const file = path.join(STORAGE_URL, fn)
        const mimeType = mime.lookup(fn)

        res.setHeader('Content-Disposition', `inline; filename=${fn}`)
        res.setHeader('Content-Type', mimeType)
        res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}`)

        const read = fs.createReadStream(file)
        read.pipe(res)

      })
      .catch(err => next(err))

  }
}
