import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

/***************************************************************/
// Props
/***************************************************************/

interface MarkdownProps {
    children: string
}

/***************************************************************/
// Main
/***************************************************************/

const Markdown = styled((props: MarkdownProps) => {
    const { children, ...rest } = props
    return <ReactMarkdown source={children} {...rest} />
})`

    font-size: 1.5em;

    h1, h2, h3, h4, h5, h6, p, ul {
        margin: 0;
        
    }

    h1:first-child {
        font-size: 4.5em;
        overflow: hidden;
        letter-spacing: -1px;

        @media only screen and (max-width: 700px) {
            font-size: 3em;
        }

        margin-left: calc(
            env(safe-area-inset-left) + 0.06em
        );
    }

    p {
        margin-bottom: -0.5em;
        letter-spacing: 1px;
    }

    a {
        color: inherit;
    }

    b, strong {
        font-weight: bold;
    }
`

/***************************************************************/
// Exports
/***************************************************************/

export default Markdown