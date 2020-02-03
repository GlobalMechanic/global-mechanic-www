"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_storage_1 = require("../modules/file-storage");
const mime_1 = __importDefault(require("mime"));
/***************************************************************/
// Constants
/***************************************************************/
exports.ONE_YEAR = 31557600;
/***************************************************************/
// Helper
/***************************************************************/
function isFiniteNumber(input) {
    return typeof input === 'number' && !Number.isNaN(input) && isFinite(input);
}
/***************************************************************/
// Main
/***************************************************************/
function default_1() {
    return async function (req, res, next) {
        const { key } = req.params;
        const { download } = req.query;
        const range = req.headers.range;
        const result = await file_storage_1.readFile(key, range || '');
        if (!result)
            return next(new Error('no file with key: ' + key));
        const { stream, ext, start, end, size } = result;
        if (ext === '.json') {
            let data = '';
            stream.on('data', chunk => data += chunk.toString());
            stream.on('end', () => {
                res.setHeader('Content-Type', 'application/json');
                res.json(JSON.parse(data));
            });
        }
        else {
            const dot = ext && ext.includes('.') ? '' : '.';
            const disposition = download ? 'attachment;' : 'inline;';
            const fileName = download ? download : key + dot + ext;
            const mimeType = mime_1.default.getType(fileName) || 'application/octet-stream';
            res.setHeader('Content-Disposition', `${disposition}; filename=${fileName}`);
            res.setHeader('Content-Type', mimeType);
            res.setHeader('Cache-Control', `public, max-age=${exports.ONE_YEAR}`);
            if (isFiniteNumber(start) && isFiniteNumber(end) && isFiniteNumber(size)) {
                // eslint-disable-next-line no-extra-parens
                const chunk = (end + 1) - start;
                console.log(`serving ${fileName} bytes ${start} - ${end} = ${chunk}`);
                res.status(206);
                res.setHeader('Content-Range', `bytes ${start} - ${end} / ${size}`);
                res.setHeader('Accept-Ranges', 'bytes');
                res.setHeader('Content-Length', chunk);
            }
            else
                console.log(`serving ${fileName}`);
            stream.pipe(res);
        }
    };
}
exports.default = default_1;
