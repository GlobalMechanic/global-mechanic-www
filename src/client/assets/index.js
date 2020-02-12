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

import helloLight from './hello-light.svg'
import helloDark from './hello-dark.svg'

import logoDark from './signature-logo-dark.svg'
import logoLight from './signature-logo-light.svg'

import ben from './signature-ben.svg'
import brodie from './signature-brodie.svg'
import bruce from './signature-bruce.svg'
import chez from './signature-chez.svg'
import kevin from './signature-kevin.svg'
import rachel from './signature-rachel.svg'
import ryan from './signature-ryan.svg'
import tina from './signature-tina.svg'

/***************************************************************/
// Compose
/***************************************************************/

const signatures = {
    ben,
    brodie,
    bruce,
    chez,
    kevin,
    rachel,
    ryan,
    tina
}

const light = {
    ...signatures,
    logo: logoLight,
    dots,
    facebook: facebookLight,
    hamburger: hamburgerLight,
    insta: instaLight,
    nut: nutLight,
    twitter: twitterLight,
    vimeo: vimeoLight,
    x: xLight,
    hello: helloLight
}

const dark = {
    ...signatures,
    logo: logoDark,
    dots,
    facebook: facebookDark,
    hamburger: hamburgerDark,
    insta: instaDark,
    nut: nutDark,
    twitter: twitterDark,
    vimeo: vimeoDark,
    x: xDark,
    hello: helloDark
}

/***************************************************************/
// Export
/***************************************************************/

export {
    light,
    dark
}