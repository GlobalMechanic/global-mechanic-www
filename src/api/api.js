import './globals'

import path from 'path'
import is from 'is-explicit'

import feathers, { static as serveStatic } from 'feathers'
import configuration from 'feathers-configuration'

import compress from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import favicon from 'serve-favicon'

import {
  setupProviders,
  setupAuthorization,
  connectToMongodb
} from './initialize'

/******************************************************************************/
// Data
/******************************************************************************/

const CONFIG_URL = path.join(process.cwd(), 'config')
const SERVE_URL = path.resolve(__dirname, '../public')
const FAVICON_URL = ''

const DEFAULT_FLAGS = Object.freeze({

  providers: true,
  authorization: true,
  mongodb: true,

  ffmpeg: true,

  services: {
    users: true,
    files: true
  },

  socketio: {
    uploading: true
  },

  rest: {
    info: true,
    error: true
  }

})

/******************************************************************************/
// Helper
/******************************************************************************/

function assertFlags (flags = {}, defaultFlags = DEFAULT_FLAGS, name = 'flags') {

  if (!is.plainObject(flags))
    throw new Error(`${name} needs to be a plain object.`)

  if (!is.plainObject(defaultFlags))
    throw new Error(`defaults needs to be a plain object.`)

  // make a copy so that sub assertions don't mutate original object
  flags = { ...flags }

  for (const key in flags) {
    if (key in defaultFlags === false)
      throw new Error(`${name}.${key} is an unrecognized option`)

    const defaultType = typeof defaultFlags[key]
    if (typeof flags[key] !== defaultType) // eslint-disable-line valid-typeof
      throw new Error(`${name}.${key} must be of type '${defaultType}'`)

    const isPlainObject = is.plainObject(flags[key])
    if (defaultType === 'object' && !isPlainObject)
      throw new Error(`${name}.${key} must be a plain object`)

    if (isPlainObject)
      flags[key] = assertFlags(flags[key], defaultFlags[key], `${name}.${key}`)
  }

  return Object.freeze({ ...defaultFlags, ...flags })

}

/******************************************************************************/
// Main Class
/******************************************************************************/

class Api {

  // Properties

  feathers = feathers()
    .configure(configuration(CONFIG_URL))
    .options('*', cors())
    .use(cors())
    .use(compress())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(favicon(FAVICON_URL))
    .use('/public', serveStatic(SERVE_URL))

  listener = null

  // Main Methods

  async initialize (flags) {

    flags = assertFlags(flags || this.get('initialize-flags'))

    if (flags.providers)
      this::setupProviders(flags.socketio)

    if (flags.authorization)
      this::setupAuthorization()

    if (flags.mongodb)
      await this::connectToMongodb()

  }

  start () {

    const { feathers } = this

    const port = feathers.get('port')
    if (!is(port, Number))
      throw new Error('port is invalid')

    if (!feathers.db)
      throw new Error('run initialize() before start()')

    this.listener = feathers.listen(port)

    return new Promise(resolve =>
      feathers.listener.once('listening', () => resolve(this.listener))
    )

  }

  // Methods

  // Shortcuts

  get get () {
    return this.feathers.get
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Api
