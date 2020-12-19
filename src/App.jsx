import React from 'react';
import Header from "./header"
import Sidebar from "./sidebar.jsx"
import './sidebar.css';
import './recommended.css';
import './app.css';
import Recommended from "./recommended"
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
function App() {
  return (
    <div className="">
    <Header/>
    <div className="app">
    <div className="sidebar">
      <Sidebar icon={HomeIcon} title="Home"/>
      <Sidebar icon={WhatshotIcon} title="Trending"/>
      <Sidebar icon={SubscriptionsIcon} title="Subscriptions"/>
      <hr className="hr"/>
      <Sidebar icon={LibraryAddIcon} title="Library"/>
      <Sidebar icon={WatchLaterIcon} title="Watch Later"/>
      <Sidebar icon={ThumbUpAltIcon} title="Liked Videos"/>
      <Sidebar icon={HistoryIcon} title="History"/>
      <Sidebar icon={VideoLibraryIcon} title="Video Library"/>
    </div>
    <div className="recommended">
      <Recommended/>
    </div>
    </div>
    </div>
  );
}

export default App;
