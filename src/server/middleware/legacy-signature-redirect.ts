import fs from 'fs'

import { WebsiteApplication } from '../types'
import { Request, Response } from 'express'

/***************************************************************/
// Modules State
/***************************************************************/

let legacySignaturePath: string

function findLegacySiganturePath(app: WebsiteApplication): void {

    const PUBLIC_URL = app.get('public') as string

    const publicNames = fs.readdirSync(PUBLIC_URL)
    for (const publicName of publicNames)
        if (publicName.includes('signature'))
            legacySignaturePath = '/' + publicName
}

/***************************************************************/
// Exports
/***************************************************************/

// eslint-disable-next-line
export default function (app: WebsiteApplication) {

    findLegacySiganturePath(app)

    return function (_req: Request, res: Response): void {
        res.redirect(302, legacySignaturePath)
    }
}