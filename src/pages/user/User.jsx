import React from 'react'
import "./user.scss"
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from "react-router-dom";


export default function User() {
  return (
    <div className='new'>
      <div className="wrapper">
        <div className="top">
            <h1>Edit User</h1>
        <Link to="/users/createuser">

            <button>Create</button>
            </Link>
        </div>
        <div className="usercontainer">
            <div className="usershow">
                <div className="photo">
                    <img src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <span className="name">Random</span>
                    <span className="job">Softwear Developer</span>
                </div>
                <div className="details">
                    <span className="accountdetails">Account Details</span>
                    <span className="email"><MailIcon className='icon'/>123@gmail.com</span>
                    <span className="date"><CalendarMonthIcon className='icon'/>10.1.2023</span>
                </div>
                <div className="contact">
                    <span className="heading">Contact</span>
                    <span className="phone"><PhoneAndroidIcon className='icon1'/>+1 999 999 999</span>
                    <span className="location"><LocationOnIcon className='icon1'/>USA</span>
                </div>
            </div>
            <div className="userupdate">
                <div className="info">
                    <div className="heading">
                    <h1>Edit</h1>
                    </div>
                    <div className="updateinfo">
                        <div className="infoinput">
                            <label className='label'>Username</label>
                            <input type="text" placeholder='Random' className='input'/>
                        </div>
                        <div className="infoinput">
                            <label className='label'>Username</label>
                            <input type="text" placeholder='Random' className='input'/>
                        </div>
                        <div className="infoinput">
                            <label className='label'>Username</label>
                            <input type="text" placeholder='Random' className='input'/>
                        </div>
                        <div className="infoinput">
                            <label className='label'>Username</label>
                            <input type="text" placeholder='Random' className='input'/>
                        </div>
                        <div className="infoinput">
                            <label className='label'>Username</label>
                            <input type="text" placeholder='Random' className='input'/>
                        </div>
                     
                    </div>
                </div>
                <div className="profile">
                    <div className="image">
                        <img src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
<label htmlFor="file">
<PublishIcon className='icon2'/>
</label>
<input type="file" name="file" id="file" style={{display:"none"}} />
                    </div>
                    <div className="update">
<button className='updatebutton'>
Update
</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
