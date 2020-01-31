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
        fg: 'black'
    }

}

const dark: DefaultTheme = {

    ...light,
    name: 'dark',

    colors: {
        bg: light.colors.fg,
        fg: light.colors.bg
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