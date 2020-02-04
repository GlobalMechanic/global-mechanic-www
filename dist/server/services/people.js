"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no typedef
const feathers_mongodb_1 = __importDefault(require("feathers-mongodb"));
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore disable not included in feathers-hooks typedef
const feathers_hooks_1 = require("feathers-hooks");
const gears_1 = require("../modules/gears");
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
        Model: app.db.collection('users')
    };
    app.use('/people', feathers_mongodb_1.default(options));
    const people = app.service('people');
    const users = gears_1.service('users');
    people.before(beforeHooks);
    const staff = {
        path: ['staffData', 'portrait'],
        thumb: '480',
        full: false
    };
    const director = {
        path: ['directorData', 'portrait'],
        thumb: '480',
        full: false
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore 
    gears_1.sync(app, users, people, staff, director);
}
exports.default = default_1;
