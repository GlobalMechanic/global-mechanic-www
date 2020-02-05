import { ReactElement } from 'react'
import { ContentData } from '../../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface ContentProps {
    id?: string
    style?: object
    content: ContentData
    children?: ReactElement | string | null |
    (ReactElement | string | null)[]
}

/***************************************************************/
// Exports
/***************************************************************/

export {
    ContentProps
}