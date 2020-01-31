"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const server_1 = require("react-dom/server");
/******************************************************************************/
// Module State
/******************************************************************************/
let template;
/***************************************************************/
// Helper
/***************************************************************/
function renderTemplate(reactComponent) {
    const reactMarkup = server_1.renderToString(reactComponent);
    return `${template[0]}<main>${reactMarkup}</main>${template[1]}`;
}
/***************************************************************/
// Setup
/***************************************************************/
function default_1(app) {
    // Create Template
    const publicURL = app.get('public');
    const indexHtmlURL = path_1.default.join(publicURL, 'index.html');
    try {
        template = fs_1.default.readFileSync(indexHtmlURL, 'utf-8').split('<main/>');
        console.error('server side rendering not yet setup', renderTemplate.name, 'is not yet used');
    }
    catch (err) {
        console.error('could not create index.html template:', err.message); // TODO: server should terminate
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return (_req, _res, next) => next();
}
exports.default = default_1;
