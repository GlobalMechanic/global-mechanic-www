"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
/***************************************************************/
// Main
/***************************************************************/
const Page = styled_components_1.default((props) => {
    const { page, title = page.name, children, ...rest } = props;
    return react_1.default.createElement("div", Object.assign({}, rest),
        title ? react_1.default.createElement("h1", null, title) : null,
        children);
}) `
    display: flex;
    flex-direction: column;

    flex: 1 1 auto;
    box-sizing: border-box;

    margin: 0em 1em 0em 1em;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = Page;
