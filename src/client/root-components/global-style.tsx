import { createGlobalStyle } from 'styled-components'
import { bodyFont, titleFont } from '../util/css'

/***************************************************************/
// Main
/***************************************************************/

const GlobalStyle = createGlobalStyle`

    html, body, main {
        display: flex;
        flex-direction: column;
        ${bodyFont};
    } 

    h1, h2, h3, h4, h5, h6 {
        ${titleFont};
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