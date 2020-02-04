"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
const feathers_mongodb_1 = __importDefault(require("feathers-mongodb"));
const gears_1 = require("../modules/gears");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
const feathers_hooks_1 = require("feathers-hooks");
/******************************************************************************/
// Hooks
/******************************************************************************/
const disableExternal = feathers_hooks_1.disable('external');
const beforeHooks = {
    get: disableExternal,
    create: disableExternal,
    update: disableExternal,
    find: disableExternal,
    patch: disableExternal
};
/******************************************************************************/
// Initialize
/******************************************************************************/
function default_1() {
    const app = this;
    if (!app.db)
        return;
    const options = {
        Model: app.db.collection('showcases')
    };
    app.use('/showcases', feathers_mongodb_1.default(options));
    const webShowcases = app.service('showcases');
    const showcases = gears_1.service('showcases');
    webShowcases.before(beforeHooks);
    const files = {
        path: 'files',
        thumb: '360',
        full: true,
        meta: true
    };
    const portrait = {
        path: 'portrait',
        thumb: '640',
        full: false
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    gears_1.sync(app, showcases, webShowcases, portrait, files);
}
exports.default = default_1;
