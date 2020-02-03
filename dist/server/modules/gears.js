"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("feathers/client"));
const client_2 = __importDefault(require("feathers-socketio/client"));
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
const client_3 = __importDefault(require("feathers-authentication/client"));
const feathers_hooks_1 = __importDefault(require("feathers-hooks"));
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const mongodb_1 = require("mongodb");
const file_storage_1 = require("./file-storage");
// import path from 'path'
const promise_queue_1 = __importDefault(require("promise-queue"));
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const stream_1 = require("stream");
const jsesc_1 = __importDefault(require("jsesc"));
/***************************************************************/
// Module State
/***************************************************************/
let gearsOptions = null;
let gearsClient = null;
const queue = new promise_queue_1.default(4, Infinity);
/***************************************************************/
// Helper
/***************************************************************/
function getIn(obj, paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    const final = paths.length - 1;
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const atFinal = i === final;
        if (atFinal)
            return obj[path];
        if (typeof obj[path] !== 'object')
            return undefined;
        obj = obj[path];
    }
}
function ensureFile(data) {
    const { fileId, thumb, meta } = data;
    const query = thumb
        ? `?process=${thumb}`
        : meta
            ? '?meta=true'
            : '';
    const key = thumb
        ? fileId + '-thumb'
        : meta
            ? fileId + '-meta'
            : fileId;
    //check if the file exists
    queue.add(async () => {
        if (!gearsOptions)
            throw new Error('Gears Options not resolved.');
        const has = await file_storage_1.hasFile(key);
        if (has)
            return;
        const res = await isomorphic_fetch_1.default(`${gearsOptions.host}/files/${fileId}${query}`);
        if (res.status !== 200)
            throw new Error(res.statusText);
        const contentType = res.headers.get('Content-Type');
        const ext = '.' + contentType
            .substr(contentType.indexOf('/') + 1)
            .replace('; charset=utf-8', '')
            .replace('+xml', ''); // ew
        return file_storage_1.writeFile(key, ext, res.body); // ew
    });
}
// So, it turns out, if you supply an id to feathers for mongodb, it wont auto-cast it
// to a ObjectId. It does cast all other queries to ObjectId, so if you create a bunch
// of objects with string ids, and then look for them with string ids, you wont find anything.
// I'm not complaining, though. I don't want to use string ids, anyway.
function castId(doc) {
    doc._id = new mongodb_1.ObjectId(doc._id);
    return doc;
}
/***************************************************************/
// Interface
/***************************************************************/
function service(name) {
    return gearsClient
        ? gearsClient.service(name) || null
        : null;
}
exports.service = service;
async function login() {
    if (!gearsClient || !gearsOptions)
        throw new Error('Gears not resolved');
    console.log('logging into gears...');
    await gearsClient.authenticate({
        type: 'local',
        ...gearsOptions.auth
    }).catch(err => {
        console.error('could not login to gears:', err.message);
    });
}
exports.login = login;
function sync(from, to, ...downloads) {
    const ensureFiles = (doc) => {
        if (!doc)
            return;
        downloads.forEach(instruction => {
            const { path, thumb, full, meta } = instruction;
            const fileId = getIn(doc, path);
            const fileIds = Array.isArray(fileId)
                ? fileId
                : [fileId];
            fileIds.forEach(fileId => {
                if (fileId && thumb)
                    ensureFile({ fileId, thumb });
                if (fileId && meta)
                    ensureFile({ fileId, meta });
                if (fileId && full)
                    ensureFile({ fileId });
            });
        });
    };
    const populate = () => {
        from
            //find all the docs from gears
            .find({})
            .then(docs => to
            //remove all the local docs
            .remove(null)
            .then(() => {
            //fill all the local docs with data from gears
            const promises = docs
                .map(doc => to.create(castId(doc))
                .catch(err => console.error('Error creating item:', err)));
            return Promise.all(promises);
        })
            //download any files associated with the docs created
            .then(docs => {
            for (const doc of docs)
                if (doc)
                    ensureFiles(doc);
        }))
            .catch(err => console.error('Error populating service', err));
    };
    const change = (res) => to.update(res._id, res)
        .then(ensureFiles)
        .catch((err) => console.error(err));
    const create = (res) => to.create(castId(res))
        .then(ensureFiles)
        .catch((err) => console.error(err));
    const remove = (res) => to.remove(res._id)
        .catch((err) => console.error(err));
    if (gearsClient)
        gearsClient.io.on('authenticated', populate);
    from.on('patched', change);
    from.on('updated', change);
    from.on('created', create);
    from.on('removed', remove);
}
exports.sync = sync;
/******************************************************************************/
// Setup
/******************************************************************************/
function initialize() {
    const app = this;
    gearsOptions = app.get('gears');
    const socket = socket_io_client_1.default(gearsOptions.host);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore no client typedef
    gearsClient = client_1.default()
        .configure(feathers_hooks_1.default())
        .configure(client_2.default(socket))
        .configure(client_3.default());
    //Setup connection management
    gearsClient.io.on('reconnect', login);
    gearsClient.io.on('disconnect', () => console.log('disconnected from gears'));
    gearsClient.io.on('authenticated', () => console.log('logged in to gears'));
    const files = gearsClient.service('files');
    //Update metadata if we're tracking a file that has it
    files.on('patched', (doc) => {
        const { _id, name, description, ext, mime, size } = doc;
        const metaKey = _id + '-meta';
        file_storage_1.hasFile(metaKey)
            .then(has => {
            if (!has)
                return;
            //Rather than ping gears again for metadata we already have, we'll rebi
            const data = JSON.stringify({ name, description, ext, mime, size });
            const escaped = jsesc_1.default(data, { quotes: 'double' });
            const stream = new stream_1.Readable;
            stream.push(`"${escaped}"`);
            stream.push(null);
            return file_storage_1.writeFile(metaKey, '.json', stream);
        });
    });
    //begin the connection process
    login();
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = initialize;
