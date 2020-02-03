"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const styled_components_1 = __importDefault(require("styled-components"));
/***************************************************************/
// Main
/***************************************************************/
const Markdown = styled_components_1.default((props) => {
    const { children, ...rest } = props;
    return react_1.default.createElement(react_markdown_1.default, Object.assign({ source: children }, rest));
}) `

    font-size: 2em;

    h1, h2, h3, h4, h5, h6, p, ul {
        margin: 0;
    }

    h1:first-child {
        font-size: 4em;
    }

    a {
        color: inherit;
    }

`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = Markdown;
