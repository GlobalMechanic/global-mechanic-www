import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Icon, { IconProps } from './icon'
import { useStaticAssets } from '../../root-components/static-asset-context'

/***************************************************************/
// Props
/***************************************************************/

interface SocialMediaLinkProps extends IconProps {
    to: string
}
/***************************************************************/
// Components
/***************************************************************/

const SocialMediaLink = styled((props: SocialMediaLinkProps): ReactElement => {

    const { to, ...rest } = props

    return <Icon
        as='a'
        href={to}
        target='_blank'
        {...rest}
    />
})`
    font-size: 1.5em;
    margin-left: 0.125em;
`

const SocialMediaLinks = styled((props): ReactElement => {

    const staticAssets = useStaticAssets()

    return <div {...props} >

        <SocialMediaLink
            image={staticAssets.insta}
            to='https://www.instagram.com/globalmechanic/?hl=en'
        />

        <SocialMediaLink
            image={staticAssets.facebook}
            to='https://www.facebook.com/GlobalMechanicMedia/'
        />

        <SocialMediaLink
            image={staticAssets.vimeo}
            to='https://vimeo.com/globalmechanicmedia'
        />

        <SocialMediaLink
            image={staticAssets.twitter}
            to='https://twitter.com/globalmechanic?lang=en'
        />

    </div>
})`

    display: flex;
    position: fixed;
    bottom: 1em;
    left: 1em;
    margin-left: env(safe-area-inset-left);
    margin-bottom: env(safe-area-inset-bottom);
    
    align-items: baseline;
`

/***************************************************************/
// Exports
/***************************************************************/

export default SocialMediaLinks