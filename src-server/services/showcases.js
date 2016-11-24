import NeDB from 'nedb'
import service from 'feathers-nedb'
import path from 'path'
import gears from 'modules/gears'

export default function() {
  const app = this

  const db = new NeDB({
    filename: path.resolve(__dirname, '../../storage/data/showcases'),
    autoload: true
  })

  const options = {
    Model: db
  }

  app.use('/showcases', service(options))

  const webShowcases = app.service('showcases')
  const showcases = gears.service('products')

  gears.sync(showcases, webShowcases)

}
