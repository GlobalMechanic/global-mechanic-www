"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("feathers/client"));
const client_2 = __importDefault(require("feathers-rest/client"));
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const host_1 = require("../../util/host");
/***************************************************************/
// Constants
/***************************************************************/
async function fetchServiceData() {
    const config = client_2.default(host_1.HOST).fetch(isomorphic_fetch_1.default);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore old feathers client has typing bugs
    const client = client_1.default().configure(config);
    const [people, products, showcases] = await Promise.all([
        client.service('people').find(),
        client.service('products').find(),
        client.service('showcases').find(),
    ]);
    return {
        people,
        products,
        showcases
    };
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = fetchServiceData;
