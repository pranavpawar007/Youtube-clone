import React from 'react'
import './VideoRow.css'

function VideoRow({views , subs , description, timestamp , channel , title, image}) {
  return (
    <div className='videoRow'>
      <img src={image} alt='' />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headline'>{channel}. {" "} <span className='videoRow__Subs'><span className='videoRow__subsNumber'> {subs} </span> {" "}   views {views} . {timestamp} </span>   </p>
        <p className='videoRow__description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow
