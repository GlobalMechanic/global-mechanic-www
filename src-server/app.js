import feathers from 'feathers'
import configuration from 'feathers-configuration'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'

import path from 'path'
import cors from 'cors'
import favicon from 'serve-favicon'
import compress from 'compression'
import bodyParser from 'body-parser'
import { static as serveStatic } from 'feathers'
import fallback from 'express-history-api-fallback'

import middleware from './middleware'

/******************************************************************************/
// Config
/******************************************************************************/

const app = feathers()
const configURL = path.resolve(__dirname, '..')
const favURL = path.resolve(__dirname, '../favicon.png')

app.configure(configuration(configURL))

const publicURL = path.resolve(__dirname, app.get('public'))
const faviconURL = path.resolve(__dirname, '../favicon.png')

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(faviconURL))
  .use('/assets', serveStatic(publicURL + '/assets'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(favicon(favURL))

  .configure(hooks())
  .configure(rest())
  .configure(middleware)

  .use(fallback('index.html', { publicURL }))


/******************************************************************************/
// Exports
/******************************************************************************/

export default app
