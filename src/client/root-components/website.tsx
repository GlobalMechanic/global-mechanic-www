import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import PageDataProvider, { PageData } from './page-data-provider'
import PageRoutes, { StaticAssets } from './page-routes'

import GlobalStyle from './global-style'
import PageContainer from './page-container'

import TopBar from './top-bar'
import { LightTheme } from '../util/theme'

/***************************************************************/
// Container
/***************************************************************/

interface WebsiteProps {
    initialPageData?: PageData[]
    staticAssets: StaticAssets
}

const Website = (props: WebsiteProps): ReactElement => {

    const { initialPageData, staticAssets } = props

    const theme = LightTheme

    return <PageDataProvider initialPageData={initialPageData}>

        <ThemeProvider theme={theme}>

            <GlobalStyle />

            <PageContainer>

                <TopBar
                    staticAssets={staticAssets}
                    navIconTo='/menu'
                />

                <PageRoutes
                    staticAssets={staticAssets}
                />

            </PageContainer>

        </ThemeProvider>

    </PageDataProvider>
}

/***************************************************************/
// Exports
/***************************************************************/

export default Website

export { WebsiteProps }