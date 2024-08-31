import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/images.png"
import { Link  } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import profileImg from "../../assets/836.jpg"
import { ACCOUNT_TYPE } from '../../utils/contants'
import {  AiOutlineShoppingCart } from "react-icons/ai"
import { FaRegHeart } from "react-icons/fa";
import Cart from '../Dashboard/Cart'


const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showCart, setShowCart] = useState(false)
  const menuRef = useRef(null);

  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.profile.user)
  // const totalItems = useSelector((state) => state.cart.totalItem);
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.length;
  const totalItemWish = useSelector((state) => state.cart.totalItemWish);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
        setShowCart(false);
      } 
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div >
<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 right-0 left-0 z-20 ">
  <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
  <Link to="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
      <img src={logo} className=" rounded-full w-10 h-10" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Easymart</span>
      </Link>
 
  <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link to="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link to="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
      <li>
        <Link to="/orders" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Orders</Link>
      </li>
    </ul>
  </div>
   <div className=" flex gap-4 items-center  ">
     {/* {
      user && user.AccountType !== ACCOUNT_TYPE.BUSINESS && ( */}
        <Link  className='relative' to='cart/wishlist'>
          <FaRegHeart  className="text-2xl text-gray-100" />
          {totalItemWish > 0 && (
            <p className='absolute text-white bg-pink-800 rounded-full w-5 text-center bottom-4 left-3 h-5 text-[13px]' >
              {totalItemWish}
            </p>
          )}
        </Link>
      {/* )}   */}
     {/* {
      user && user.AccountType !== ACCOUNT_TYPE.BUSINESS && ( */}
        <Link  className='relative' onClick={toggleCart} ref={menuRef}>
          <AiOutlineShoppingCart  className="text-2xl text-gray-100" />
          {totalItems > 0 && (
            <p className='absolute text-white bg-pink-800 rounded-full w-5 text-center bottom-4 left-3 h-5 text-[13px]' >
              {totalItems}
            </p>
          )}
        </Link>
      {/* )}   */}
    
    
     {
      token === null &&(
        <Link to="/login">
         <button className='  text-white  rounded-[8px] bg-gray-500 hover:bg-gray-600 duration-200 
         py-[8px] px-[30px] font-medium text-richblack-900'>Login</button>
       </Link>
      )
     }
       {
      token === null &&(
        <Link to="/signup">
          <button className=' text-white  rounded-[8px] bg-gray-500 hover:bg-gray-600 duration-200 
          py-[8px] px-[30px] font-medium text-richblack-900'>SignUp</button>
        </Link>
      )
     }
     


    {
      token !== null &&(
        <div className='relative h-10 w-10 ' ref={menuRef} >
        <img className='rounded-full border border-gray-100 profile cursor-pointer' src={profileImg} alt="" onClick={toggleMenu} />
        <ul className={`flex flex-col absolute top-[3.3rem] right-[-20px] z-50 items-center bg-white p-2 shadow-md ${menuVisible ? "opacity-1 duration-150" : "opacity-0 duration-150"}`}>
          <Link className='text-black' to="/dashboard/my-profile">Dashboard</Link>
          <Link className='text-black' to="/setting">Setting</Link>
        </ul>
       </div>
      )
     }  
    
      
  </div>
  </div>  
 
</nav>
<div className={`fixed h-[100vh] w-full  top-0 left-0 ${showCart ? ('bg-black z-50 duration-200'):('z-[-10]')} opacity-60`}></div>
<div ref={menuRef} className={`${showCart ?('translate-x-0') :('translate-x-[100vh]')} fixed right-0 top-0 duration-100 z-50`} >
  <Cart  ref={menuRef} closebtn={toggleCart}/>
</div>

{/* <Cart/> */}
</div>
  )
}

export default Navbar