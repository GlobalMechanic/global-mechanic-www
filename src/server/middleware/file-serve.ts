import { readFile } from '../modules/file-storage'
import mime from 'mime'

import { Request, Response } from 'express'

/***************************************************************/
// Constants
/***************************************************************/

export const ONE_YEAR = 31557600


/***************************************************************/
// Helper
/***************************************************************/

function isFiniteNumber(input: unknown | number): input is number {
    return typeof input === 'number' && !Number.isNaN(input) && isFinite(input)
}

/***************************************************************/
// Main
/***************************************************************/

export default function () {

    return async function (req: Request, res: Response, next: Function) {

        const { key } = req.params
        const { download } = req.query

        const range = req.headers.range

        const result = await readFile(key, range || '')
        if (!result)
            return next(new Error('no file with key: ' + key))

        const { stream, ext, start, end, size } = result

        if (ext === '.json') {

            let data = ''

            stream.on('data', chunk => data += chunk.toString())
            stream.on('end', () => {
                res.setHeader('Content-Type', 'application/json')
                res.json(JSON.parse(data))
            })

        } else {

            const dot = ext && ext.includes('.') ? '' : '.'
            const disposition = download ? 'attachment;' : 'inline;'
            const fileName = download ? download : key + dot + ext

            const mimeType = mime.getType(fileName) || 'application/octet-stream'

            res.setHeader('Content-Disposition', `${disposition}; filename=${fileName}`)
            res.setHeader('Content-Type', mimeType)
            res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}`)

            if (isFiniteNumber(start) && isFiniteNumber(end) && isFiniteNumber(size)) {

                // eslint-disable-next-line no-extra-parens
                const chunk = end - (start + 1)

                console.log(`serving ${fileName} bytes ${start}-${end}`)

                res.status(206)

                res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`)
                res.setHeader('Accept-Ranges', 'bytes')
                res.setHeader('Content-Length', chunk)

            } else

                console.log(`serving ${fileName}`)

            stream.pipe(res)
        }
    }
}
