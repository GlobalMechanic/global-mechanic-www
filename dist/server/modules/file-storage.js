"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const stream_1 = require("stream");
/***************************************************************/
// Constants
/***************************************************************/
const LOCAL_FILES = path_1.default.resolve(__dirname, '../../../db/files');
/***************************************************************/
// Module State
/***************************************************************/
let s3 = null;
let bucket = null;
/***************************************************************/
// Setup
/***************************************************************/
function initialize() {
    const app = this;
    const bucketeer = app.get('bucketeer');
    if (bucketeer) {
        const { name, ...config } = bucketeer;
        bucket = name;
        s3 = new aws_sdk_1.S3(config);
    }
}
/***************************************************************/
// Helper
/***************************************************************/
function parseRange(str, size) {
    const range = str.replace(/bytes=/, '')
        .split('-')
        .map(word => parseInt(word, 10));
    const start = range[0];
    let end = range[1];
    if (!isFinite(start))
        return {};
    if (!isFinite(end))
        end = size - 1;
    return {
        start,
        end
    };
}
async function getLocalUrl(key) {
    const files = await fs_extra_1.default.readdir(LOCAL_FILES);
    const file = files.find(file => key === path_1.default.basename(file, path_1.default.extname(file)));
    return file
        ? path_1.default.join(LOCAL_FILES, file)
        : null;
}
/***************************************************************/
// Interface
/***************************************************************/
function hasFile(key) {
    return s3
        ? new Promise(resolve => {
            const params = {
                Bucket: bucket,
                Key: key
            };
            // eslint-disable-next-line no-extra-parens
            s3.headObject(params, err => {
                if (err && (err.code !== 'NoSuchKey' && err.code !== 'NotFound'))
                    console.error('Error checking file from s3', err);
                if (err)
                    resolve(false);
                else
                    resolve(true);
            });
        })
        : getLocalUrl(key).then(url => !!url);
}
exports.hasFile = hasFile;
function writeFile(key, ext, read) {
    console.log('streaming file from gears', key, ext);
    if (!s3) {
        const write = fs_extra_1.default.createWriteStream(path_1.default.join(LOCAL_FILES, `${key}${ext}`));
        return new Promise((resolve, reject) => {
            read.pipe(write);
            read.on('end', resolve);
            read.on('error', reject);
        });
    }
    return new Promise((resolve, reject) => {
        const upload = new stream_1.PassThrough();
        const params = {
            Bucket: bucket,
            Key: key,
            Body: upload,
            Metadata: { ext }
        };
        // eslint-disable-next-line no-extra-parens
        s3.upload(params, (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
        console.log('writing file to s3:', key);
        read.pipe(upload);
    });
}
exports.writeFile = writeFile;
async function readFile(key, rangestr) {
    if (!s3) {
        const url = await getLocalUrl(key);
        if (url === null)
            return null;
        const { size } = await fs_extra_1.default.stat(url);
        const options = parseRange(rangestr, size);
        return {
            stream: fs_extra_1.default.createReadStream(url, options),
            size, ...options,
            ext: path_1.default.extname(url)
        };
    }
    return new Promise(resolve => {
        const params = {
            Bucket: bucket,
            Range: '',
            Key: key
        };
        // eslint-disable-next-line no-extra-parens
        s3.headObject(params, (err, data) => {
            if (err) {
                console.error('Error reading file from s3', err);
                resolve();
            }
            const size = parseInt(data.ContentLength, 10);
            const options = parseRange(rangestr, size);
            if (options.start && options.end)
                params.Range = rangestr;
            const ext = data.Metadata && data.Metadata.ext;
            const stream = // eslint-disable-next-line no-extra-parens
             s3
                .getObject(params)
                .createReadStream();
            console.log('reading file from s3', key);
            resolve({ stream, ext, ...options, size });
        });
    });
}
exports.readFile = readFile;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = initialize;
