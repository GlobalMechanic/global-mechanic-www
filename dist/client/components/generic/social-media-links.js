"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const icon_1 = __importDefault(require("./icon"));
const static_asset_context_1 = require("../../root-components/static-asset-context");
/***************************************************************/
// Components
/***************************************************************/
const SocialMediaLink = styled_components_1.default((props) => {
    const { to, ...rest } = props;
    return react_1.default.createElement(icon_1.default, Object.assign({ as: 'a', href: to, target: '_blank' }, rest));
}) `
    font-size: 1.5em;
    margin-left: 0.125em;
`;
const SocialMediaLinks = styled_components_1.default((props) => {
    const staticAssets = static_asset_context_1.useStaticAssets();
    return react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement(SocialMediaLink, { image: staticAssets.insta, to: 'https://www.instagram.com/globalmechanic/?hl=en' }),
        react_1.default.createElement(SocialMediaLink, { image: staticAssets.facebook, to: 'https://www.facebook.com/GlobalMechanicMedia/' }),
        react_1.default.createElement(SocialMediaLink, { image: staticAssets.vimeo, to: 'https://vimeo.com/globalmechanicmedia' }),
        react_1.default.createElement(SocialMediaLink, { image: staticAssets.twitter, to: 'https://twitter.com/globalmechanic?lang=en' }));
}) `

    display: flex;
    position: fixed;
    bottom: 1em;
    left: 1em;
    
    align-items: baseline;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = SocialMediaLinks;
