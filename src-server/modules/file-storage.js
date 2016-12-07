import fs from 'fs-promise'
import { S3 } from 'aws-sdk'
import { PassThrough } from 'stream'

import path from 'path'

/******************************************************************************/
// Data
/******************************************************************************/

let s3 = null
let bucket = null

const LOCAL_FILES = path.resolve(__dirname, '../../storage/files')

/******************************************************************************/
// Helper
/******************************************************************************/

function getLocalUrl(id) {
  return fs.readdir(LOCAL_FILES)
    .then(files => {
      const file = files.filter(file => file.includes(id))[0]
      return file ? path.join(LOCAL_FILES, file) : null
    })
}

/******************************************************************************/
// Init
/******************************************************************************/

export default function initialize() {

  const app = this
  const bucketeer = app.get('bucketeer')

  if (bucketeer) {
    const { name, ...other } = bucketeer
    bucket = name
    s3 = new S3(other)
  }

}

/******************************************************************************/
// API
/******************************************************************************/

export function hasFile(id) {

  if (!s3)
    return getLocalUrl(id)
      .then(url => !!url)

  const params = { Bucket: bucket, Key: id }

  return new Promise((resolve, reject) => {
    s3.headObject(params, err => {
      if (err && (err.code === 'NoSuchKey' || err.code === 'NotFound'))
        return resolve(false)

      else if (err)
        return reject(err)

      else
        resolve(true)
    })
  })

}

export function writeFile(id, ext, read) {

  if (!s3) {
    const write = fs.createWriteStream(path.join(LOCAL_FILES, `${id}.${ext}`))
    return new Promise((resolve, reject) => {
      read.pipe(write)
      read.on('end', resolve)
      read.on('error', reject)
    })
  }

  const upload = new PassThrough()
  const params = { Bucket: bucket, Key: id, Body: upload, Metadata: { ext } }

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err)
        reject(err)
      else
        resolve(data)
    })
    log('writing file to s3:',id)
    read.pipe(upload)
  })
}

export function readFile(id) {

  if (!s3)
    return getLocalUrl(id)
      .then(url => url ? {
        stream: fs.createReadStream(url),
        ext: path.extname(url)
      } : null)

  const params = { Bucket: bucket, Key: id }

  return new Promise((resolve, reject) => {

    s3.headObject(params, (err, data) => {
      if (err)
        return reject(err)

      const { ext } = data.Metadata
      const stream = s3.getObject(params).createReadStream()
      log('reading file from s3', id)

      resolve({ stream, ext })

    })
  })

}
