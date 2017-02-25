import React from 'React'
import { Base, IS_MOBILE } from 'global-mechanic-components'

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
  <Base id='video-background-overlay' >
    {children}
  </Base>

const Picture = () =>
  <Base id='video-background' component={component} {...props} />

/******************************************************************************/
// Exports
/******************************************************************************/

const Background = () =>
  <Base id='background'>
    <Overlay />
    <Picture />
  </Base>

export default Background
