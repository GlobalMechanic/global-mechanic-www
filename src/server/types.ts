import feathers from 'feathers'
import { Db as MongoDB } from 'mongodb'
import { Stream } from 'stream'

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

interface GearsClient {
    
    io: SocketIOClient.Socket

    service (name: string): object

    authenticate (options: {
        type: string
        email: string
        password: string
    }): Promise<void>

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
    FileData
}