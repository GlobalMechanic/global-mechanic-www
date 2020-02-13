import React, { ReactElement, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import PageDataProvider, { PageData } from './page-data-provider'
import PageRoutes from './page-routes'

import GlobalStyle from './global-style'
import PageContainer from './page-container'

import TopBar from './top-bar'
import themes, { ThemeType } from '../util/theme'
import StaticAssetContext, { StaticAssets } from './static-asset-context'

/***************************************************************/
// Container
/***************************************************************/

interface WebsiteProps {
    initialPageData: PageData[]
    lightStaticAssets: StaticAssets
    darkStaticAssets: StaticAssets
}

const Website = (props: WebsiteProps): ReactElement => {

    const {
        initialPageData,
        lightStaticAssets,
        darkStaticAssets
    } = props

    // Get the first theme type from whatever has been provided in the inital
    // page data. If this was populated from SSR, 
    const initialThemeType = initialPageData
        .map(page => page.theme)
        .find(theme => theme) || 'light'

    const [themeType, setThemeType] = useState<ThemeType>(initialThemeType)

    const theme = themes[themeType]

    const staticAssets = themeType === 'dark'
        ? lightStaticAssets
        : darkStaticAssets

    return <PageDataProvider initialPageData={initialPageData}>

        <StaticAssetContext.Provider value={staticAssets}>

            <ThemeProvider theme={theme}>

                <GlobalStyle />

                <PageContainer>

                    <TopBar />
                    <PageRoutes setThemeType={setThemeType} />

                </PageContainer>

            </ThemeProvider>

        </StaticAssetContext.Provider>

    </PageDataProvider>
}

/***************************************************************/
// Exports
/***************************************************************/

export default Website

export { WebsiteProps }