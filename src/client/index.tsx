import 'normalize.css'

/***************************************************************/
// Execute
/***************************************************************/

void async function () {

    const React = await import('react')
    const { render } = await import('react-dom')
    const { Container } = await import('./components')

    render(
        <Container title='container'/>,
        document.getElementById('global-mechanic-www')
    )
    
}()