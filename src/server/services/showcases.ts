
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
const SCOPES = ['private', 'public', 'work-in-progress']

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
function websiteFilter(hook, next): void {

    const { result, params } = hook

    //no filtering on internal calls
    if (!params.provider)
        return next()

    //only send showcases with public or private scopes

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore disable not included in feathers-hooks typedef
    hook.result = result.filter(showcase => showcase.website && SCOPES.includes(showcase.website.scope))

    next(null, hook)
}

const beforeHooks = {
    get: disableExternal,
    create: disableExternal,
    update: disableExternal,
    patch: disableExternal
}

const afterHooks = {
    find: websiteFilter
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

    app.use('/assets/showcases', service(options))

    const webShowcases = app.service('assets/showcases')
    const showcases = gearsService('showcases')

    webShowcases.before(beforeHooks)

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    webShowcases.after(afterHooks)

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
    sync(showcases, webShowcases, portrait, files)

}
