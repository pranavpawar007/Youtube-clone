import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import './Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected icon={HomeIcon} title="Home"/>
      <SidebarRow icon={WhatshotIcon}  title="Trending"/>
      <SidebarRow icon={SubscriptionsIcon}  title="Subscription"/>  
      <hr/>
      <SidebarRow icon={HomeIcon} title="Home"/>
      <SidebarRow icon={WhatshotIcon}  title="Trending"/>
      <SidebarRow icon={SubscriptionsIcon}  title="Subscription"/>  
      <SidebarRow icon={HomeIcon} title="Home"/>
      <SidebarRow icon={WhatshotIcon}  title="Trending"/>
      <SidebarRow icon={SubscriptionsIcon}  title="Subscription"/>  
      <hr/>



    </div>
  )
}

export default Sidebar
