import React, { ReactElement, useContext } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { PageDataContext, ContentPageData, MenuPageData, PageData } from './page-data-provider'
import { ContentPage, MenuPage, SplashPage, MissingPage } from '../components/pages'

import { ThemeType } from '../util/theme'
import legacyPagePathMatch from '../util/legacy-page-path-match'

/***************************************************************/
// Types
/***************************************************************/
interface PageRoutesProps {
    setThemeType: (themeType: ThemeType) => void
}

/***************************************************************/
// Helper Methods
/***************************************************************/

const getPagePathFromLocation = (): string => {

    const location = useLocation()

    const breadcrumbs = location
        .pathname
        .split('/')
        .filter(word => !!word) // not empty

    return breadcrumbs[breadcrumbs.length - 1]
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

        : <span>LOADING</span>
}

const ContentRoute = (props: PageRoutesProps): ReactElement => {

    const { setThemeType } = props

    const pagePath = getPagePathFromLocation()
    const pagePathMatcher = legacyPagePathMatch(pagePath)

    const pages = useContext(PageDataContext)
    const page = pages.find(pagePathMatcher) as ContentPageData | MenuPageData | void

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