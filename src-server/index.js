import './globals'
import app from './app'

/******************************************************************************/
// Server
/******************************************************************************/

app.then(a => {

  const port = a.get('port')
  const server = a.listen(port, '0.0.0.0')
  server.on('listening', () => log(`App enabled. Server listening on port ${port}`))

})
