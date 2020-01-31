"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
/***************************************************************/
// Supporting
/***************************************************************/
const ContentStyled = styled_components_1.default.div `

`;
/***************************************************************/
// Main
/***************************************************************/
const Content = (props) => {
    const { content, children, ...rest } = props;
    return react_1.default.createElement(ContentStyled, Object.assign({}, rest), children);
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = Content;
