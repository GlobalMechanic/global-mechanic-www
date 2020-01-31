import React, { ReactElement, useEffect } from 'react'
import styled, { DefaultTheme, withTheme } from 'styled-components'
import { PageData } from '../../root-components/page-data-provider'
import { ThemeType } from '../../util/theme'

/***************************************************************/
// Props
/***************************************************************/

interface PageProps {

    page: PageData

    children?: ReactElement | null | (ReactElement | null)[]

    setThemeType: (themeType: ThemeType) => void

    theme: DefaultTheme

}

const Title = styled.h1`
    font-size: min(10em, max(4em, 20vw));
    margin: 0;
`

/***************************************************************/
// Main
/***************************************************************/

const Page = styled(withTheme((props: PageProps): ReactElement => {

    const { page, children, setThemeType, theme, ...rest } = props

    useEffect(() => {
        if (theme.name !== page.theme)
            setThemeType(page.theme)
    }, [theme.name])

    const title = typeof page.title === 'string'
        ? page.title
        : page.name

    return <div {...rest}>

        {title
            ? <Title>{title}</Title>
            : null
        }

        {children}

    </div>
}))`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    flex: 1 1 auto;
    box-sizing: border-box;
    overflow-x: hidden;
`


/***************************************************************/
// Exports
/***************************************************************/

export default Page

export {
    PageProps
}