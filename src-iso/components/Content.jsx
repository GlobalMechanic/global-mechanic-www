import React from 'react'

export default function Content({children, ...other}) {
  return <div {...other}>{children}</div>
}
