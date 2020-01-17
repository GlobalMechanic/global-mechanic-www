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
        Model: app.db.collection('products')
    }

    app.use('/assets/products', service(options))

    const webProducts = app.service('assets/products')
    const products = gearsService('products')

    webProducts.before(beforeHooks)

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
