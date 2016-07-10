/******************************************************************************/
// Dependencies
/******************************************************************************/
import feathers from 'feathers'
import configuration from 'feathers-configuration'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'

import path from 'path'
import cors from 'cors'
//import favicon from 'serve-favicon'
import compress from 'compression'
import bodyParser from 'body-parser'
import { static as serveStatic } from 'feathers'
import fallback from 'express-history-api-fallback'

import services from './services'
import middleware from './middleware'

/******************************************************************************/
// Data
/******************************************************************************/
const app = feathers()
const configURL = path.resolve(__dirname, '..')

/******************************************************************************/
// Config
/******************************************************************************/
app.configure(configuration(configURL))

const publicURL = app.get('public')
//const faviconURL = path.join(publicURL, 'favicon.ico')

app.use(compress())
  .options('*', cors())
  .use(cors())
//  .use(favicon(faviconURL))
  .use('/', serveStatic(publicURL))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(fallback('index.html', { publicURL }))
  .configure(hooks())
  .configure(rest())
  .configure(middleware)
  .configure(services)
  .get('*', (req,res) => res.sendFile(path.join(publicURL, 'index.html')))

/******************************************************************************/
// Exports
/******************************************************************************/

export default app