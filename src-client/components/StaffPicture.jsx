import React from 'react'
import TitleText from './TitleText'
import BodyText from './BodyText'

function italicize(writeup) {
  return writeup
    .split('**')
    .map((str, i) => {
      return <span key={i} className={i % 2 == 1 ? 'italic' : ''}>{str}</span>
    })
}

export default function StaffPicture({className, staff, ...other}) {

  const style = {
    backgroundImage: `url(${staff.image})`,
  }

  return <div className={'staff-writeup' + (className || '')}>
    <div className='staff-picture' style={style} {...other} />
    <div className='staff-bio'>
      <TitleText>{staff.name}</TitleText>
      <BodyText>{italicize(staff.writeup)}</BodyText>
    </div>
  </div>
}
