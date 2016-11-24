import NeDB from 'nedb'
import service from 'feathers-nedb'
import path from 'path'
import gears from 'modules/gears'
import { disable } from 'feathers-hooks'

/******************************************************************************/
// Hooks
/******************************************************************************/

const disableExternal = disable('external')
const SCOPES = ['private', 'public']

function websiteFilter(hook, next) {

  const { result, params } = hook

  //no filtering on internal calls
  if (!params.provider)
    return next()

  //only send showcases with public or private scopes
  hook.result = result.filter(showcase => showcase.website && SCOPES.includes(showcase.website.scope))

  next(null, hook)
}

const beforeHooks  = {
  get: disableExternal,
  create: disableExternal,
  update: disableExternal,
  patch: disableExternal
}

const afterHooks = {
  find: websiteFilter
}

/******************************************************************************/
// Initialize
/******************************************************************************/

export default function() {
  const app = this

  const db = new NeDB({
    filename: path.resolve(__dirname, '../../storage/data/showcases'),
    autoload: true
  })

  const options = {
    Model: db
  }

  app.use('/assets/showcases', service(options))

  const webShowcases = app.service('assets/showcases')
  const showcases = gears.service('showcases')

  webShowcases.before(beforeHooks)
  webShowcases.after(afterHooks)

  gears.sync(showcases, webShowcases)

}
