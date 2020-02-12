import React, { ReactElement } from 'react'
import Page, { PageProps } from './page'
import { MenuPageData, PageData } from '../../root-components/page-data-provider'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import HOST from '../../util/host'
import Markdown from '../generic/markdown'

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

interface MenuPortraitProps {
    portraitId: string
}

/***************************************************************/
// Constants
/***************************************************************/

const MAIN_MENU_PATH = 'menu' // TODO this should not be hard coded.

/***************************************************************/
// Main
/***************************************************************/

const MenuPortrait = styled.div`

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    overflow: hidden;

    width: 100%;
    height: 56.25vw;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${HOST}/file/${(p: MenuPortraitProps) => p.portraitId});
    
    h2 {
        margin: 0em 0.5em 0.25em 0em;
        padding-right: env(safe-area-inset-right);

        color: ${p => p.theme.colors.bg};
        font-size: 3em;
        text-align: right;
    }
`

const MenuLink = styled((props: MenuLinkProps): ReactElement => {

    const { page, ...rest } = props

    const route = useRouteMatch()

    const base = route.url === '/' + MAIN_MENU_PATH
        ? '/'
        : route.url + '/'

    const header = <h2 key={page.path}>
        {page.name}
    </h2>

    return <Link to={base + page.path} {...rest}>{

        page.portrait

            ? <MenuPortrait portraitId={page.portrait}>
                {header}
            </MenuPortrait>

            : header

    }</Link>

})`
    text-decoration: none;
    color: inherit;
    &:visited {
        color: inherit;
    }

    text-align: center;
    
    > h2 {
        margin: 0;
        font-size: 4em;
        letter-spacing: -1px;
    }
`

const MenuPage = styled((props: MenuPageProps): ReactElement => {

    const { page, pages, ...rest } = props

    const links = page.pages

    return <Page page={page} {...rest}>
        <>

            {page.name
                ? <Markdown>{`# ${page.name}`}</Markdown>
                : null
            }

            {links.map(pageId => {
                const page = pages.find(page => page._id === pageId)
                return page

                    ? <MenuLink key={page.path} page={page} />

                    : null

            })}

        </>
    </Page>

})`
    font-size: 3vmin;
    height: 100%;
`

/***************************************************************/
// Exports
/***************************************************************/

export default MenuPage