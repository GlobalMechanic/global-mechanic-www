import React, { ReactElement } from 'react'
import styled, { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './global-style'

/***************************************************************/
// Container Div
/***************************************************************/

const ContainerDiv = styled.div`

    width: 100%;
    height: 100%;

     h1 {
         margin: 0;
     }
`

/***************************************************************/
// Container
/***************************************************************/

interface ContainerProps {
    theme: DefaultTheme
}

const Container = (props: ContainerProps): ReactElement =>

    <ThemeProvider theme={props.theme}>
        
        <GlobalStyle />
        
        <ContainerDiv >
            <h1>Global Mechanic</h1>
        </ContainerDiv>

    </ThemeProvider>

/***************************************************************/
// Exports
/***************************************************************/

export default Container

export { ContainerProps }