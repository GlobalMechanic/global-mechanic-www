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
const styled_components_1 = __importStar(require("styled-components"));
const social_media_links_1 = __importDefault(require("../generic/social-media-links"));
/***************************************************************/
// Main
/***************************************************************/
const Page = styled_components_1.default(styled_components_1.withTheme((props) => {
    const { page, children, setThemeType, theme, ...rest } = props;
    react_1.useEffect(() => {
        if (theme.name !== page.theme)
            setThemeType(page.theme);
    }, [theme.name]);
    return react_1.default.createElement("div", Object.assign({}, rest),
        children,
        page.flags && page.flags.socialMediaLinks
            ? react_1.default.createElement(social_media_links_1.default, null)
            : null);
})) `
    display: flex;
    flex-direction: column;
    
    align-items: center;

    flex: 1 1 auto;
    box-sizing: border-box;
    overflow-x: hidden;

    > div {
        margin-bottom: 0.5em;

        &:not(:first-child) {
            margin-top: 0.5em;
        }
    }
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = Page;
