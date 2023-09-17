import React, { useState } from 'react'
import "./productlist.scss"
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";




export default function Productlist() {
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'Products1', headerName: 'Product', width: 200 ,renderCell:(params)=>{
            
            return(
<div className="products">

<img src={params.row.Image} alt="" className="productimg" />
{params.row.Products}
</div>
 )
        }},
        { field: 'Stock', headerName: 'Stock', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          
          width: 140,
        },
        {
          field: 'cost',
          headerName: 'Cost',
          
          
          width: 160,
        
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            renderCell:(params)=>{

return(
    <div className="actions1">
    
        <Link to={"/products/"+ params.row.id}>
        <button className='edit1'>Edit</button>
        </Link>
<DeleteOutlineIcon className='delete1' onClick={()=> handledelete(params.row.id) } />
    </div>
)
 }
          
},
];

const handledelete=(id)=>{
setdata(data.filter((item)=>item.id!==id))
}
      
      const rows = [
        { id: 1, Products: 'Pen',Image:"https://img.freepik.com/free-vector/vector-fountain-writing-pen-contract-signing_1284-41915.jpg?w=2000", Stock: '12', status: "Active" ,cost:"$112.00" },
        { id: 2, Products: 'Pencil',Image:"https://cdn.shopify.com/s/files/1/0383/4232/8458/products/NATARAHJA-PENCIL-1_800x.jpg?v=1666347854", Stock: '12', status: "Active", cost:"$112.00" },
        { id: 3, Products: 'Phone',Image:"https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=1200&width=1200", Stock: '12', status: "Active" ,cost:"$112.00"},
        { id: 4, Products: 'Laptop',Image:"https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg", Stock: '12', status: "Active", cost:"$112.00" },
        { id: 5, Products: 'Computer',Image:"https://5.imimg.com/data5/LP/FA/MY-50363679/computer-world-500x500.jpg", Stock: '12', status: "Active" ,cost:"$112.00"},
        { id: 6, Products: 'Keyboard',Image:"https://img.freepik.com/free-photo/keyboard-button_1203-9150.jpg?w=2000", Stock: '12', status: "Active" ,cost:"$112.00"},
        { id: 7, Products: 'Earphone',Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362.png?v=1625157890", Stock: '12', status: "Active", cost:"$112.00" },
        { id: 8, Products: 'Tv',Image:"https://www.lg.com/in/images/tvs/md07554739/gallery/43UQ7550PSF-D-02.jpg", Stock: '12', status: "Active", cost:"$112.00" },
        { id: 9, Products: 'Fan',Image:"https://www.ushafans.com/sites/default/files/MicrosoftTeams-image%20%282%29.png", Stock: '12', status: "Active" ,cost:"$112.00"},
      ];

      const [data,setdata]=useState(rows)

  return (
    <div className='productlist'>
        <div className="wrapper">
      <DataGrid
      disableRowSelectionOnClick
        rows={data}
        columns={columns}
       
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  )
}
