"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
/***************************************************************/
// Execute
/***************************************************************/
void async function serve() {
    const app = await app_1.default();
    const port = app.get('port');
    const server = app.listen(port, '0.0.0.0');
    server.on('listening', () => {
        console.log('website started, serving on port', port);
    });
}();
