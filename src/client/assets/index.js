import dots from './dots.png'
import facebook from './facebook.png'
import hamburgerLight from './hamburger-light.png'
import hamburgerDark from './hamburger-dark.png'
import insta from './insta.png'
import nutLight from './nut-light.png'
import nutDark from './nut-dark.png'
import twitter from './twitter.png'
import vimeo from './vimeo.png'
import xDark from './x-dark.png'
import xLight from './x-light.png'

/***************************************************************/
// Compose
/***************************************************************/

const light = {
    dots,
    facebook,
    hamburger: hamburgerLight,
    insta,
    nut: nutLight,
    twitter,
    vimeo,
    x: xLight
}

const dark = {
    dots,
    facebook,
    hamburger: hamburgerDark,
    insta,
    nut: nutDark,
    twitter,
    vimeo,
    x: xDark
}

/***************************************************************/
// Export
/***************************************************************/

export {
    light,
    dark
}