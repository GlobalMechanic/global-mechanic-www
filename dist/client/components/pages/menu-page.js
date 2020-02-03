"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const page_1 = __importDefault(require("./page"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const host_1 = __importDefault(require("../../util/host"));
const markdown_1 = __importDefault(require("../generic/markdown"));
/***************************************************************/
// Main
/***************************************************************/
const MenuPortrait = styled_components_1.default.div `

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    overflow: hidden;

    width: 100vw;
    height: min(56.25vw, 25em);
    background-position: center;
    background-size: cover;
    background-image: url(${host_1.default}/file/${(p) => p.portraitId}-thumb);

    h2 {
        margin: 0em 0.25em 0.25em 0em;

        color: ${p => p.theme.colors.bg};
        font-size: 3em;
    }
`;
const MenuLink = styled_components_1.default((props) => {
    const { page, ...rest } = props;
    const header = react_1.default.createElement("h2", { key: page.path }, page.name);
    return react_1.default.createElement(react_router_dom_1.Link, Object.assign({ to: '/' + page.path }, rest), page.portrait
        ? react_1.default.createElement(MenuPortrait, { portraitId: page.portrait }, header)
        : header);
}) `
    text-decoration: none;
    color: inherit;
    &:visited {
        color: inherit;
    }

    > h2 {
        margin: 0;
        font-size: 4em;
    }
`;
const MenuPage = styled_components_1.default((props) => {
    const { page, pages, ...rest } = props;
    const links = page.pages;
    return react_1.default.createElement(page_1.default, Object.assign({ page: page }, rest),
        react_1.default.createElement(react_1.default.Fragment, null,
            page.name
                ? react_1.default.createElement(markdown_1.default, null, `# ${page.name}`)
                : null,
            links.map(pageId => {
                const page = pages.find(page => page._id === pageId);
                return page
                    ? react_1.default.createElement(MenuLink, { key: page.path, page: page })
                    : null;
            })));
}) `
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = MenuPage;
