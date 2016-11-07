import React from 'react'
import TitleText from './TitleText'
import BodyText from './BodyText'

function format(writeup) {
  return writeup.split('\n')
    .map((str, i) => <p key={i}>{italicize(str)}</p>)
}

function italicize(paragraph = '') {
  return paragraph.split('**')
    .map((str, i) => <span key={i} className={i % 2 == 1 ? 'italic' : ''}>{str}</span>)
}

export default function StaffPicture({className, staff, ...other}) {

  const style = {
    backgroundImage: `url(${staff.image})`,
  }

  return <div className={'staff-writeup' + (className || '')}>
    <div className='staff-picture' style={style} {...other} />
    <div className='staff-bio'>
      <TitleText>{staff.name}</TitleText>
      <BodyText>{format(staff.writeup)}</BodyText>
    </div>
  </div>
}
