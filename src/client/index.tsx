import 'normalize.css'
import { PageData } from './root-components/page-data-provider'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { light, dark } from './assets'
import { IS_DEV } from './util/host'

/***************************************************************/
// Helper
/***************************************************************/

function getPageDataFromSSRRenderedJsonTag(): PageData[] {

    try {
        const jsonTag = document.getElementById('global-mechanic-ssr')
        const jsonStr = jsonTag && jsonTag.innerText
        const json = jsonStr && JSON.parse(jsonStr)

        return json || []

    } catch (err) {
        if (IS_DEV)
            console.error('could not parse json tag', err)
        return []
    }
}

/***************************************************************/
// Execute
/***************************************************************/

window.onload = async function () {

    const React = await import('react')
    const { hydrate } = await import('react-dom')
    const { BrowserRouter: Router } = await import('react-router-dom')
    const { default: Website } = await import('./root-components')

    hydrate(
        <Router>
            <Website
                initialPageData={getPageDataFromSSRRenderedJsonTag()}
                lightStaticAssets={light}
                darkStaticAssets={dark}
            />
        </Router>,

        document.getElementById('global-mechanic-www')
    )

}