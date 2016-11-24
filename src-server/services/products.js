import NeDB from 'nedb'
import service from 'feathers-nedb'
import path from 'path'
import gears from 'modules/gears'

export default function() {
  const app = this

  const db = new NeDB({
    filename: path.resolve(__dirname, '../../storage/data/products'),
    autoload: true
  })

  const options = {
    Model: db
  }

  app.use('/products', service(options))

  const webProducts = app.service('products')
  const products = gears.service('products')

  gears.sync(products, webProducts)

}
