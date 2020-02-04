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
const styled_components_1 = require("styled-components");
const page_data_provider_1 = __importDefault(require("./page-data-provider"));
const page_routes_1 = __importDefault(require("./page-routes"));
const global_style_1 = __importDefault(require("./global-style"));
const page_container_1 = __importDefault(require("./page-container"));
const top_bar_1 = __importDefault(require("./top-bar"));
const theme_1 = __importDefault(require("../util/theme"));
const static_asset_context_1 = __importDefault(require("./static-asset-context"));
const Website = (props) => {
    const { initialPageData, lightStaticAssets, darkStaticAssets } = props;
    // Get the first theme type from whatever has been provided in the inital
    // page data. If this was populated from SSR, 
    const initialThemeType = initialPageData
        .map(page => page.theme)
        .find(theme => theme) || 'light';
    const [themeType, setThemeType] = react_1.useState(initialThemeType);
    const theme = theme_1.default[themeType];
    const staticAssets = themeType === 'dark'
        ? lightStaticAssets
        : darkStaticAssets;
    return react_1.default.createElement(page_data_provider_1.default, { initialPageData: initialPageData },
        react_1.default.createElement(static_asset_context_1.default.Provider, { value: staticAssets },
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
                react_1.default.createElement(global_style_1.default, null),
                react_1.default.createElement(page_container_1.default, null,
                    react_1.default.createElement(top_bar_1.default, { navIconTo: '/menu' }),
                    react_1.default.createElement(page_routes_1.default, { setThemeType: setThemeType })))));
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = Website;
