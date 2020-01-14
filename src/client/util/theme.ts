import { DefaultTheme } from 'styled-components'

/***************************************************************/
// Override
/***************************************************************/

declare module 'styled-components' {
    export interface DefaultTheme {

        colors: {
            bg: string
            main: string
            accent: string
        }
        
    }
}

/***************************************************************/
// Main
/***************************************************************/

const BaseTheme: DefaultTheme = {

    colors: {
        bg: 'white',
        main: 'black',
        accent: 'pink'
    }

}

/***************************************************************/
// Exports
/***************************************************************/

export default BaseTheme