import React, { ReactElement } from 'react'
import Page from './page'
import { ContentPageProps } from './content-page'

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = (props: ContentPageProps): ReactElement => {

    const { page } = props

    return <Page page={page} >
        <h1>Hello</h1>
        {/** render page.contents here */}
    </Page>
}

/***************************************************************/
// Exports
/***************************************************************/

export default SplashPage