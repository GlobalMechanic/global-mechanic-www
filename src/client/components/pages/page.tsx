import React, { ReactElement, useEffect } from 'react'
import styled, { DefaultTheme, withTheme } from 'styled-components'
import { PageData } from '../../root-components/page-data-provider'
import { ThemeType } from '../../util/theme'
import SocialMediaLinks from '../generic/social-media-links'

/***************************************************************/
// Props
/***************************************************************/

interface PageProps {
    page: PageData
    children?: ReactElement | null | (ReactElement | null)[]
    setThemeType: (themeType: ThemeType) => void
    theme: DefaultTheme
}

/***************************************************************/
// Main
/***************************************************************/

const Page = styled(withTheme((props: PageProps): ReactElement => {

    const { page, children, setThemeType, theme, ...rest } = props

    useEffect(() => {
        if (theme.name !== page.theme)
            setThemeType(page.theme)
    }, [theme.name])

    return <div {...rest}>

        {children}

        {page.flags && page.flags.socialMediaLinks
            ? <SocialMediaLinks />
            : null
        }

    </div>
}))`
    flex-direction: column;
    
    align-items: center;

    overflow-x: hidden;

    box-sizing: border-box;
`

/***************************************************************/
// Exports
/***************************************************************/

export default Page

export {
    PageProps
}