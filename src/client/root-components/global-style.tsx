import { createGlobalStyle } from 'styled-components'
import { bodyFont, titleFont } from '../util/css'

/***************************************************************/
// Main
/***************************************************************/

const GlobalStyle = createGlobalStyle`

    html {
        background-color: ${p => p.theme.colors.bg};
        color: ${p => p.theme.colors.fg};

        
        @media only screen and (max-width: 1200px) {
            font-size: 0.8rem;
        } 

         @media only screen and (max-width: 1000px) {
            font-size: 0.75rem;
        }

        @media only screen and (max-width: 700px) {
            font-size: 0.7rem;
        } 

        @media only screen and (max-width: 400px) {
            font-size: 0.65rem;
        }

        @media only screen and (max-width: 300px) {
            font-size: 0.6rem;
        } 
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${p => p.theme.colors.bg};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${p => p.theme.colors.fg};
        opacity: 0.5;
    }

    /* ::-webkit-scrollbar-thumb:hover {
        background: #555;
    } */

    svg {
        fill: ${p => p.theme.colors.fg};
    }

    /* disbles 'detach video' popup in opera */
    html > div[style] {
        display: none !important;
    }

    html, body, main {
        display: flex;
        flex-direction: column;
        ${bodyFont};
    } 

    body, main {
        flex: 1 1 auto;
    }

    h1, h2, h3, h4, h5, h6 {
        ${titleFont};
    }
`

/***************************************************************/
// Exports
/***************************************************************/

export default GlobalStyle