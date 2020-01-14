import 'normalize.css'

/***************************************************************/
// Execute
/***************************************************************/

void async function () {

    const React = await import('react')
    const { render } = await import('react-dom')
    const { Container } = await import('./components')
    const { default: BaseTheme } = await import('./util/theme')

    render(
        <Container theme={BaseTheme}/>,
        document.getElementById('global-mechanic-www')
    )
    
}()