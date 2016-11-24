import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio/client'
import authentication from 'feathers-authentication/client'
import io from 'socket.io-client'

const socket = io('http://localhost:4100')

let credentials = null

const gears = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(authentication())

gears.login = newCreds => {
  if (is(newCreds, Object))
    credentials = newCreds

  if (!credentials)
    return

  gears
    .authenticate({type: 'local', ...credentials})
    .catch(err => log.error(err.message))
}

gears.sync = (from, to) => {

  const populate = () => {
    from
    .find({})
    .then(docs => to
      .remove(null)
      .then(() => {
        const promises = docs.map(doc => to.create(doc))
        return Promise.all(promises)
      })
    )
  }
  const change = res => to.update(res._id, res)
  const create = res => to.create(res)
  const remove = res => to.remove(res._id)

  gears.io.on('authenticated', populate)
  from.on('patched', change)
  from.on('updated', change)
  from.on('created', create)
  from.on('removed', remove)

}

gears.io.on('reconnect', gears.login)

gears.io.on('disconnect', ()=> log('disconnected from gears'))

gears.io.on('authenticated', () => log('logged in to gears'))

export default gears
