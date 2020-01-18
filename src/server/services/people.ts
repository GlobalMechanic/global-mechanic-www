// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no typedef
import service from 'feathers-mongodb'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
import { disable, Hook } from 'feathers-hooks'

import { service as gearsService, sync } from '../modules/gears'
import { WebsiteApplication } from '../types'

/******************************************************************************/
// Hooks
/******************************************************************************/

const disableExternal = disable('external')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function websiteFilter(hook: Hook, next: Function): void {

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore result and params dont exist on hook??
    const { result, params } = hook

    // no filtering on internal calls
    if (!params.provider)
        return next()

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore result and params dont exist on hook??
    hook.result = result

        // only show if the person is supposed to be on the website
        .filter((person: any) => // eslint-disable-line @typescript-eslint/no-explicit-any
            person.staffData &&
            person.staffData.showOnWebsite ||
            person.directorData &&
            person.directorData.showOnWebsite
        )

        // stripped to necessary fields
        .map((person: any) => {// eslint-disable-line @typescript-eslint/no-explicit-any

            const { _id, name, role, staffData, directorData } = person

            const { essay = '', portrait = null, showcase = null } = directorData.showOnWebsite
                ? directorData
                : staffData

            return {
                _id,
                name,
                role,
                essay,
                portrait,
                showcase
            }
        })

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
        Model: app.db.collection('users')
    }

    app.use('/people', service(options))

    const people = app.service('people')
    const users = gearsService('users')

    people.before(beforeHooks)
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore no idea whats going on here, but the typedefs for old feathers don't seem to be fully formed
    people.after(afterHooks)

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
    sync(users, people, staff, director)

}
