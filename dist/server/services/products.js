"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no typedef
const feathers_mongodb_1 = __importDefault(require("feathers-mongodb"));
const gears_1 = require("../modules/gears");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
const feathers_hooks_1 = require("feathers-hooks");
/******************************************************************************/
// Hooks
/******************************************************************************/
const disableExternal = feathers_hooks_1.disable('external');
/***************************************************************/
// Hook Maps
/***************************************************************/
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
        Model: app.db.collection('products')
    };
    app.use('/products', feathers_mongodb_1.default(options));
    const webProducts = app.service('products');
    const products = gears_1.service('products');
    webProducts.before(beforeHooks);
    const portrait = {
        path: 'portrait',
        thumb: '640x360',
        full: false
    };
    const images = {
        path: 'images',
        thumb: '400',
        full: true
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore 
    gears_1.sync(app, products, webProducts, portrait, images);
}
exports.default = default_1;
