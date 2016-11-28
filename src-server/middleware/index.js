import handler from 'feathers-errors/handler'
import serveFile from './serve-file'
import background from './background'
import reactRouterTemplate from './react-router-template'
import logging from './logging'

export default function() {

  const app = this

  app.get('/assets/file/:id', serveFile())
  app.get('/assets/background', background())
  app.use(reactRouterTemplate(app))
  app.use(logging(app))
  app.use(handler())

}
