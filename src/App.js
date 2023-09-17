import React from 'react'
import Topbar from './components/Topbar/Topbar'
import "./app.scss"
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home.jsx'
import Userlist from './pages/userlist/Userlist'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import User from './pages/user/User'
import Createuser from './pages/createuser/Createuser'
import Productlist from './pages/productlist/Productlist'
import Newproduct from './pages/newproduct/Newproduct'
import Product from './pages/product/Product'

export default function App() {
  return (
    <Router>
      <Topbar/>
    <div className='container'>
    <Sidebar/>

    <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/users' element={<Userlist/>} />
         <Route path='/users/:userid' element={<User/>} />
         <Route path='/users/createuser' element={<Createuser/>} />
         <Route path='/products' element={<Productlist/>} />
         <Route path='/createproduct' element={<Newproduct/>} />
         <Route path='/products/:userid' element={<Product/>} />


  </Routes>

    </div>
    </Router>
  )
}
