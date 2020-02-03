"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const page_data_provider_1 = require("./page-data-provider");
const pages_1 = require("../components/pages");
const pluck_1 = __importDefault(require("../util/pluck"));
/***************************************************************/
// Main
/***************************************************************/
const PageRoutes = (props) => {
    const { setThemeType } = props;
    const pages = [
        ...react_1.useContext(page_data_provider_1.PageDataContext)
        // ^ shallow copy so as not to alter the array stored in context
    ];
    const splashPage = pluck_1.default(pages, page => page.path === '');
    return react_1.default.createElement(react_router_dom_1.Switch, null,
        splashPage
            ? react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true },
                react_1.default.createElement(pages_1.SplashPage, { page: splashPage, setThemeType: setThemeType }))
            : 'Loading',
        pages.map((page) => react_1.default.createElement(react_router_dom_1.Route, { key: page.path, path: '/' + page.path }, page.type === 'content'
            ? react_1.default.createElement(pages_1.ContentPage, { page: page, setThemeType: setThemeType })
            : react_1.default.createElement(pages_1.MenuPage, { page: page, pages: pages, setThemeType: setThemeType }))),
        react_1.default.createElement(react_router_dom_1.Route, null,
            react_1.default.createElement(pages_1.MissingPage, null)));
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = PageRoutes;
