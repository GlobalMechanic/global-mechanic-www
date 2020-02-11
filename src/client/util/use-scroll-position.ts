import { useState, useEffect } from 'react'

/***************************************************************/
// Types
/***************************************************************/

interface ScrollPosition {
    x: number
    y: number
}

/***************************************************************/
// DEF 
/***************************************************************/

const isBrowser = typeof window !== 'undefined'

/***************************************************************/
// Helper
/***************************************************************/

function getScrollPosition(): ScrollPosition {
    return isBrowser ? {
        x: window.pageXOffset,
        y: window.pageYOffset
    } : { x: 0, y: 0 }
}

/***************************************************************/
// Exports
/***************************************************************/

export default function useScrollPosition(): ScrollPosition {

    const [position, setScrollPosition] = useState<ScrollPosition>(getScrollPosition())

    useEffect(() => {

        let requestRunning: number | null = null

        const handleScroll = (): void => {

            if (!isBrowser || requestRunning !== null)
                return

            requestRunning = window.requestAnimationFrame(() => {
                setScrollPosition(getScrollPosition())
                requestRunning = null
            })

        }

        if (isBrowser) {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return position
}