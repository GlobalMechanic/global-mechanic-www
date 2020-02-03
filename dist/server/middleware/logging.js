"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************/
// Exports
/***************************************************************/
function default_1() {
    return function (error, req, _res, next) {
        if (error) {
            const message = `${error.code ? `(${error.code}) ` : ''}Route: ${req.url} - ${error.message}`;
            if (error.code === 404)
                console.log(message);
            else {
                console.error(message);
                console.error(error.stack);
            }
        }
        next(error);
    };
}
exports.default = default_1;
