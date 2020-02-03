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
const feathers_1 = __importStar(require("feathers"));
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
const feathers_configuration_1 = __importDefault(require("feathers-configuration"));
const feathers_hooks_1 = __importDefault(require("feathers-hooks"));
const feathers_rest_1 = __importDefault(require("feathers-rest"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
const express_history_api_fallback_1 = __importDefault(require("express-history-api-fallback"));
const file_storage_1 = __importDefault(require("./modules/file-storage"));
const gears_1 = __importDefault(require("./modules/gears"));
const middleware_1 = __importDefault(require("./middleware"));
const services_1 = __importDefault(require("./services"));
const mongodb_1 = require("mongodb");
/***************************************************************/
// Execute
/***************************************************************/
async function createApp() {
    const CONFIG_URL = path_1.default.resolve(__dirname, '../../');
    const app = feathers_1.default();
    app.configure(feathers_configuration_1.default(CONFIG_URL));
    const PUBLIC_URL = app.get('public');
    const MONGODB_URL = app.get('mongodb');
    const FAV_URL = path_1.default.resolve(__dirname, '../../favicon.png');
    app.db = await mongodb_1.MongoClient.connect(MONGODB_URL);
    app.use(compression_1.default())
        .use(cors_1.default())
        .use(body_parser_1.default.json())
        .use(body_parser_1.default.urlencoded({ extended: true }))
        .use(serve_favicon_1.default(FAV_URL))
        .configure(feathers_hooks_1.default())
        .configure(feathers_rest_1.default())
        .configure(file_storage_1.default)
        .configure(gears_1.default)
        .configure(services_1.default)
        .configure(middleware_1.default)
        .use('/', feathers_1.static(PUBLIC_URL))
        .use(express_history_api_fallback_1.default('index.html', { root: PUBLIC_URL }));
    return app;
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = createApp;
