import NeDB from 'nedb'
import service from 'feathers-nedb'
import path from 'path'
import gears from 'modules/gears'

export default function() {
  const app = this

  const db = new NeDB({
    filename: path.resolve(__dirname, '../../storage/data/people'),
    autoload: true
  })

  const options = {
    Model: db
  }

  app.use('/people', service(options))

  const people = app.service('people')
  const users = gears.service('users')

  gears.sync(users, people)

}
