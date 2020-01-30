import { createGlobalStyle } from 'styled-components'

/***************************************************************/
// Main
/***************************************************************/

const GlobalStyle = createGlobalStyle`

    html, body, main {
        display: flex;
        flex-direction: column;
    } 

    html {
        background-color: ${p => p.theme.colors.bg};
        color: ${p => p.theme.colors.fg};
    }

    body, main {
        flex: 1 1 auto;
    }

`

/***************************************************************/
// Exports
/***************************************************************/

export default GlobalStyle