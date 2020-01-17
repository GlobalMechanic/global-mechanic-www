import path from 'path'
import fs from 'fs'

import { ReactElement } from 'react'
import { renderToString } from 'react-dom/server'

import { WebsiteApplication } from '../types'

/******************************************************************************/
// Module State
/******************************************************************************/

let template: string[]

/***************************************************************/
// Helper
/***************************************************************/

function renderTemplate(reactComponent: ReactElement): string {

    const reactMarkup = renderToString(reactComponent)

    return `${template[0]}<main>${reactMarkup}</main>${template[1]}`
}

/***************************************************************/
// Setup
/***************************************************************/

export default function (app: WebsiteApplication): void {

    // Create Template
    const publicURL = app.get('public')
    const indexHtmlURL = path.join(publicURL, 'index.html')

    template = fs.readFileSync(indexHtmlURL, 'utf-8').split('<main/>')

    console.error(
        'server side rendering not yet setup',
        renderTemplate.name,
        'is not yet used'
    )

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return (_req, _res, next) => next()
}
