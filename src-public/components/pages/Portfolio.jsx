import React from 'react'

export default function Portfolio(props) {
  return <div>
    <h1>{props.params.portfolio}</h1>
    <h3>{props.params.video}</h3>
  </div>
}
