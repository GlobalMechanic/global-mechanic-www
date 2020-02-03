"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/***************************************************************/
// Main
/***************************************************************/
const useImageDimensions = (url) => {
    const [dimensions, setDimensions] = react_1.useState({ width: NaN, height: NaN });
    react_1.useEffect(() => {
        const newImage = new Image();
        newImage.src = url;
        newImage.onload = () => {
            const { width, height } = newImage;
            setDimensions({
                width,
                height
            });
        };
    }, [url]);
    return dimensions;
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = useImageDimensions;
