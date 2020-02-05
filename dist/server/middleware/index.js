"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feathers_1 = require("feathers");
const handler_1 = __importDefault(require("feathers-errors/handler"));
const file_serve_1 = __importDefault(require("./file-serve"));
const page_data_1 = __importDefault(require("./page-data"));
const react_router_template_1 = __importDefault(require("./react-router-template"));
const logging_1 = __importDefault(require("./logging"));
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
const express_history_api_fallback_1 = __importDefault(require("express-history-api-fallback"));
const legacy_signature_redirect_1 = __importDefault(require("./legacy-signature-redirect"));
/***************************************************************/
// Export
/***************************************************************/
function default_1() {
    const app = this;
    const PUBLIC_URL = app.get('public');
    app.get('/assets/gm-2017-signature.png', legacy_signature_redirect_1.default(app));
    app.get('/file/:key', file_serve_1.default());
    app.get('/data', page_data_1.default);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(react_router_template_1.default(app));
    app.use('/', feathers_1.static(PUBLIC_URL));
    app.use(express_history_api_fallback_1.default('index.html', { root: PUBLIC_URL }));
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(logging_1.default());
    app.use(handler_1.default());
}
exports.default = default_1;
