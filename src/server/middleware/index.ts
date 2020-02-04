import { static as serveStatic } from 'feathers'

import handler from 'feathers-errors/handler'
import fileServe from './file-serve'
import pageData from './page-data'
import reactRouterTemplate from './react-router-template'

import logging from './logging'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
import fallback from 'express-history-api-fallback'

import { WebsiteApplication } from '../types'

/***************************************************************/
// Export
/***************************************************************/

export default function (this: WebsiteApplication): void {

    const app = this

    const PUBLIC_URL = app.get('public') as string

    app.get('/file/:key', fileServe())
    app.get('/data', pageData)
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(reactRouterTemplate(app))

    app.use('/', serveStatic(PUBLIC_URL))
    app.use(fallback('index.html', { root: PUBLIC_URL }))

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(logging())
    app.use(handler())

}
