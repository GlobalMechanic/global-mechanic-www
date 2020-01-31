import React, { ReactElement } from 'react'
import Page, { PageProps } from './page'
import { MenuPageData, PageData } from '../../root-components/page-data-provider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FileContent } from '../contents'

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

    const portrait = page.portrait
        ? <FileContent
            description={null}
            content={{
                file: page.portrait,
                type: 'file'
            }}
        />
        : null

    return <>

        {portrait}

        <h2 key={page.path} {...rest}>
            <Link to={'/' + page.path}>{page.title || page.name}</Link>
        </h2>

    </>
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

    return <Page page={page} {...rest}>

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