import NeDB from 'nedb'
import service from 'feathers-nedb'
import path from 'path'
import gears from 'modules/gears'

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

  const db = new NeDB({
    filename: path.resolve(__dirname, '../../storage/data/products'),
    autoload: true
  })

  const options = {
    Model: db
  }

  app.use('/assets/products', service(options))

  const webProducts = app.service('assets/products')
  const products = gears.service('products')

  webProducts.before(beforeHooks)

  gears.sync(products, webProducts)

}
