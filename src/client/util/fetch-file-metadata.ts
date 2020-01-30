import HOST from './host'

/***************************************************************/
// Types
/***************************************************************/

interface FileMetaData {
    name: string
    ext: string
    mime: string
    size: number
    description?: string
}

/***************************************************************/
// Main
/***************************************************************/

// TODO MOVE ME
async function fetchFileMetaData(fileId: string): Promise<FileMetaData | null> {

    const URL = `${HOST}/file/${fileId}-meta`

    try {

        const resp = await fetch(URL)

        let json = await resp.json()

        // HACK 
        // needs to be parsed twice, for some reason. 
        // Something is in src/server/middleware/file-serve.ts 
        json = JSON.parse(json)

        return json as FileMetaData

    } catch (err) {

        return null
    }
}

/***************************************************************/
// Exports
/***************************************************************/

export default fetchFileMetaData

export {
    FileMetaData
}
