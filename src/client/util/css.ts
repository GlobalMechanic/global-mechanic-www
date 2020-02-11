import { css, FlattenSimpleInterpolation } from 'styled-components'

/***************************************************************/
// Constants
/***************************************************************/

const TITLE_FONT_NAME = '"Chronicle Cond A", "Chronicle Cond B"'
const BODY_FONT_NAME = '"Whitney Narrow A", "Whitney Narrow B"'

/***************************************************************/
// Exports
/***************************************************************/

export const titleFont = css`
    font-family: ${TITLE_FONT_NAME};
    font-style: normal;
    font-weight: 700;
`

export const titleFontItalic = css`
    font-family: ${TITLE_FONT_NAME};
    font-style: italic;
    font-weight: 700;
`

export const bodyFont = css`
    font-family: ${BODY_FONT_NAME};
    font-style: normal;
    font-weight: 300;
`

export const bodyFontItalic = css`
    font-family: ${BODY_FONT_NAME};
    font-style: italic;
    font-weight: 300;
`

export const bodyFontBold = css`
    font-family: ${BODY_FONT_NAME};
    font-style: normal;
    font-weight: 600;
`

export const bodyFontBoldItalic = css`
    font-family: ${BODY_FONT_NAME};
    font-style: italic;
    font-weight: 600;
`

export const hidePlayButton = (tag = '*'): FlattenSimpleInterpolation => css`

    ${tag}::-webkit-media-controls {
        -webkit-appearance: none;
        display: none;
    }

    ${tag}::-webkit-media-controls-panel {
        -webkit-appearance: none;
        display: none;
    }

    ${tag}::-webkit-media-controls-play-button {
        -webkit-appearance: none;
        display: none;
    }

    ${tag}::-webkit-media-controls-start-playback-button {
        -webkit-appearance: none;
        display: none;
    }

`

export const content = css`
    box-sizing: border-box;
    align-self: center;
    width: 100%;
`