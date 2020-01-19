import React, { ReactElement, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageDataContext } from './page-data-provider'
import { Page, PageNotFound } from '../components'

/***************************************************************/
// Main
/***************************************************************/

const Router = (): ReactElement => {

    const pages = useContext(PageDataContext)

    return <Switch>
        {pages.map(page =>
            <Route key={page.path} path={page.path}>
                <Page page={page} />
            </Route>)
        }
        <Route>
            <PageNotFound />
        </Route>
    </Switch>

}

/***************************************************************/
// Exports
/***************************************************************/

export default Router