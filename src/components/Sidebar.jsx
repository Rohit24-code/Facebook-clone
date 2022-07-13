
import React from 'react'
import SidebarRow from './SidebarRow'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import ChatIcon from '@mui/icons-material/Chat'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import PeopleIcon from '@mui/icons-material/People'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <SidebarRow src='https://media-exp2.licdn.com/dms/image/C4D03AQGHGPFxhTs9MA/profile-displayphoto-shrink_800_800/0/1643270542027?e=1663200000&v=beta&t=KQPpeHGe9gP8sHZcomTSHBbp5K6MBhjKAn1byeGj0Yg' title="rohit singh"/>

      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>

      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontOutlinedIcon} title='MarketPlace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='MarketPlace'/>
    </div>
  )
}

export default Sidebar
