import React, { useState } from 'react'
import "./userlist.scss"
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";




export default function Userlist() {
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200 ,renderCell:(params)=>{
            
            return(
<div className="user">

<img src={params.row.avatar} alt="" className="userimg" />
{params.row.username}
</div>
 )
        }},
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          
          width: 140,
        },
        {
          field: 'transactions',
          headerName: 'Transactions',
          
          
          width: 160,
        
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            renderCell:(params)=>{

return(
    <div className="actions">
    
        <Link to={"/users/"+ params.row.id}>
        <button className='edit'>Edit</button>
        </Link>
<DeleteOutlineIcon className='delete' onClick={()=> handledelete(params.row.id) } />
    </div>
)
 }
          
},
];

const handledelete=(id)=>{
setdata(data.filter((item)=>item.id!==id))
}
      
      const rows = [
        { id: 1, username: 'Snow',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active" , transactions:"$112.00" },
        { id: 2, username: 'Lannister',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active", transactions:"$112.00" },
        { id: 3, username: 'Lannister',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active" , transactions:"$112.00"},
        { id: 4, username: 'Stark',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active", transactions:"$112.00" },
        { id: 5, username: 'Targaryen',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active" , transactions:"$112.00"},
        { id: 6, username: 'Melisandre',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active" , transactions:"$112.00"},
        { id: 7, username: 'Clifford',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active", transactions:"$112.00" },
        { id: 8, username: 'Frances',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active", transactions:"$112.00" },
        { id: 9, username: 'Roxie',avatar:"https://images.pexels.com/photos/15359486/pexels-photo-15359486/free-photo-of-man-taking-pictures-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", email: '123@gmail.com', status: "Active" , transactions:"$112.00"},
      ];

      const [data,setdata]=useState(rows)

  return (
    <div className='userlist'>
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
