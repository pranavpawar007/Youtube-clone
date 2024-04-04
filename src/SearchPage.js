import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon/>
        <h2>FILTER</h2>
      </div>

      <hr/>

        <ChannelRow
        
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ujJ6FKhX79IQUFFd-1TDWhGF_yZAzIlEZ9hpk7Rvjg&s" 
        channel="Clever programmer"
        verified
        subs="659k"
        noOfvideos={352}
        description ="You can find awosome programming videos"

        
        />

            <hr />

            <VideoRow 
            
            views="1.4M"  
            subs="659k"  
            description="Welcome to [Your Channel Name], where tech meets innovation! Dive into the latest in gadgets, gizmos, and cutting-edge tech trends. From in-depth reviews of smartphones and laptops to tutorials on coding and software development, we've got you covered. Join our community of tech enthusiasts as we explore the future of technology together. " 
            timestamp="59 seconds ago"  
            channel="Clever programmer"  
            title="Lets build clones" 
            image="https://miro.medium.com/v2/resize:fit:1360/0*9b5gv-BMCYQhP71X.png"
            
            />

<VideoRow 
            
            views="1.4M"  
            subs="659k"  
            description="Welcome to [Your Channel Name], where tech meets innovation! Dive into the latest in gadgets, gizmos, and cutting-edge tech trends. From in-depth reviews of smartphones and laptops to tutorials on coding and software development, we've got you covered. Join our community of tech enthusiasts as we explore the future of technology together. " 
            timestamp="59 seconds ago"  
            channel="Clever programmer"  
            title="Youtube thumnail" 
            image="https://miro.medium.com/v2/resize:fit:1027/1*D3990Owb8aa0o1ubSwad2A.png"
            
            />

<VideoRow 
            
            views="1.4M"  
            subs="659k"  
            description="Welcome to [Your Channel Name], where tech meets innovation! Dive into the latest in gadgets, gizmos, and cutting-edge tech trends. From in-depth reviews of smartphones and laptops to tutorials on coding and software development, we've got you covered. Join our community of tech enthusiasts as we explore the future of technology together. " 
            timestamp="59 seconds ago"  
            channel="Clever programmer"  
            title="Eye catching thumnail" 
            image="https://miro.medium.com/v2/resize:fit:1360/0*9b5gv-BMCYQhP71X.png"
            
            />

<VideoRow 
            
            views="1.4M"  
            subs="659k"  
            description="Welcome to [Your Channel Name], where tech meets innovation! Dive into the latest in gadgets, gizmos, and cutting-edge tech trends. From in-depth reviews of smartphones and laptops to tutorials on coding and software development, we've got you covered. Join our community of tech enthusiasts as we explore the future of technology together. " 
            timestamp="59 seconds ago"  
            channel="Clever programmer"  
            title="Programming lec" 
            image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/163897445/original/0fb3067857f1ab02004f79c4241a84fad80b2595/create-best-youtube-thumbnail-in-3-hours.png"
            
            />


<VideoRow 
            
            views="1.4M"  
            subs="659k"  
            description="Welcome to [Your Channel Name], where tech meets innovation! Dive into the latest in gadgets, gizmos, and cutting-edge tech trends. From in-depth reviews of smartphones and laptops to tutorials on coding and software development, we've got you covered. Join our community of tech enthusiasts as we explore the future of technology together. " 
            timestamp="59 seconds ago"  
            channel="Clever programmer"  
            title="Lets build clones" 
            image="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
            
            />

    </div>
  )
}

export default SearchPage
