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

function getLocalUrl(key) {
  return fs.readdir(LOCAL_FILES)
    .then(files => {
      const file = files.filter(file => key === path.basename(file, path.extname(file)))[0]
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

export function hasFile(key) {

  if (!s3)
    return getLocalUrl(key)
      .then(url => !!url)

  const params = { Bucket: bucket, Key: key }

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
  // .catch(err => log.error('Error checking file from s3', err))

}

export function writeFile(key, ext, read) {

  if (!s3) {
    const write = fs.createWriteStream(path.join(LOCAL_FILES, `${key}${ext}`))
    return new Promise((resolve, reject) => {
      read.pipe(write)
      read.on('end', resolve)
      read.on('error', reject)
    })
  }

  const upload = new PassThrough()
  const params = { Bucket: bucket, Key: key, Body: upload, Metadata: { ext } }

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err)
        reject(err)
      else
        resolve(data)
    })
    log('writing file to s3:',key)
    read.pipe(upload)
  })
  // .catch(err => log.error('Error writing file from s3', err))

}

export function readFile(key) {

  if (!s3)
    return getLocalUrl(key)
      .then(url => url ? {
        stream: fs.createReadStream(url),
        ext: path.extname(url)
      } : null)

  const params = { Bucket: bucket, Key: key }

  return new Promise((resolve, reject) => {

    s3.headObject(params, (err, data) => {
      if (err)
        return reject(err)

      const { ext } = data.Metadata
      const stream = s3.getObject(params).createReadStream()
      log('reading file from s3', key)

      resolve({ stream, ext })

    })
  })
  // .catch(err => log.error('Error reading file from s3', err))

}
