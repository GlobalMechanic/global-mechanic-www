"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Nut = styled_components_1.default.span `

    display: inline-block;
    width: 1.25em;
    height: 1em;

    flex: 0 0 auto;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(p) => p.staticImage});

`;
/***************************************************************/
// Main
/***************************************************************/
const TopBar = styled_components_1.default((props) => {
    const { staticAssets, ...rest } = props;
    return react_1.default.createElement("div", Object.assign({}, rest),
        react_1.default.createElement(Nut, { staticImage: staticAssets.nut }),
        react_1.default.createElement("h2", null, "Global Mechanic"));
}) `

    display: flex;
    align-items: baseline;
    margin: 0.5em 0.75em;

    position: sticky;
    top: 0.5em;

    font-size: 1.25em;

    h2 {
        margin: 0 auto 0 0;
    }

    a {
        text-decoration: none;
        &:visited {
            color: inherit;
        }
    }
`;
/***************************************************************/
// Export Topbar
/***************************************************************/
exports.default = TopBar;
