"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_1 = __importDefault(require("./people"));
const products_1 = __importDefault(require("./products"));
const showcases_1 = __importDefault(require("./showcases"));
/***************************************************************/
// Exports
/***************************************************************/
function default_1() {
    const app = this;
    app.configure(people_1.default);
    app.configure(products_1.default);
    app.configure(showcases_1.default);
}
exports.default = default_1;
