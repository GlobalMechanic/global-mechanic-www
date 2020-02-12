import fs from 'fs'
import path from 'path'

import { WebsiteApplication } from '../types'
import { Request, Response } from 'express'

/***************************************************************/
// Constants
/***************************************************************/

const LOGO_KEY = 'gm-logo'

/***************************************************************/
// Exports
/***************************************************************/

// eslint-disable-next-line
export default function (app: WebsiteApplication) {

    const PUBLIC_URL = app.get('public') as string
    const signatureSvgs = fs
        .readdirSync(PUBLIC_URL)
        .filter(name =>
            !name.includes('light') &&
            name.includes('signature') &&
            path.extname(name) === '.svg'
        )

    return function (req: Request, res: Response, next: Function): void {

        const who = (req.params.who || '').toLowerCase()

        const signatureSvg = signatureSvgs.find(svg =>
            who
                ? svg.includes(who)
                : svg.includes(LOGO_KEY)
        )

        if (signatureSvg)
            res.redirect(302, '/' + signatureSvg)
        else
            next(new Error(`Could not find signature belonging to: ${who}`))
    }
}