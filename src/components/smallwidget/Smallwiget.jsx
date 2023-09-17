import React from 'react'
import "./smallwidget.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Smallwiget() {
  return (
    <div className='smallwidget'>
        <div className="wrapper">
      <h4>New Join Members</h4>
    
        <ul>
            <li className="userli">
                <img src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='userphoto'/>
                <span className="username">Random</span>
                <span className="userjob">softwear developer</span>
                <button className="button">
                    <VisibilityIcon/>
                    <span className='buttontext'>Display</span>
                </button>
            </li>
            <li className="userli">
                <img src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='userphoto'/>
                <span className="username">Random</span>
                <span className="userjob">softwear developer</span>
                <button className="button">
                    <VisibilityIcon/>
                    <span className='buttontext'>Display</span>
                </button>
            </li> 
            <li className="userli">
                <img src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='userphoto'/>
                <span className="username">Random</span>
                <span className="userjob">softwear developer</span>
                <button className="button">
                    <VisibilityIcon/>
                    <span className='buttontext'>Display</span>
                </button>
            </li> 
            <li className="userli">
                <img src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='userphoto'/>
                <span className="username">Random</span>
                <span className="userjob">softwear developer</span>
                <button className="button">
                    <VisibilityIcon/>
                    <span className='buttontext'>Display</span>
                </button>
            </li>
            <li className="userli">
                <img src="https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='userphoto'/>
                <span className="username">Random</span>
                <span className="userjob">softwear developer</span>
                <button className="button">
                    <VisibilityIcon/>
                    <span className='buttontext'>Display</span>
                </button>
            </li>
        </ul>
     
      </div>
    </div>
  )
}
