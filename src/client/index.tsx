import 'normalize.css'
import { PageData } from './root-components/page-data-provider'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import staticAssets from './assets'

/***************************************************************/
// Helper
/***************************************************************/

function getPageDataFromSSRRenderedJsonTag(): PageData[] {
    // TODO: Finish SSR then get PageData from json tag
    return []
}

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
            <Website
                initialPageData={getPageDataFromSSRRenderedJsonTag()}
                staticAssets={staticAssets}
                theme={LightTheme}
            />
        </Router>,

        document.getElementById('global-mechanic-www')
    )

}()