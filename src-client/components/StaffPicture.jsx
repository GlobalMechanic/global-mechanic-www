import React from 'react'
import TitleText from './TitleText'
import BodyText from './BodyText'

export default function StaffPicture({className, staff, ...other}) {

  const style = {
    backgroundImage: `url(${staff.image})`,
  }

  return <div className={'staff-writeup' + (className || '')}>
    <div className='staff-picture' style={style} {...other} />
    <TitleText>{staff.name}</TitleText>
    <BodyText>{staff.writeup}</BodyText>
  </div>
}
