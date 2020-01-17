import createApp from './app'

/***************************************************************/
// Execute
/***************************************************************/

void async function serve () {

    const app = await createApp()

    const port = app.get('port') as number
    const server = app.listen(port, '0.0.0.0')

    server.on('listening', () => {
        console.log('website started, serving on port', port)
    })

}()