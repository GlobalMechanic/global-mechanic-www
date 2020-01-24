import { DefaultTheme } from 'styled-components'

/***************************************************************/
// Override
/***************************************************************/

declare module 'styled-components' {

    export interface DefaultTheme {

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

const LightTheme: DefaultTheme = {

    colors: {
        bg: 'white',
        fg: 'black',
        accent: '#ddd'
    }

}

const DarkTheme = {

    ...LightTheme,

    colors: {
        bg: LightTheme.colors.fg,
        fg: LightTheme.colors.bg
    }
}

/***************************************************************/
// Exports
/***************************************************************/

export {
    LightTheme,
    DarkTheme
}