import React from 'react'
import { FiTruck } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { CiDiscount1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";

const Support = () => {                                  
  return (
    <div className='container w-11/12 mx-auto mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      
       <div className='flex items-center gap-5 p-5 bg-slate-300 rounded-md shadow-inner'>
         <div className='text-black'>
         <FiTruck  className='w-10 h-10'/>
         </div>
          <div >
            <h2 className='text-black font-semibold'>Free Delivary</h2>
            <p className='text-black'>Orders from all item</p>
          </div>
       </div>
       <div className='flex items-center gap-5 p-5 bg-slate-300 rounded-md shadow-inner'>
         <div className='text-black'>
         <FiDollarSign className='w-10 h-10'/>
         </div>
          <div >
            <h2 className='text-black font-semibold'>Return & Refunf</h2>
            <p className='text-black'>Maney back guarantee</p>
          </div>
       </div>
       <div className='flex items-center gap-5 p-5 bg-slate-300 rounded-md shadow-inner'>
         <div className='text-black'>
         <CiDiscount1  className='w-10 h-10'/>
         </div>
          <div >
            <h2 className='text-black font-semibold'>Member Discount</h2>
            <p className='text-black'>One very order over $140.00</p>
          </div>
       </div>
       <div className='flex items-center gap-5 p-5 bg-slate-300 rounded-md shadow-inner'>
         <div className='text-black'>
         <BiSupport  className='w-10 h-10'/>
         </div>
          <div >
            <h2 className='text-black font-semibold'>Support 24/7</h2>
            <p className='text-black'>Contact us 24 hours a day</p>
          </div>
       </div>
      </div>
      
    </div>
  )
}

export default Support