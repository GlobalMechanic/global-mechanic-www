import HOST from './host'

/***************************************************************/
// Types
/***************************************************************/

interface FileMetaData {
    ext: string
}

/***************************************************************/
// Main
/***************************************************************/

// TODO MOVE ME
async function fetchFileMetaData(fileId: string): Promise<FileMetaData | null> {

    const URL = `${HOST}/file/${fileId}?meta=true`

    try {

        const resp = await fetch(URL)

        const json = await resp.json()

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
