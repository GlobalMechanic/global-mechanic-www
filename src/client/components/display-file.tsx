import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'

import fetchFileMetaData, { FileMetaData } from '../util/fetch-file-metadata'

/***************************************************************/
// Props 
/***************************************************************/

interface DisplayFileProps {
    file: string
}

/***************************************************************/
// Hooks
/***************************************************************/

const useFileMetadata = (fileId: string): FileMetaData | null => {

    const [metaData, setMetaData] = useState<FileMetaData | null>(null)

    useEffect(() => {

        if (fileId)
            fetchFileMetaData(fileId).then(setMetaData)
        else if (metaData)
            setMetaData(null)

    }, [fileId])

    return metaData
}


/***************************************************************/
// Main
/***************************************************************/

const DisplayFile = styled((props: DisplayFileProps): ReactElement => {

    const { file, ...rest } = props

    const metaData = useFileMetadata(file)

    return <div {...rest}>File {file} is a {metaData ? metaData.ext : 'unknown'}</div>

})`

`

/***************************************************************/
// Exports
/***************************************************************/

export default DisplayFile