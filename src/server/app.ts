import feathers, { static as serveStatic } from 'feathers'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
import configuration from 'feathers-configuration'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'

import path from 'path'
import cors from 'cors'
import compress from 'compression'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
import fallback from 'express-history-api-fallback'

import fileStorage from './modules/file-storage'
import gears from './modules/gears'
import middleware from './middleware'
import services from './services'

import { MongoClient } from 'mongodb'

import { WebsiteApplication } from './types'

/***************************************************************/
// Execute
/***************************************************************/

async function createApp(): Promise<WebsiteApplication> {

    const CONFIG_URL = path.resolve(__dirname, '../../')

    const app = feathers() as WebsiteApplication
    app.configure(configuration(CONFIG_URL))

    const PUBLIC_URL = app.get('public') as string
    const MONGODB_URL = app.get('mongodb')
    const FAV_URL = path.resolve(__dirname, '../../favicon.png')

    app.db = await MongoClient.connect(MONGODB_URL)

    app.use(compress())
        .use(cors())

        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(favicon(FAV_URL))

        .configure(hooks())
        .configure(rest())
        .configure(fileStorage)
        .configure(gears)
        .configure(services)
        .configure(middleware)

        .use('/', serveStatic(PUBLIC_URL))
        .use(fallback('index.html', { root: PUBLIC_URL }))

    return app
}

/***************************************************************/
// Exports
/***************************************************************/

export default createApp

export { WebsiteApplication }