import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ContentData } from '../../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface ContentProps {
    content: ContentData
    children?: ReactElement | string | null | (ReactElement | string | null)[]
}


/***************************************************************/
// Main
/***************************************************************/

const Content = styled((props: ContentProps): ReactElement => {

    const { children, ...rest } = props

    return <div {...rest}>
        {children}
    </div>
})`
    width: 100vw;
`


/***************************************************************/
// Exports
/***************************************************************/

export default Content

export {
    ContentProps
}