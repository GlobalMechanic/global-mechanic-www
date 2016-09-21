import React from 'react'
import staff from '../modules/staff'

import { StaffPicture } from '../components'

export default function Staff(props) {
  const id = props.params.staff
  const person = staff.filter(dir => dir.id === id)[0]

  return <StaffPicture staff={person}></StaffPicture>
}
