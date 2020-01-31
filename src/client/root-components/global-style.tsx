import { createGlobalStyle } from 'styled-components'
import { bodyFont, titleFont } from '../util/css'

/***************************************************************/
// Main
/***************************************************************/

const GlobalStyle = createGlobalStyle`

    html {
        background-color: ${p => p.theme.colors.bg};
        color: ${p => p.theme.colors.fg};

        @media only screen and (max-width: 400px) {
            font-size: 0.75rem;
        }

        @media only screen and (max-width: 300px) {
            font-size: 0.5rem;
        }
    }

    html, body, main {
        display: flex;
        flex-direction: column;
        ${bodyFont};
    } 

    body, main {
        flex: 1 1 auto;
    }

    main {
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        ${titleFont};
    }

`

/***************************************************************/
// Exports
/***************************************************************/

export default GlobalStyle