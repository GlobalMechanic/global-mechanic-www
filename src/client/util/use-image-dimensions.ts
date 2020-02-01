import { useState, useEffect } from 'react'

/***************************************************************/
// Main
/***************************************************************/

const useImageDimensions = (url: string): { width: number, height: number } => {

    const [dimensions, setDimensions] = useState({ width: NaN, height: NaN })

    useEffect(() => {

        const newImage = new Image()
        newImage.src = url

        newImage.onload = () => {

            const { width, height } = newImage

            setDimensions({
                width,
                height
            })
        }

    }, [url])

    return dimensions
}

/***************************************************************/
// Exports
/***************************************************************/

export default useImageDimensions