import React from 'react'
import './SidebarRow.css'
import HomeIcon from '@material-ui/icons/Home'

function SidebarRow({ selected, Icon , title}) {
  return (
    <div className= {`sidebarRow ${selected && 'selected'}`} >
        <HomeIcon className="sidebarRow__icon"/>
      <h2 className='sidebarRow__title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
 