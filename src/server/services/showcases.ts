
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
import service from 'feathers-mongodb'

import { service as gearsService, sync } from '../modules/gears'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
import { disable } from 'feathers-hooks'
import { WebsiteApplication } from '../types'

/******************************************************************************/
// Hooks
/******************************************************************************/

const disableExternal = disable('external')

const beforeHooks = {
    get: disableExternal,
    create: disableExternal,
    update: disableExternal,
    find: disableExternal,
    patch: disableExternal
}

/******************************************************************************/
// Initialize
/******************************************************************************/

export default function (this: WebsiteApplication): void {
    const app = this
    if (!app.db)
        return

    const options = {
        Model: app.db.collection('showcases')
    }

    app.use('/showcases', service(options))

    const webShowcases = app.service('showcases')
    const showcases = gearsService('showcases')

    webShowcases.before(beforeHooks)

    const files = {
        path: 'files',
        thumb: '360',
        full: true,
        meta: true
    }

    const portrait = {
        path: 'portrait',
        thumb: '640',
        full: false
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    sync(app, showcases, webShowcases, portrait, files)

}