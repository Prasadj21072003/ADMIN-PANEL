import React from 'react'
import "./topbar.scss"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="wrapper">
            <div className="left">
              <div className="logo">Adminpanel</div>
              </div>
            <div className="right">
              <div className="icons">
<NotificationsNoneIcon/>
<span className="iconbadge">2</span>
                </div>
                <div className="icons">
<LanguageIcon/>
<span className="iconbadge">2</span>
                </div>
                <div className="icons">
<SettingsIcon className='settings'/>
                </div>
                <img src="https://images.pexels.com/photos/16993667/pexels-photo-16993667/free-photo-of-sea-black-and-white-landscape-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="photo" />
                </div>
        </div>
      </div>
    </div>
  )
}