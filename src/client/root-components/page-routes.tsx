import React, { ReactElement, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageDataContext, ContentPageData } from './page-data-provider'
import { ContentPage, MenuPage, SplashPage, MissingPage } from '../components/pages'

import { ThemeType } from '../util/theme'
import usePageMatchedToLocation from '../util/use-page-matched-to-location'
import useEndLocationPath from '../util/use-end-location-path'

/***************************************************************/
// Types
/***************************************************************/
interface PageRoutesProps {
    setThemeType: (themeType: ThemeType) => void
}

/***************************************************************/
// Helper Components
/***************************************************************/

const SplashRoute = (props: PageRoutesProps): ReactElement => {

    const { setThemeType } = props

    const pages = useContext(PageDataContext)

    const splashPage = pages.find(page => !page.path) as ContentPageData | undefined

    return splashPage

        ? <SplashPage
            page={splashPage}
            setThemeType={setThemeType}
        />

        : <></>
}

const ContentRoute = (props: PageRoutesProps): ReactElement => {

    const { setThemeType } = props

    const pagePath = useEndLocationPath()
    const pages = useContext(PageDataContext)

    const page = usePageMatchedToLocation(
        pagePath,
        pages
    )

    return page
        ? page.type === 'content'

            ? <ContentPage
                page={page}
                setThemeType={setThemeType}
            />

            : <MenuPage
                page={page}
                pages={pages}
                setThemeType={setThemeType}
            />

        : <MissingPage />

}

/***************************************************************/
// Main
/***************************************************************/

const PageRoutes = (props: PageRoutesProps): ReactElement =>

    <Switch>

        <Route path='/' exact>
            <SplashRoute {...props} />
        </Route>

        <Route path='/*' >
            <ContentRoute {...props} />
        </Route>

    </Switch >

/***************************************************************/
// Exports
/***************************************************************/

export default PageRoutes