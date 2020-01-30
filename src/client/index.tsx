import 'normalize.css'
import { PageData } from './root-components/page-data-provider'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore it's webpack, it's fine
import dots from './assets/dots.png'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore it's webpack, it's fine
import nut from './assets/nut.png'

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

    const staticAssets = {
        dots,
        nut
    }

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