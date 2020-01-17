import feathers, { static as serveStatic } from 'feathers'
import configuration from 'feathers-configuration'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'

import path from 'path'
import cors from 'cors'
import compress from 'compression'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import fallback from 'express-history-api-fallback'

import fileStorage from './modules/file-storage'
import { MongoClient } from 'mongodb'

import { WebsiteApplication } from './types'

/***************************************************************/
// Execute
/***************************************************************/

async function createApp (): Promise<WebsiteApplication> {

    const app = feathers() as WebsiteApplication

    app.configure(configuration())
    
    const PUBLIC_URL = app.get('public') as string
    const MONGODB_URL = app.get('mongodb')
    const FAV_URL = path.resolve(__dirname, '../../favicon.png')

    app.db = await MongoClient.connect(MONGODB_URL)

    app.use(compress())
        .use(cors())

        .use('/', serveStatic(PUBLIC_URL))
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(favicon(FAV_URL))

        .configure(hooks())
        .configure(rest())
        .configure(fileStorage)
        // .configure(gears)
        // .configure(services)
        // .configure(middleware)

        .use(fallback('index.html', { root: PUBLIC_URL }))

    return app
}

/***************************************************************/
// Exports
/***************************************************************/

export default createApp

export { WebsiteApplication }