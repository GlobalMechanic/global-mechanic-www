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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function websiteFilter(hook, next) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore result and params dont exist on hook??
    const { result, params } = hook;
    // no filtering on internal calls
    if (!params.provider)
        return next();
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore result and params dont exist on hook??
    hook.result = result
        // only show if the person is supposed to be on the website
        .filter((person) => // eslint-disable-line @typescript-eslint/no-explicit-any
     person.staffData &&
        person.staffData.showOnWebsite ||
        person.directorData &&
            person.directorData.showOnWebsite)
        // stripped to necessary fields
        .map((person) => {
        const { _id, name, role, staffData, directorData } = person;
        const { essay = '', portrait = null, showcase = null } = directorData.showOnWebsite
            ? directorData
            : staffData;
        return {
            _id,
            name,
            role,
            essay,
            portrait,
            showcase
        };
    });
    next(null, hook);
}
const beforeHooks = {
    get: disableExternal,
    create: disableExternal,
    update: disableExternal,
    patch: disableExternal
};
const afterHooks = {
    find: websiteFilter
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore no idea whats going on here, but the typedefs for old feathers don't seem to be fully formed
    people.after(afterHooks);
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
    gears_1.sync(users, people, staff, director);
}
exports.default = default_1;
