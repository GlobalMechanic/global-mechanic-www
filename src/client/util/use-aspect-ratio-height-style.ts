import { RefObject, useState, useEffect } from 'react'

/***************************************************************/
// Main
/***************************************************************/

// TODO: Move Me
const useAspectRatioHeightStyle = (
    ratio: number,
    ref: RefObject<HTMLDivElement>
): { height: string } => {

    const [height, setHeight] = useState(NaN)

    useEffect(() => {

        const updateDivHeight = (): void => {
            const bounds = ref &&
                ref.current &&
                ref.current.getBoundingClientRect()

            const width = bounds ? bounds.width : 0
            const newHeight = width / ratio

            if (newHeight !== height)
                setHeight(newHeight)
        }

        // If the height has not been calculated yet
        if (Number.isNaN(height))
            updateDivHeight()

        window.addEventListener('resize', updateDivHeight)

        return () => {
            window.removeEventListener('resize', updateDivHeight)
        }

    }, [height])

    return {
        height: Number.isNaN(height) ? '' : height + 'px'
    }
}


/***************************************************************/
// Exports
/***************************************************************/

export default useAspectRatioHeightStyle