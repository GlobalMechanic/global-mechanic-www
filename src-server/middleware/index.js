import handler from 'feathers-errors/handler'
import notFound from './not-found-handler'
import logging from './logging'

export default function() {

  const app = this

  app.use(notFound())
  app.use(logging(app))
  app.use(handler())

}
