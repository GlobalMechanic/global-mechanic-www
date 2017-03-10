import React from 'React'
import { Block, IS_MOBILE } from 'global-mechanic-components'

/******************************************************************************/
// Data
/******************************************************************************/
const isBrowser = typeof window !== 'undefined'

const poster = isBrowser ? require('../assets/background-poster.jpg') : ''
const video = isBrowser ? require('../assets/background-video.mp4') : ''

const component = IS_MOBILE ? 'img' : 'video'

const props = IS_MOBILE
  ? {
    src: poster,
  }
  : {
    src: video,
    poster,
    loop: true,
    autoPlay: true,
    muted: true,
  }

/******************************************************************************/
// Helper Components
/******************************************************************************/

const Overlay = ({children}) =>
  <Block id='video-background-overlay' >
    {children}
  </Block>

const Picture = () =>
  <Block id='video-background' component={component} {...props} />

/******************************************************************************/
// Exports
/******************************************************************************/

const Background = () =>
  <Block id='background'>
    <Overlay />
    <Picture />
  </Block>

export default Background
