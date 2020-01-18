import 'normalize.css'

/***************************************************************/
// Execute
/***************************************************************/

void async function () {

    const React = await import('react')
    const { render } = await import('react-dom')
    const { Container } = await import('./components')
    const { LightTheme } = await import('./util/theme')

    render(
        <Container theme={LightTheme} />,
        document.getElementById('global-mechanic-www')
    )

}()