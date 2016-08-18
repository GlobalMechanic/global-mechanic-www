import React from 'react'

export default function Block(props) {

  const dimension = props.dimension || DefaultDimension
  const data = props.data

  const style = {
    backgroundColor: props.color || '#000',
    left: data.x * dimension,
    top: data.y * dimension,
    width: (data.width || DefaultWidth) * dimension,
    height: (data.height || DefaultHeight) * dimension
  }

  return <div className="freewall-block" style={style}>{props.children}</div>
}

export const DefaultDimension = 50

export const DefaultWidth = 4

export const DefaultHeight = 3
