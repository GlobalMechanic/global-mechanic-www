import React, { ReactElement } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyle from './global-style'
import PageRoutes from './page-routes'
import PageDataProvider from './page-data-provider'
import TopBar from './top-bar'
import PageContainer from './page-container'

/***************************************************************/
// Container
/***************************************************************/

interface WebsiteProps {
    theme: DefaultTheme
}

const Website = (props: WebsiteProps): ReactElement =>
    <PageDataProvider>
        <ThemeProvider theme={props.theme}>

            <GlobalStyle />

            <PageContainer>
                <TopBar />
                <PageRoutes />
            </PageContainer>

        </ThemeProvider>
    </PageDataProvider>

/***************************************************************/
// Exports
/***************************************************************/

export default Website

export { WebsiteProps }