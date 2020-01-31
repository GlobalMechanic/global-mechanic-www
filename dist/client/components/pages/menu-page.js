"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const page_1 = __importDefault(require("./page"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
/***************************************************************/
// Main
/***************************************************************/
const MenuLink = styled_components_1.default((props) => {
    const { page, ...rest } = props;
    return react_1.default.createElement("h1", Object.assign({ key: page.path }, rest),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/' + page.path }, page.name));
}) `

    margin: 0;
    font-size: 4em;

    a {
        text-decoration: none;
        color: inherit;
        &:visited {
            color: inherit;
        }
    }
`;
const MenuPage = styled_components_1.default((props) => {
    const { page, pages, ...rest } = props;
    const links = page.pages;
    return react_1.default.createElement(page_1.default, Object.assign({ page: page, title: '' }, rest), links.map(pageId => {
        const page = pages.find(page => page._id === pageId);
        return page
            ? react_1.default.createElement(MenuLink, { key: page.path, page: page })
            : null;
    }));
}) `
    align-items: center;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = MenuPage;
