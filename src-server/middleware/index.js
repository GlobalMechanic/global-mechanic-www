import handler from 'feathers-errors/handler'
import background from './background'
import reactRouterTemplate from './react-router-template'
import logging from './logging'

export default function() {

  const app = this

  app.get('/background', background())
  app.use(reactRouterTemplate(app))
  app.use(logging(app))
  app.use(handler())

}
