import dots from './dots.png'
import facebookLight from './facebook-light.png'
import facebookDark from './facebook-dark.png'
import hamburgerLight from './hamburger-light.png'
import hamburgerDark from './hamburger-dark.png'
import instaLight from './insta-light.png'
import instaDark from './insta-dark.png'
import nutLight from './nut-light.png'
import nutDark from './nut-dark.png'
import twitterLight from './twitter-light.png'
import twitterDark from './twitter-dark.png'
import vimeoLight from './vimeo-light.png'
import vimeoDark from './vimeo-dark.png'
import xDark from './x-dark.png'
import xLight from './x-light.png'

/***************************************************************/
// Compose
/***************************************************************/

const light = {
    dots,
    facebook: facebookLight,
    hamburger: hamburgerLight,
    insta: instaLight,
    nut: nutLight,
    twitter: twitterLight,
    vimeo: vimeoLight,
    x: xLight
}

const dark = {
    dots,
    facebook: facebookDark,
    hamburger: hamburgerDark,
    insta: instaDark,
    nut: nutDark,
    twitter: twitterDark,
    vimeo: vimeoDark,
    x: xDark
}

/***************************************************************/
// Export
/***************************************************************/

export {
    light,
    dark
}