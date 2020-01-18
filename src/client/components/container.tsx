import React, { ReactElement, useContext } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './global-style'
import PageDataProvider, { PageDataContext } from '../util/page-data'

/***************************************************************/
// Temp
/***************************************************************/

const TempRenderData = (): ReactElement => {

    const pages = useContext(PageDataContext)

    return <div>
        <h1>GLOBAL MECHANIC</h1>
        <p>Pages: <b>{pages.length}</b></p>
    </div >

}

/***************************************************************/
// Container
/***************************************************************/

interface ContainerProps {
    theme: DefaultTheme
}

const Container = (props: ContainerProps): ReactElement =>
    <PageDataProvider>
        <ThemeProvider theme={props.theme}>
            <GlobalStyle />
            <TempRenderData />
        </ThemeProvider>
    </PageDataProvider>

/***************************************************************/
// Exports
/***************************************************************/

export default Container

export { ContainerProps }