import React from 'react'
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
function header() {
    return (
       <div className="header">
      <div className="header_left">
       <MenuIcon/>
       <img className="header_icon" src="/yt.svg.webp" alt=""/>
       </div>
       <div className="header_input">
        <input className="header_inputarea" placeholder="Search" />
        <SearchIcon className="header_inputbutton"></SearchIcon>
       </div>
       <div className="header_right">
        <VideoCallIcon className="header_righticon"/>
        <AppsIcon  className="header_righticon"/>
        <NotificationsIcon  className="header_righticon"/>
       </div>
       </div>
    )
}

export default header;
