import React from 'react'
import "./product.scss"
import {Link} from "react-router-dom";
import PublishIcon from '@mui/icons-material/Publish';

import Chart from '../../components/chart/Chart';
import {product} from '../../demodata'


export default function Product() {
  return (
    <div className='maincontainer'>
      <div className="wrapper1">
    
        <div className="top1">
            <h1>Edit User</h1>
        <Link to="/createproduct">

            <button>Create</button>
            </Link>
        </div>
        <div className="midcontainer">
            <div className="leftbox">

            <div className="chartdiv">
            <h3>{product.title}</h3>

             
   
             <Chart title="Sales Performance (last 3 months)" data={product} datakey="Sales" month = "month"  width={300} height={70} grid className="chart" active="none"/>
             </div>

            
            </div>
            <div className="rightbox">
                <div className="header">
                    <img src="https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg" alt="" />
                    <span>Laptop</span>
                </div>
                <div className="desc">
                    <h6 className='descinfo'>Id:<span>20</span></h6>
                    <h6 className='descinfo'>Sales:<span>2521</span></h6>
                    <h6 className='descinfo'>Active:<span>Yes</span></h6>
                    <h6 className='descinfo'>In Stock:<span>No</span></h6>

                </div>
            </div>
        </div>
        

        <div className="lastcontainer">
            <div className="lastbox">
                <div className="left">
            

                <label >Product</label>
                <input type="text"   placeholder='Pen' />

                <label >In Stock</label>
                <select name="instock" id="instock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label >Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>


                </div>
                <div className="right">
                <div className="profile1">
                    <div className="image1">
                        <img src="https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg" alt="" />
<label htmlFor="file1">
<PublishIcon className='icon3'/>
</label>
<input type="file" name="file1" id="file1" style={{display:"none"}} />
                    </div>
                    <div className="update1">
<button className='updatebutton1'>
Update
</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    
  )
}
