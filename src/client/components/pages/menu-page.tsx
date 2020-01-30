import React, { ReactElement } from 'react'
import Page, { PageProps } from './page'
import { MenuPageData, PageData } from '../../root-components/page-data-provider'
import { Link } from 'react-router-dom'

/***************************************************************/
// Props
/***************************************************************/

interface MenuPageProps extends PageProps {
    page: MenuPageData
    pages: PageData[] // to be able to create links to other pages
}

/***************************************************************/
// Main
/***************************************************************/

const MenuPage = (props: MenuPageProps): ReactElement => {

    const { page, pages, ...rest } = props

    const links = page.pages

    return <Page page={page} {...rest}>
        {links.map(pageId => {
            const page = pages.find(page => page._id === pageId)
            return page
                ? <Link key={page.path} to={'/' + page.path}>{page.name}</Link>
                : null
        })}
    </Page>
}

/***************************************************************/
// Exports
/***************************************************************/

export default MenuPage