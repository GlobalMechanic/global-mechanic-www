import React, { ReactElement } from 'react'
import styled from 'styled-components'
import GlobalStyle from './global-style'

/***************************************************************/
// Container Div
/***************************************************************/

const ContainerDiv = styled.div`
    color: pink;

    h1 {
        margin: 0;
    }
`

/***************************************************************/
// Container
/***************************************************************/

interface ContainerProps {
    title: string
}

const Container = (props: ContainerProps): ReactElement => <>
    <GlobalStyle />
    <ContainerDiv >
        <h1>{props.title}</h1>
    </ContainerDiv>
</>

/***************************************************************/
// Exports
/***************************************************************/

export default Container

export { ContainerProps }