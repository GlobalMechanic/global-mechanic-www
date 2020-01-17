import React, { ReactElement, useContext } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './global-style'
import DataProvider, { DataContext } from './data-provider'

/***************************************************************/
// Temp
/***************************************************************/

const TempRenderData = (): ReactElement => {

    const { people, showcases, products } = useContext(DataContext)

    return <div>
        <h1>GLOBAL MECHANIC DATA</h1>
        <p>Products: <b>{products.length}</b></p>
        <p>Showcases: <b>{showcases.length}</b></p>
        <p>People: <b>{people.length}</b></p>
    </div >

}

/***************************************************************/
// Container
/***************************************************************/

interface ContainerProps {
    theme: DefaultTheme
}

const Container = (props: ContainerProps): ReactElement =>
    <DataProvider>
        <ThemeProvider theme={props.theme}>
            <GlobalStyle />
            <TempRenderData />
        </ThemeProvider>
    </DataProvider>

/***************************************************************/
// Exports
/***************************************************************/

export default Container

export { ContainerProps }