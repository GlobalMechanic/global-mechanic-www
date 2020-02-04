// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no typedef
import service from 'feathers-mongodb'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
import { disable } from 'feathers-hooks'

import { service as gearsService, sync } from '../modules/gears'
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
        Model: app.db.collection('users')
    }

    app.use('/people', service(options))

    const people = app.service('people')
    const users = gearsService('users')

    people.before(beforeHooks)

    const staff = {
        path: ['staffData', 'portrait'],
        thumb: '480',
        full: false
    }

    const director = {
        path: ['directorData', 'portrait'],
        thumb: '480',
        full: false
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore 
    sync(app, users, people, staff, director)

}
