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
const legacy_page_path_match_1 = __importDefault(require("../util/legacy-page-path-match"));
/***************************************************************/
// Helper Methods
/***************************************************************/
const getPagePathFromLocation = () => {
    const location = react_router_dom_1.useLocation();
    const breadcrumbs = location
        .pathname
        .split('/')
        .filter(word => !!word); // not empty
    return breadcrumbs[breadcrumbs.length - 1];
};
/***************************************************************/
// Helper Components
/***************************************************************/
const SplashRoute = (props) => {
    const { setThemeType } = props;
    const pages = react_1.useContext(page_data_provider_1.PageDataContext);
    const splashPage = pages.find(page => !page.path);
    return splashPage
        ? react_1.default.createElement(pages_1.SplashPage, { page: splashPage, setThemeType: setThemeType })
        : react_1.default.createElement("span", null, "LOADING");
};
const ContentRoute = (props) => {
    const { setThemeType } = props;
    const pagePath = getPagePathFromLocation();
    const pagePathMatcher = legacy_page_path_match_1.default(pagePath);
    const pages = react_1.useContext(page_data_provider_1.PageDataContext);
    const page = pages.find(pagePathMatcher);
    return page
        ? page.type === 'content'
            ? react_1.default.createElement(pages_1.ContentPage, { page: page, setThemeType: setThemeType })
            : react_1.default.createElement(pages_1.MenuPage, { page: page, pages: pages, setThemeType: setThemeType })
        : react_1.default.createElement(pages_1.MissingPage, null);
};
/***************************************************************/
// Main
/***************************************************************/
const PageRoutes = (props) => react_1.default.createElement(react_router_dom_1.Switch, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true },
        react_1.default.createElement(SplashRoute, Object.assign({}, props))),
    react_1.default.createElement(react_router_dom_1.Route, { path: '/*' },
        react_1.default.createElement(ContentRoute, Object.assign({}, props))));
/***************************************************************/
// Exports
/***************************************************************/
exports.default = PageRoutes;
