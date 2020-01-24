import React, { ReactElement } from 'react'
import Page, { PageProps } from './page'
import { MenuPageData, PageData } from '../../root-components/page-data-provider'

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

    const { page } = props

    return <Page page={page} >
        {/** render page.pages links here */}
    </Page>
}

/***************************************************************/
// Exports
/***************************************************************/

export default MenuPage