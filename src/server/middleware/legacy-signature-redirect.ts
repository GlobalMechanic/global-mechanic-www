import fs from 'fs'
import path from 'path'

import { WebsiteApplication } from '../types'

/***************************************************************/
// Modules State
/***************************************************************/

let legacySignaturePath: string

function findLegacySiganturePath(app: WebsiteApplication): void {

    const PUBLIC_URL = app.get('public') as string

    const publicNames = fs.readdirSync(PUBLIC_URL)
    for (const publicName of publicNames)
        if (publicName.includes('signature'))
            legacySignaturePath = path.join(PUBLIC_URL, publicName)

}

/***************************************************************/
// Exports
/***************************************************************/

export default function (this: WebsiteApplication) {

    findLegacySiganturePath(this)

    console.log({
        legacySignaturePath
    })

    return function (req, res) => {



    }
}