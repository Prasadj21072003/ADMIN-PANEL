import React from 'react'
import "./createuser.scss"

export default function Createuser() {
  return (
    <div className='createuserpage'>
    <div className="wrapper">
        <div className="heading">
            <h1>New User</h1>
        </div>
        <div className="form">
            <div className="left">
                <label >Username</label>
                <input type="text"   placeholder='Random' />

                <label >Email</label>
                <input type="text"   placeholder='123@gmail.com' />

                 <label >Phone</label>
                <input type="text"   placeholder='+1 999 999 99' />

              <label className='headinglabel'>Gender</label>


                <div className="genderinput">
            


             
 <input type="radio"  id="male"  className='inputlabel' name='gender' value="male"/>
 <label htmlFor='male' className='genderlabel' >Male</label>

 
  <input type="radio"  id="female" className='inputlabel' name='gender' value="female"/>
  <label htmlFor='female' className='genderlabel'>Female</label>

 
 <input type="radio"  id="others" className='inputlabel' name='gender' value="other" />
 <label htmlFor='others' className='genderlabel'>Other</label>
              </div>


            </div>
            <div className="right">
            <label >Fullname</label>
                <input type="text"   placeholder='Random' />

                <label >Password</label>
                <input type="text"   placeholder='Password' />

                <label >Address</label>
                <input type="text"   placeholder='New York|USA' />

                <label >Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

            



            </div>
        </div>
        <div className="createbutton">
            <button>Create</button>
        </div>
    </div>
    </div>
  )
}
