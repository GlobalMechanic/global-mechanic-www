import styled from 'styled-components'
import React, { ReactElement, useState, useLayoutEffect } from 'react'

/***************************************************************/
// Types
/***************************************************************/

interface Style {
   width: number | undefined
   height: number | undefined
}

/***************************************************************/
// Constants
/***************************************************************/

const DEFAULT_TO_CSS = undefined

/***************************************************************/
// Hooks
/***************************************************************/

/**
 * In mobile browsers, 100vh can be larger than the actual view.
 * This workaround makes desktop browsers and mobile browsers more compatible.
 */
const useMobileViewWorkAroundStyle = (): Style => {
   const [style, setStyle] = useState<Style>({
      width: DEFAULT_TO_CSS,
      height: DEFAULT_TO_CSS
   })

   useLayoutEffect(() => {

      const updateStyle = (): void => {

         const docEl = document && document.documentElement
         const width = docEl.clientWidth
            ? docEl.clientWidth
            : window.innerWidth

         const height = docEl.clientHeight
            ? docEl.clientHeight
            : window.innerHeight

         setStyle({
            width,
            height
         })
      }

      window.addEventListener('resize', updateStyle)
      updateStyle()

      return () => {
         window.removeEventListener('resize', updateStyle)
      }

   }, [])

   return style
}


/***************************************************************/
// Main
/***************************************************************/

const PageContainer = styled((props): ReactElement => {

   const style = useMobileViewWorkAroundStyle()

   return <div style={style} {...props} />
})`
   display: flex;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
`

/***************************************************************/
// Export Topbar
/***************************************************************/

export default PageContainer