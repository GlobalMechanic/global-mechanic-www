import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio/client'
import authentication from 'feathers-authentication/client'
import io from 'socket.io-client'

import { hasFile, writeFile } from 'modules/file-storage'
// import path from 'path'
import Queue from 'promise-queue'
import fetch from 'isomorphic-fetch'

/******************************************************************************/
// Data
/******************************************************************************/
const ALREADY_EXISTS = Symbol('already-exists')

const queue = new Queue(4, Infinity)
let gears = null

/******************************************************************************/
// Helper
/******************************************************************************/

function getIn(obj, paths) {
  paths = is(paths, Array) ? paths : [paths]
  const final = paths.length - 1

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const atFinal = i === final

    if (atFinal)
      return obj[path]

    if (typeof obj[path] !== 'object')
      return undefined

    obj = obj[path]
  }
}

function ensureFile(id, dim = '640x360') {

  //check if the file exists
  queue.add(() => hasFile(id)
    .then(has => has ? ALREADY_EXISTS : fetch(`${gears.host}/files/${id}?process=${dim}`))
    //download it from gears if it doesn't
    .then(res => {
      if (res === ALREADY_EXISTS)
        return ALREADY_EXISTS

      if (res.status !== 200)
        throw new Error(res.body)

      const type = res.headers._headers['content-type'][0]
      const ext = type.substr(type.indexOf('/')+1)

      return writeFile(id, ext, res.body)
    })
    .catch(err => log.error(`Error fetching file ${id}`,err))
  )

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default function initialize() {

  const app = this
  gears = app.get('gears')

  const socket = io(gears.host)

  gears.client = feathers()
    .configure(hooks())
    .configure(socketio(socket))
    .configure(authentication())

  gears.client.io.on('reconnect', login)
  gears.client.io.on('disconnect', ()=> log('disconnected from gears'))
  gears.client.io.on('authenticated', () => log('logged in to gears'))

  login()
}

export function service(name) {
  return gears.client.service(name)
}

export function login() {

  return gears.client
    .authenticate({type: 'local', ...gears.auth})
    .catch(err => log.error(err))
}

export function sync(from, to, imageDim, ...imagePaths) {

  const ensureFiles = doc => {
    imagePaths.forEach(path => {
      const fileId = getIn(doc, path)
      if (fileId)
        ensureFile(fileId, imageDim)
    })
  }

  const populate = () => {
    from

    //find all the docs from gears
    .find({})
    .then(docs => to

      //remove all the local docs
      .remove(null)
      .then(() => {

        //fill all the local docs with data from gears
        const promises = docs.map(doc => to.create(doc))
        return Promise.all(promises)
      })

      //download any files associated with the docs created
      .then(docs => docs.forEach(ensureFiles))
    )
  }

  const change = res => to.update(res._id, res).then(ensureFiles)
  const create = res => to.create(res).then(ensureFiles)
  const remove = res => to.remove(res._id)

  gears.client.io.on('authenticated', populate)
  from.on('patched', change)
  from.on('updated', change)
  from.on('created', create)
  from.on('removed', remove)

}
