"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const css_1 = require("../util/css");
/***************************************************************/
// Main
/***************************************************************/
const GlobalStyle = styled_components_1.createGlobalStyle `

    html {
        background-color: ${p => p.theme.colors.bg};
        color: ${p => p.theme.colors.fg};

        @media only screen and (min-width: 1500px) {
            font-size: 1.6rem;
        }

        @media only screen and (max-width: 1500px) {
            font-size: 1.3rem;
        }

        @media only screen and (max-width: 1200px) {
            font-size: 1rem;
        }

        @media only screen and (max-width: 1000px) {
            font-size: 0.8rem;
        }

        @media only screen and (max-width: 700px) {
            font-size: 0.7rem;
        }

        @media only screen and (max-width: 400px) {
            font-size: 0.6rem;
        }

        @media only screen and (max-width: 300px) {
            font-size: 0.5rem;
        }
    }

    html, body, main {
        display: flex;
        flex-direction: column;
        ${css_1.bodyFont};
    } 

    body, main {
        flex: 1 1 auto;
    }

    main {
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        ${css_1.titleFont};
    }

`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = GlobalStyle;
