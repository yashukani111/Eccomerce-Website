import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import img22 from '../../assets/homepage/offerphone.png'
import img23 from '../../assets/homepage/headphone.png'

const Offers = () => {
  return (
    <div className='w-11/12 mx-auto container mt-16 mb-16 flex gap-10 flex-col md:flex-row'>
        <div className='text-black flex flex-col gap-10 md:gap-0 md:flex-row items-center rounded-lg bg-slate-100 p-5 w-full md:w-[55%] justify-between group shadow-inner'>
            <div className='text-black'>
                <p className='italic'>Sale <span className='text-red-500 text-2xl'>20%</span> off all store</p>
                <h2 className='text-4xl font-medium mt-2 mb-2'>Smartphone & Tablets</h2>

                <button className='flex gap-2 items-center group'>
                    <p className='group-hover:text-blue-600 duration-200'>Shop Now</p>
                    <FaArrowRight className='group-hover:translate-x-2 group-hover:text-blue-600 duration-200'/>
                </button>
            </div>
            <div className='max-w-[10rem]'>
                <img src={img22} className='scale-110 group-hover:scale-150 duration-500 '/>
            </div>
        </div>
        <div className='text-black flex flex-col gap-10 md:gap-0 md:flex-row items-center rounded-lg bg-slate-100 p-5 w-full md:w-[45%] justify-between group shadow-inner '>
            <div className='text-black'>
                <p className='italic'>Sale <span className='text-red-500 text-2xl'>30%</span> off</p>
                <h2 className='text-4xl font-medium mt-2 mb-2'>Wireless Headphone</h2>

                <button className='flex gap-2 items-center group'>
                    <p className='group-hover:text-blue-600 duration-200'>Shop Now</p>
                    <FaArrowRight className='group-hover:translate-x-2 group-hover:text-blue-600 duration-200'/>
                </button>
            </div>
            <div className='max-w-[10rem] group-hover:scale-150 duration-500'>
                <img src={img23}/>
            </div>
        </div>
    </div>
  )
}

export default Offers