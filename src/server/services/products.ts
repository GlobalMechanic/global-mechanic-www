// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no typedef
import service from 'feathers-mongodb'

import { service as gearsService, sync } from '../modules/gears'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
import { disable, Hook } from 'feathers-hooks'

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

        // stripped to necessary fields
        .map((product: any) => {// eslint-disable-line @typescript-eslint/no-explicit-any

            const {
                _id,
                name,
                description = '',
                productType,
                video = null,
                portrait = null,
                images = null,
                clients = [],
                directors = []

            } = product

            return {
                _id,
                name,
                type: productType,
                essay: description,
                video,
                portrait,
                images,
                clients,
                directors
            }
        })

    next(null, hook)
}

/***************************************************************/
// Hook Maps
/***************************************************************/

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
        Model: app.db.collection('products')
    }

    app.use('/products', service(options))

    const webProducts = app.service('products')
    const products = gearsService('products')

    webProducts.before(beforeHooks)
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore no idea whats going on here, but the typedefs for old feathers don't seem to be fully formed
    webProducts.after(afterHooks)

    const portrait = {
        path: 'portrait',
        thumb: '640x360',
        full: false
    }

    const images = {
        path: 'images',
        thumb: '400',
        full: true
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore 
    sync(products, webProducts, portrait, images)

}
