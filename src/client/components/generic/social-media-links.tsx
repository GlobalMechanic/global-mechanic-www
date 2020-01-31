import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Icon, { IconProps } from './icon'
import { StaticAssets } from '../../root-components/page-routes'

/***************************************************************/
// Props
/***************************************************************/

interface SocialMediaLinkProps extends IconProps {
    to: string
}

interface SocialMediaLinksProps {
    staticAssets: StaticAssets
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
    font-size: 2em;
    margin-left: 0.25em;
`

const SocialMediaLinks = styled((props: SocialMediaLinksProps): ReactElement => {

    const { staticAssets, ...rest } = props

    return <div {...rest} >

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

    height: 4em;

    align-items: baseline;
`

/***************************************************************/
// Exports
/***************************************************************/

export default SocialMediaLinks