import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../Footer';
import { addToCart, removeFromWishlist } from '../../../slices/cartSlice';
import { Link } from 'react-router-dom';

const WishList = () => {
    const wishlist = useSelector((state)=> state.cart.wishlist)

   const dispatch = useDispatch();

   const handleRemoveFromWishlist = (item) => {
     dispatch(removeFromWishlist(item))
   }
   const handleAddToCart = (item) => {
    dispatch(addToCart(item))
   }
  return (
    <>
    <div className='w-11/12 mx-auto mt-28 container'>
      <div>
        <h1 className='text-black font-bold opacity-50'> WishList</h1>
      </div>
 
      <div className='flex flex-col sm:flex-row mt-10 justify-between gap-10 shadow-md'>
      {
          wishlist.length > 0 ? 
          (
            <div className='flex flex-col w-full gap-2'>
            <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 ">
    <tbody className="bg-white divide-y divide-gray-200">
      {wishlist.map((item, index) => (
        <tr key={index} className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16">
                <img
                  className="h-16 w-16 object-contain"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {item.title}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => handleAddToCart(item)}
              className="text-indigo-600 hover:text-indigo-900"
            >
              Add to Cart
            </button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">${item.price}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => handleRemoveFromWishlist(item)}
              className="text-indigo-600 hover:text-indigo-900"
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          </div>
          ):(
            <div className=' w-full text-center pb-16 h-[35vh]'>
              <p className='text-black mt-10 text-4xl pb-16'>No Wishlist Items Found</p>
              <Link to='/'>
                 <button className='p-3  px-20 bg-black text-white hover:bg-blue-600 duration-200 '>Continue Shopping</button>
              </Link>
            </div>
          )
        }
        {/* {
          wishlist.length > 0 ? 
          (
            <div className='flex flex-col w-full gap-2'>
            {wishlist.map((item, index) => (
              <table key={index} className='bg-gray-100 p-2 '>
                <tbody>
                  <tr className='flex flex-col md:flex-row justify-between items-start md:items-center p-10 md:p-0'>
                    <td className='w-[8rem]'>
                      <div className='h-[5rem] max-w-[8rem] m-2 bg-gray-200 flex justify-center'>
                        <img src={item.image} alt="" className='mix-blend-darken p-2 h-[99%]' />
                      </div>
                    </td>
                    <td>
                      <h3 className='text-black text-[18px] min-w-[30rem] '>{item.title.split(" ").slice(0, 5).join(" ")}</h3>
                    </td>
                    <td><h2 className='text-black text-2xl flex'>${item.price}</h2></td>
                    <td>
                      <div className='flex gap-2 text-black hover:text-gray-500 duration-200 cursor-pointer pr-5' onClick={() => handleRemoveFromWishlist(item)}>
                        <IoMdClose className='text-black text-2xl' />
                        remove
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          ):(
            <div>
              <p className='text-black mt-10 text-4xl'>Your wishlist is <span className='text-red-500'>Empty!</span></p>
            </div>
          )
        } */}

      </div>
    </div>
      {/* <Footer/> */}
    </>
  )
}

export default WishList