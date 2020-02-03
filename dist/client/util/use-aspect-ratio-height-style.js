"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/***************************************************************/
// Main
/***************************************************************/
// TODO: Move Me
const useAspectRatioHeightStyle = (ratio, ref) => {
    const [height, setHeight] = react_1.useState(NaN);
    react_1.useEffect(() => {
        const updateDivHeight = () => {
            const bounds = ref &&
                ref.current &&
                ref.current.getBoundingClientRect();
            const width = bounds ? bounds.width : 0;
            const newHeight = width / ratio;
            if (newHeight !== height)
                setHeight(newHeight);
        };
        // If the height has not been calculated yet
        if (Number.isNaN(height))
            updateDivHeight();
        window.addEventListener('resize', updateDivHeight);
        return () => {
            window.removeEventListener('resize', updateDivHeight);
        };
    }, [height]);
    return {
        height: Number.isNaN(height) ? '' : height + 'px'
    };
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = useAspectRatioHeightStyle;
