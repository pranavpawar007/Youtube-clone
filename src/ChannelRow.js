import React from 'react'
import './channelRow.css'
import { Avatar } from '@material-ui/core'
// import verifiedIcon form '@material-ui/icons/CheckCircleOutlined'

function ChannelRow( { image,channel, verified,subs,noOfvideos,description })
   {
  return (
    <div className='channelRow'>
     <Avatar className='channelRow__logo' alt={channel} src={image}/>
     <div className='channelRow__text'>
            <h4>
                {channel} {verified && <verifiedIcon />}
            </h4>
            <p>{subs} subscribers . {noOfvideos} videos </p>
            <p>{description}</p>
     </div>
    </div>
  )
}

export default ChannelRow
