import { useState } from 'react'

import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import DashBoard from './pages/DashBoard'

import { useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import { ACCOUNT_TYPE } from './utils/contants'
import Footer from './components/Footer'
import MyProfile from './components/Dashboard/MyProfile'
import ViewCart from './components/Dashboard/ViewCart'
import Cart from './components/Dashboard/Cart'
import Orders from './components/Dashboard/Orders'
import WishList from './components/core/Navbar/WishList'
import Chatbot from './components/common/Chatbot'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import CurrentOrders from './pages/CurrentOrders'



function App() {
  const user = useSelector((state)=>state.profile.user)
  
  return (
    <div>
     <Navbar/>
     <Chatbot/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/orders" element={<CurrentOrders/>} />



        <Route
          element={
           <PrivateRoute>
              <DashBoard/>
           </PrivateRoute>  
          }>
        
        <Route path="dashboard/my-profile" element={<MyProfile />} />
        <Route path="dashboard/orders" element={<Orders />} />
       </Route>


       
        {/* {
          user?.AccountType === ACCOUNT_TYPE.PERSONAL &&( */}
            <Route path='cart'>
               <Route path='view-cart' element={<ViewCart/>}/>
               <Route path='wishlist' element={<WishList/>}/>
            </Route>
          {/* )} */}
       {/* {
            user?.AccountType === ACCOUNT_TYPE.BUSINESS && (
            <>
              <Route path="dashboard/records" element={<Records/>} />
            </>
          )
        } */}
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default App
