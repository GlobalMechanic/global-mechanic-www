import React, { ReactElement } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'


import PageDataProvider, { PageData } from './page-data-provider'
import PageRoutes from './page-routes'

import GlobalStyle from './global-style'
import PageContainer from './page-container'

import TopBar from './top-bar'

/***************************************************************/
// Container
/***************************************************************/

interface WebsiteProps {
    initialPageData?: PageData[]
    theme: DefaultTheme
}

const Website = (props: WebsiteProps): ReactElement => {

    const { theme, initialPageData } = props

    return <PageDataProvider initialPageData={initialPageData}>

        <ThemeProvider theme={theme}>

            <GlobalStyle />

            <PageContainer>
                <TopBar />
                <PageRoutes />
            </PageContainer>

        </ThemeProvider>

    </PageDataProvider>
}

/***************************************************************/
// Exports
/***************************************************************/

export default Website

export { WebsiteProps }