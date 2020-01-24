import React, { ReactElement, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageDataContext, ContentPageData, MenuPageData } from './page-data-provider'
import { ContentPage, MenuPage, SplashPage, MissingPage } from '../components/pages'

import pluck from '../util/pluck'

/***************************************************************/
// Main
/***************************************************************/

const Router = (): ReactElement => {

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
                <SplashPage page={splashPage} title='' />
            </Route>
            : 'Loading'
        }

        {pages.map(page =>
            <Route key={page.path} path={'/' + page.path}>
                {page.type === 'content'
                    ? <ContentPage page={page} />
                    : <MenuPage page={page} pages={pages} />
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

export default Router