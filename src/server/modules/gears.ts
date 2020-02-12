import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore no types
import authentication from 'feathers-authentication/client'
import hooks from 'feathers-hooks'

import io from 'socket.io-client'
import { ObjectId } from 'mongodb'

import { hasFile, writeFile } from './file-storage'
// import path from 'path'
import fetch from 'isomorphic-fetch'
import { Readable } from 'stream'
import esc from 'jsesc'

import {
    WebsiteApplication,
    GearsOptions,
    GearsClient,
    GearsService,
    GearsDocument,
    DownloadInstruction
} from '../types'

import { ReadStream } from 'fs-extra'
import { updatePageData } from '../middleware/page-data'

/***************************************************************/
// Module State
/***************************************************************/

let gearsOptions: GearsOptions | null = null
let gearsClient: GearsClient | null = null

/***************************************************************/
// Helper
/***************************************************************/

function getIn(obj: { [key: string]: object | number | boolean | string }, paths: string | string[]): unknown {

    paths = Array.isArray(paths) ? paths : [paths]

    const final = paths.length - 1

    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        const atFinal = i === final
        if (atFinal)
            return obj[path]

        if (typeof obj[path] !== 'object')
            return undefined

        obj = obj[path] as { [key: string]: object }
    }
}

async function ensureFile(data: { fileId: string, thumb?: string, meta?: boolean }): Promise<void> {

    const { fileId, thumb, meta } = data

    const query = thumb
        ? `?process=${thumb}`
        : meta
            ? '?meta=true'
            : ''

    const key = thumb
        ? fileId + '-thumb'
        : meta
            ? fileId + '-meta'
            : fileId

    try {
        if (!gearsOptions)
            throw new Error('Gears Options not resolved.')

        const has = await hasFile(key)
        if (has)
            return

        const res = await fetch(`${gearsOptions.host}/files/${fileId}${query}`)
        if (res.status !== 200)
            throw new Error(res.statusText)

        const contentType = res.headers.get('Content-Type') as string

        const ext = '.' + contentType
            .substr(contentType.indexOf('/') + 1)
            .replace('; charset=utf-8', '')
            .replace('+xml', '') // ew

        await writeFile(key, ext, res.body as unknown as ReadStream) // ew

        // Some files seem to be hanging on download. Just in case it's a memory
        // thing, i'm hacking in this delay between downloads to see if it resolves it
        await new Promise(resolve => setTimeout(resolve, 25))
    } catch (err) {
        console.error(`file ${fileId} could not be ensured: ${err.message}`)
    }
}

// So, it turns out, if you supply an id to feathers for mongodb, it wont auto-cast it
// to a ObjectId. It does cast all other queries to ObjectId, so if you create a bunch
// of objects with string ids, and then look for them with string ids, you wont find anything.

// I'm not complaining, though. I don't want to use string ids, anyway.
function castId(doc: { _id: string | ObjectId }): { _id: ObjectId } {

    doc._id = new ObjectId(doc._id)

    return doc as { _id: ObjectId }

}

/***************************************************************/
// Interface
/***************************************************************/

function service(name: string): GearsService | null {
    return gearsClient
        ? gearsClient.service(name) || null
        : null
}

async function login(): Promise<void> {

    if (!gearsClient || !gearsOptions)
        throw new Error('Gears not resolved')

    console.log('logging into gears...')

    await gearsClient.authenticate({
        type: 'local',
        ...gearsOptions.auth
    }).catch(err => {
        console.error('could not login to gears:', err.message)
    })

}

function sync(
    app: WebsiteApplication,
    from: GearsService,
    to: GearsService,
    ...downloads: DownloadInstruction[]
): void {

    const ensureFiles = async (doc: GearsDocument | void): Promise<void> => {

        if (!doc)
            return

        for (const instruction of downloads) {

            const { path, thumb, full, meta } = instruction
            const fileId = getIn(doc, path) as string | string[]
            const fileIds = Array.isArray(fileId)
                ? fileId
                : [fileId]

            for (const fileId of fileIds) {
                if (fileId && thumb)
                    await ensureFile({ fileId, thumb })

                if (fileId && meta)
                    await ensureFile({ fileId, meta })

                if (fileId && full)
                    await ensureFile({ fileId })
            }
        }
    }

    const populate = async (): Promise<void> => {

        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore no client typedef
        const name = from['path']

        console.log('populating', name)

        const docs = await from.find({})

        try {
            //remove all the local docs
            await to.remove(null)

            //fill all the local docs with data from gears
            const promises = docs
                .map(doc => to.create(castId(doc))
                    .catch(err => console.error('Error creating item:', err))
                )

            await Promise.all(promises)

            for (const doc of docs) if (doc)
                await ensureFiles(doc)

        } catch (err) {
            console.error('Error populating service', err)
        }

        await updatePageData(app)
        console.log('populated', name, docs.length)
    }

    const change = (res: GearsDocument): Promise<unknown> =>
        to.update(res._id, res)
            .then(ensureFiles)
            .then(() => updatePageData(app))
            .catch((err: Error) => console.error(err))

    const create = (res: GearsDocument): Promise<unknown> =>
        to.create(castId(res))
            .then(ensureFiles)
            .then(() => updatePageData(app))
            .catch((err: Error) => console.error(err))

    const remove = (res: GearsDocument): Promise<unknown> =>
        to.remove(res._id)
            .then(() => updatePageData(app))
            .catch((err: Error) => console.error(err))

    if (gearsClient)
        gearsClient.io.on('authenticated', populate)

    from.on('patched', change)
    from.on('updated', change)
    from.on('created', create)
    from.on('removed', remove)

}

/******************************************************************************/
// Setup
/******************************************************************************/

function initialize(this: WebsiteApplication): void {

    const app = this
    gearsOptions = app.get('gears') as GearsOptions

    const socket = io(gearsOptions.host)

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore no client typedef
    gearsClient = feathers()
        .configure(hooks())
        .configure(socketio(socket))
        .configure(authentication()) as unknown as GearsClient

    //Setup connection management
    gearsClient.io.on('reconnect', login)
    gearsClient.io.on('disconnect', () => console.log('disconnected from gears'))
    gearsClient.io.on('authenticated', () => console.log('logged in to gears'))

    const files = gearsClient.service('files')

    //Update metadata if we're tracking a file that has it
    files.on('patched', (doc: GearsDocument) => {

        const { _id, name, description, ext, mime, size } = doc

        const metaKey = _id + '-meta'

        hasFile(metaKey).then(has => {
            if (!has)
                return

            //Rather than ping gears again for metadata we already have, we'll rebi
            const data = JSON.stringify({ name, description, ext, mime, size })
            const escaped = esc(data, { quotes: 'double' })
            const stream = new Readable

            stream.push(`"${escaped}"`)
            stream.push(null)

            return writeFile(metaKey, '.json', stream as unknown as ReadStream)
        })
    })

    //begin the connection process
    login()
}

/***************************************************************/
// Exports
/***************************************************************/

export default initialize

export {
    service, login, sync
}