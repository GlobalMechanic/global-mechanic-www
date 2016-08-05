import React from 'react'
import CellData from './cell-data'

const DefaultDimension = 4

export default function Cell(props) {

  let dimension = props.dimension || 50
  let data = props.data || new CellData({content: props.children})

  let style = {
    backgroundColor: data.color,
    width: (data.width || DefaultDimension) * dimension,
    height: (data.height || DefaultDimension) * dimension,
    left: data.x,
    top: data.y
  }

  return <div className='dynamic-cell'
    style={style} >{data.content}
  </div>
}
