import React, { ReactElement } from 'react'
import Page, { PageProps } from './page'
import { MenuPageData, PageData } from '../../root-components/page-data-provider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/***************************************************************/
// Props
/***************************************************************/

interface MenuPageProps extends PageProps {
    page: MenuPageData
    pages: PageData[] // to be able to create links to other pages
}

interface MenuLinkProps {
    page: PageData
}

/***************************************************************/
// Main
/***************************************************************/

const MenuLink = styled((props: MenuLinkProps): ReactElement => {

    const { page, ...rest } = props

    return <h1 key={page.path} {...rest}>
        <Link to={'/' + page.path}>{page.name}</Link>
    </h1>
})`

    margin: 0;
    font-size: 4em;

    a {
        text-decoration: none;
        color: inherit;
        &:visited {
            color: inherit;
        }
    }
`

const MenuPage = styled((props: MenuPageProps): ReactElement => {

    const { page, pages, ...rest } = props

    const links = page.pages

    return <Page page={page} title='' {...rest}>
        {links.map(pageId => {
            const page = pages.find(page => page._id === pageId)
            return page

                ? <MenuLink key={page.path} page={page} />

                : null

        })}
    </Page>
})`
    align-items: center;
`

/***************************************************************/
// Exports
/***************************************************************/

export default MenuPage