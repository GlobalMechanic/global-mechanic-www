"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const css_1 = require("../util/css");
/***************************************************************/
// Main
/***************************************************************/
const GlobalStyle = styled_components_1.createGlobalStyle `

    html, body, main {
        display: flex;
        flex-direction: column;
        ${css_1.bodyFont};
    } 

    h1, h2, h3, h4, h5, h6 {
        ${css_1.titleFont};
    }

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

    body, main {
        flex: 1 1 auto;
    }

`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = GlobalStyle;
