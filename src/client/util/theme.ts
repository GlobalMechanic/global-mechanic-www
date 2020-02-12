import { DefaultTheme } from 'styled-components'

/***************************************************************/
// Types
/***************************************************************/

type ThemeType = 'light' | 'dark'

/***************************************************************/
// Override
/***************************************************************/

declare module 'styled-components' {

    export interface DefaultTheme {

        name: ThemeType

        colors: {
            bg: string
            fg: string
            accent: string
        }
    }

}


/***************************************************************/
// Main
/***************************************************************/

const light: DefaultTheme = {

    name: 'light',

    colors: {
        bg: 'white',
        fg: 'black',
        accent: 'rgba(0,0,0, 0.25)'
    }

}

const dark: DefaultTheme = {

    name: 'dark',

    colors: {
        bg: 'black',
        fg: 'white',
        accent: 'rgba(255,255,255, 0.25)'
    }
}

const themes: Record<ThemeType, DefaultTheme> = {
    light,
    dark
}

/***************************************************************/
// Exports
/***************************************************************/

export default themes

export {
    ThemeType
}