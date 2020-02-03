"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const page_1 = __importDefault(require("./page"));
const contents_1 = require("../contents");
/***************************************************************/
// Main
/***************************************************************/
const ContentPage = styled_components_1.default((props) => {
    const { page, ...rest } = props;
    return react_1.default.createElement(page_1.default, Object.assign({ page: page }, rest), page.contents.map((content, i) => content.type === 'text'
        ? react_1.default.createElement(contents_1.TextContent, { key: i, content: content })
        : content.type === 'vimeo'
            ? react_1.default.createElement(contents_1.VimeoContent, { key: i, content: content })
            : react_1.default.createElement(contents_1.FileContent, { key: i, content: content })));
}) `
    align-items: flex-start;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = ContentPage;
