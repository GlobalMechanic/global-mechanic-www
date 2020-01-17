import feathers from 'feathers'
import { Db as MongoDB } from 'mongodb'
import { Stream } from 'stream'
import { ObjectId } from 'mongodb'

/***************************************************************/
// Types
/***************************************************************/

interface WebsiteApplication extends feathers.Application {
    db?: MongoDB | undefined
}

interface BucketeerOptions {
    name: string
    accessKeyId: string
    secretAccessKey: string
    region: string
}

interface GearsOptions {
    auth: {
        email: string
        password: string
    }
    host: string
}

interface DownloadInstruction {
    thumb: string
    path: string
    full: boolean
    meta: boolean
}

interface GearsService {

    find(options: {}): Promise<GearsDocument[]>

    create(options: {}): Promise<GearsDocument>

    remove(id: ObjectId | string | null, options?: object | null): Promise<GearsDocument>

    update(id: ObjectId | string, options?: {}): Promise<GearsDocument>

    on(event: string, callback: Function): void

}

interface GearsClient {

    io: SocketIOClient.Socket

    service(name: string): GearsService

    authenticate(options: {
        type: string
        email: string
        password: string
    }): Promise<void>

}

interface GearsDocument {
    _id: string | ObjectId
    [key: string]: object | string | boolean | number
}

interface FileData {
    stream: Stream
    ext?: string
    size: number
    start?: number
    end?: number
}

/***************************************************************/
// Exports
/***************************************************************/

export {
    WebsiteApplication,
    BucketeerOptions,

    GearsOptions,
    GearsClient,
    GearsService,
    GearsDocument,

    DownloadInstruction,
    FileData
}