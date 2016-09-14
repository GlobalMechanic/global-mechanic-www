import React from 'react'

export default function Inverted({children, className, fill, ...other}) {

  let classes = 'inverse' + (className ? ' ' + className : '')
  if (fill)
    classes += classes.length == 0 ? 'fill' : ' fill'

  return React.createElement('div', { className: classes, ...other }, children)
}
