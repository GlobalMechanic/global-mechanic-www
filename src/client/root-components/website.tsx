import React, { ReactElement, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import PageDataProvider, { PageData } from './page-data-provider'
import PageRoutes, { StaticAssets } from './page-routes'

import GlobalStyle from './global-style'
import PageContainer from './page-container'

import TopBar from './top-bar'
import themes, { ThemeType } from '../util/theme'

/***************************************************************/
// Container
/***************************************************************/

interface WebsiteProps {
    initialPageData?: PageData[]
    lightStaticAssets: StaticAssets
    darkStaticAssets: StaticAssets
}

const Website = (props: WebsiteProps): ReactElement => {

    const {
        initialPageData,
        lightStaticAssets,
        darkStaticAssets
    } = props

    const [themeType, setThemeType] = useState<ThemeType>('light')

    const theme = themes[themeType]

    const staticAssets = themeType === 'dark'
        ? lightStaticAssets
        : darkStaticAssets

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
                    setThemeType={setThemeType}
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