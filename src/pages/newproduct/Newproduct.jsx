import React from 'react'
import "./newproduct.scss"

export default function Newproduct() {
  return (
    <div className='createproduct'>
    <div className="wrapper">
        <div className="heading">
            <h1>New Product</h1>
        </div>
        <div className="form">
            <div className="left">
                <label >Image</label>
                <input type='file' className='imgfile' />

                <label >Name</label>
                <input type="text"   placeholder='Pen' />

                 <label >Stock</label>
                <input type="text"   placeholder='10' />

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
