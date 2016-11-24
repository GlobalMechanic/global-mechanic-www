import gears from 'modules/gears'
import people from './people'
import products from './products'
import showcases from './showcases'

export default function() {

  const app = this

  const credentials = app.get('gears-authentication')
  gears.login(credentials)

  app.configure(people)
  app.configure(products)
  app.configure(showcases)

}
