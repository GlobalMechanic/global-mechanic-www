import React, { ReactElement, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageDataContext, ContentPageData, MenuPageData } from './page-data-provider'
import { ContentPage, MenuPage, SplashPage, MissingPage } from '../components/pages'

import pluck from '../util/pluck'
import { ThemeType } from '../util/theme'

/***************************************************************/
// Types
/***************************************************************/
interface PageRoutesProps {
    setThemeType: (themeType: ThemeType) => void
}

/***************************************************************/
// Main
/***************************************************************/

const PageRoutes = (props: PageRoutesProps): ReactElement => {

    const { setThemeType } = props

    const pages = [
        ...useContext(PageDataContext)
        // ^ shallow copy so as not to alter the array stored in context
    ] as (MenuPageData | ContentPageData)[]

    const splashPage = pluck(
        pages,
        page => page.path === ''
    ) as ContentPageData | undefined

    return <Switch>

        {splashPage
            ? <Route path='/' exact>
                <SplashPage
                    page={splashPage}
                    setThemeType={setThemeType}
                />
            </Route>
            : 'Loading'
        }

        {pages.map((page: ContentPageData | MenuPageData) =>

            <Route key={page.path} path={'/' + page.path}>
                {page.type === 'content'
                    ? <ContentPage
                        page={page}
                        setThemeType={setThemeType}
                    />
                    : <MenuPage
                        page={page}
                        pages={pages}
                        setThemeType={setThemeType}
                    />
                }
            </Route>

        )}

        <Route>
            <MissingPage />
        </Route>

    </Switch>

}

/***************************************************************/
// Exports
/***************************************************************/

export default PageRoutes