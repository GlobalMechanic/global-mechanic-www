"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = __importDefault(require("feathers-errors/handler"));
const file_serve_1 = __importDefault(require("./file-serve"));
const react_router_template_1 = __importDefault(require("./react-router-template"));
const logging_1 = __importDefault(require("./logging"));
/***************************************************************/
// Export
/***************************************************************/
function default_1() {
    const app = this;
    app.get('/file/:key', file_serve_1.default());
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(react_router_template_1.default(app));
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(logging_1.default());
    app.use(handler_1.default());
}
exports.default = default_1;
