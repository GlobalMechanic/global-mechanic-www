import { readFile } from '../modules/file-storage'
import mime from 'mime'

import { Request, Response } from 'express'

/***************************************************************/
// Constants
/***************************************************************/

export const ONE_YEAR = 31557600

/***************************************************************/
// Main
/***************************************************************/

export default function () {

    return async function (req: Request, res: Response) {

        const { key } = req.params
        const { download } = req.query

        const range = req.headers.range

        const result = await readFile(key, range || '')
        if (!result)
            throw new Error('no file with key: ' + key)

        const { stream, ext, start, end, size } = result

        if (ext === '.json') {

            let data = ''

            stream.on('data', chunk => data += chunk.toString())
            stream.on('end', () => {
                console.log(`json ${key}`)
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

            if (isFinite(start as number) && isFinite(end as number) && isFinite(size)) {

                // eslint-disable-next-line no-extra-parens
                const chunk = (end as number) - (start as number) + 1

                res.status(206)

                res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`)
                res.setHeader('Accept-Ranges', 'bytes')
                res.setHeader('Content-Length', chunk)

                console.log(`serving ${fileName} bytes ${start}-${end}`)

            } else

                console.log(`serving ${fileName}`)


            stream.pipe(res)

        }
    }
}
