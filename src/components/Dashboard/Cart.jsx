import { useSelect } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../slices/cartSlice'
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({closebtn}) => {
    const cart = useSelector((state) => state.cart.cart)
    const total = useSelector((state) => state.cart.total)

    const dispatch = useDispatch()
    const handleOnClick = () => {
        dispatch(removeFromCart(cart))
    }
  return (
<div>

  <div className='grid pt-[2rem] fixed top-0 right-0 w-[25rem] h-[100vh] pr-2 pl-2 shadow-xl  bg-white'>
    <div className='pb-1 flex justify-between' >
    <h2 className='text-black text-2xl font-semibold opacity-70'>Shopping Cart</h2>
    <IoMdClose onClick={closebtn} className='text-black text-3xl hover:text-gray-500 duration-200'  />
    </div>
    <div className=' overflow-y-scroll flex flex-col gap-2 min-h-[28rem]'>
    { 
        cart.map((item, index) =>(
            <div key={index} className='bg-gray-100 rounded-md p-2 flex items-center h-24 gap-2 snap-y'>
                <div className='h-[5rem] w-[5rem]  border-2 border-gray-400 flex justify-center'>
                   <img src={item.image} alt="" className='mix-blend-darken p-2 h-[99%]' />
                </div>
                <div>
                    <div className='pl-2'>
                   <div className='flex justify-between '>
                     <h3 className='text-black h-[3rem] overflow-hidden text-[14px] w-[15rem]'>{item.title.split(" ").slice(0,5).join( " ")}</h3>
                     <IoMdClose className='text-black text-2xl hover:text-gray-500 duration-200' onClick={handleOnClick} />
                   </div>
                    <h2 className='text-black text-2xl'>${item.price}</h2>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
    <div className='flex justify-between p-2 pb-4 text-[18px] font-semibold text-black'>
      <h2>Subtotal:</h2>
      <h2>${total > 0 ? total :"0"}</h2>
    </div>
    <div className='flex flex-col gap-2 pb-3 '>
   <Link to='cart/view-cart'>
     <button className='p-3  w-full bg-black text-white hover:bg-blue-600 duration-200 '>View Cart</button>
   </Link>
   <Link to='cart/view-cart'>
   <button
          className="p-3 border border-black w-full text-black hover:bg-blue-500 duration-200 hover:text-white hover:border-blue-500"
        >
          Checkout
        </button>
   </Link>
    </div>
    </div>
</div>
  )
    }

export default Cart