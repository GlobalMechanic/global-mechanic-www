import handler from 'feathers-errors/handler'
import reactRouterTemplate from './react-router-template'
import logging from './logging'
import invalidateCache from './invalidate-cache'

export default function() {

  const app = this

  app.get('/invalidate-vimeo-cache', invalidateCache())
  app.use(reactRouterTemplate(app))
  app.use(logging(app))
  app.use(handler())

}
