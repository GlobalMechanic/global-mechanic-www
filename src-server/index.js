import app from './app'
import is from 'is-explicit'

global.is = is
global.log = app.logger.info.bind(app.logger)

const port = app.get('port')
const server = app.listen(port, '0.0.0.0')

server.on('listening', () => {

  log(`App enabled. Server listening on port ${port}`)

})
