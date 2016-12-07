import service from 'feathers-mongodb'

import { service as gearsService, sync } from 'modules/gears'

import { disable } from 'feathers-hooks'

/******************************************************************************/
// Hooks
/******************************************************************************/

const disableExternal = disable('external')

const beforeHooks  = {
  get: disableExternal,
  create: disableExternal,
  update: disableExternal,
  patch: disableExternal
}

/******************************************************************************/
// Initialize
/******************************************************************************/

export default function() {
  const app = this

  const options = {
    Model: app.db.collection('products')
  }

  app.use('/assets/products', service(options))

  const webProducts = app.service('assets/products')
  const products = gearsService('products')

  webProducts.before(beforeHooks)

  sync(products, webProducts, '640x360', 'portrait')

}
