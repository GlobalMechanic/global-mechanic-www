import 'normalize.css'

/***************************************************************/
// Execute
/***************************************************************/

void async function () {

    const React = await import('react')
    const { render } = await import('react-dom')
    const { BrowserRouter: Router } = await import('react-router-dom')

    const { default: Website } = await import('./root-components')

    const { LightTheme } = await import('./util/theme')

    render(

        <Router>
            <Website theme={LightTheme} />
        </Router>,

        document.getElementById('global-mechanic-www')
    )

}()