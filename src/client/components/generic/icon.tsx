import styled from 'styled-components'

/***************************************************************/
// Props
/***************************************************************/

interface IconProps {
    image: string
}

/***************************************************************/
// Main
/***************************************************************/

const Icon = styled.span`

    display: inline-block;
    width: 1.25em;
    height: 1em;

    flex: 0 0 auto;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(p: IconProps) => p.image});
`

/***************************************************************/
// Exports 
/***************************************************************/

export default Icon

export {
    IconProps
}