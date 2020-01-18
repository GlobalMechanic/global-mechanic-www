import { createGlobalStyle } from 'styled-components'

/***************************************************************/
// Main
/***************************************************************/

const GlobalStyle = createGlobalStyle`

    html {
        background-color: ${p => p.theme.colors.bg};
        color: ${p => p.theme.colors.fg};
    }

`

/***************************************************************/
// Exports
/***************************************************************/

export default GlobalStyle