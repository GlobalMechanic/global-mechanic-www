import { WebsiteApplication } from '../app'
import { BucketeerOptions, FileData } from '../types'
import { S3 } from 'aws-sdk'

import fs, { ReadStream } from 'fs-extra'

import path from 'path'

import { PassThrough } from 'stream'

/***************************************************************/
// Constants
/***************************************************************/

const LOCAL_FILES = path.resolve(__dirname, '../../../db/files')

/***************************************************************/
// Module State
/***************************************************************/

let s3: S3 | null = null
let bucket: string | null = null

/***************************************************************/
// Setup
/***************************************************************/

function initialize(this: WebsiteApplication): void {

    const app = this

    const bucketeer = app.get('bucketeer') as BucketeerOptions | null
    if (bucketeer) {
        const { name, ...config } = bucketeer

        bucket = name
        s3 = new S3(config)
    }
}

/***************************************************************/
// Helper
/***************************************************************/

function parseRange(str: string, size: number): { start?: number, end?: number } {

    const range = str.replace(/bytes=/, '')
        .split('-')
        .map(word => parseInt(word, 10))

    const start: number | undefined = range[0]
    let end: number | undefined = range[1]

    if (!isFinite(start))
        return {}

    if (!isFinite(end))
        end = size - 1

    return {
        start,
        end
    }
}

async function getLocalUrl(key: string): Promise<string | null> {

    const files = await fs.readdir(LOCAL_FILES)

    const file = files.find(file => key === path.basename(file, path.extname(file)))
    return file
        ? path.join(LOCAL_FILES, file)
        : null
}

/***************************************************************/
// Interface
/***************************************************************/

function hasFile(key: string): Promise<boolean> {

    return s3
        ? new Promise(resolve => {

            const params = {
                Bucket: bucket as string,
                Key: key
            };

            // eslint-disable-next-line no-extra-parens
            (s3 as S3).headObject(params, err => {
                if (err && (err.code !== 'NoSuchKey' && err.code !== 'NotFound'))
                    console.error('Error checking file from s3', err)

                if (err)
                    resolve(false)
                else
                    resolve(true)
            })
        })

        : getLocalUrl(key).then(url => !!url)

}

function writeFile(key: string, ext: string, read: ReadStream): Promise<void> {

    console.log('streaming file from gears', key, ext)

    if (!s3) {
        const write = fs.createWriteStream(
            path.join(LOCAL_FILES, `${key}${ext}`)
        )

        return new Promise((resolve, reject) => {
            read.pipe(write)
            read.on('end', resolve)
            read.on('error', reject)
        })
    }

    return new Promise((resolve, reject) => {

        const upload = new PassThrough()

        const params = {
            Bucket: bucket as string,
            Key: key,
            Body: upload,
            Metadata: { ext }
        };

        // eslint-disable-next-line no-extra-parens
        (s3 as S3).upload(params, (err: Error) => {
            if (err)
                reject(err)
            else
                resolve()
        })

        console.log('writing file to s3:', key)

        read.pipe(upload)
    })

}

async function readFile(key: string, rangestr: string): Promise<null | FileData> {

    if (!s3) {
        const url = await getLocalUrl(key)

        if (url === null)
            return null

        const { size } = await fs.stat(url)

        const options = parseRange(rangestr, size)

        return {
            stream: fs.createReadStream(url, options),
            size, ...options,
            ext: path.extname(url)
        }
    }

    return new Promise(resolve => {

        const params = {
            Bucket: bucket as string,
            Range: '',
            Key: key
        };

        // eslint-disable-next-line no-extra-parens
        (s3 as S3).headObject(params, (err: Error, data: S3.HeadObjectOutput) => {

            if (err) {
                console.error('Error reading file from s3', err)
                resolve()
            }

            const size = parseInt(data.ContentLength as unknown as string, 10)
            const options = parseRange(rangestr, size)
            if (options.start && options.end)
                params.Range = rangestr

            const ext = data.Metadata && data.Metadata.ext

            const stream = // eslint-disable-next-line no-extra-parens
                (s3 as S3)
                    .getObject(params)
                    .createReadStream()

            console.log('reading file from s3', key)

            resolve({ stream, ext, ...options, size })

        })
    })

}

/***************************************************************/
// Exports
/***************************************************************/

export default initialize

export {
    readFile,
    writeFile,
    hasFile
}