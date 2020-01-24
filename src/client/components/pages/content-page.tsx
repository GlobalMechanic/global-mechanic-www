import React, { ReactElement } from 'react'
import Page, { PageProps } from './page'
import { ContentPageData } from '../../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface ContentPageProps extends PageProps {
    page: ContentPageData
}

/***************************************************************/
// Main
/***************************************************************/

const ContentPage = (props: ContentPageProps): ReactElement => {

    const { page } = props

    return <Page page={page} >
        {/** render page.contents here */}
    </Page>
}

/***************************************************************/
// Exports
/***************************************************************/

export default ContentPage

export {
    ContentPageProps
}