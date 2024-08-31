import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist } from '../../slices/cartSlice';
import { ACCOUNT_TYPE } from '../../utils/contants'
import toast from 'react-hot-toast';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Product = ({post}) => {
  const user = useSelector((state) => state.profile.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [isHovered , setIsHovered] = useState(false)
  const [iswishListHover , setWishListHover] = useState(false)
  const handleOnClick = () => {
    dispatch(addToCart(post));
    // if (user.AccountType === ACCOUNT_TYPE.PERSONAL) {
    //   dispatch(addToCart(post));
    // } else{
    //   toast.error('Please login with a personal account');
    //   // navigate('/login')
    // }
    
  };
  const handleOnClick2 = () => {
    dispatch(addToWishlist(post))
    // if(user.AccountType === ACCOUNT_TYPE.PERSONAL){
    //   dispatch(addToWishlist(post))
    // }else{
    //   toast.error("You can only do this in your personal account");
    // }
    
  }
  
  return (

<Card className=" flex flex-col gap-3 p-0 hover:scale-[1.02] items-center rounded-md duration-200  border-2 relative group overflow-hidden">
  <div className='absolute z-10 -left-16 top-16 group-hover:left-5 duration-200  '>
  <div className='p-1 flex-col gap-1  text-black text-5xl  bg-white rounded-2xl shadow-md cursor-pointer'
  
  >
    <div className='relative border-b border-gray-300'
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
    >
   <CiShoppingCart onClick={handleOnClick} className='w-10'/>
   <p className={`text-center absolute whitespace-nowrap opacity-0 duration-200 ${isHovered ? ('-right-[5.4rem] opacity-80'):('-right-[6rem] opacity-0')}  p-1  rounded-t-lg rounded-e-lg top-0 text-white bg-black text-sm`}>Add to cart</p>
   </div>
   <div className='relative'
    onMouseEnter={()=> setWishListHover(true)}
    onMouseLeave={()=> setWishListHover(false)}
  >
   <CiHeart onClick={handleOnClick2} className='w-10'/>
   <p className={`text-center absolute whitespace-nowrap opacity-0 duration-200 ${iswishListHover ? ('-right-[6.9rem] opacity-80'):('-right-[8rem] opacity-0')}  p-1  rounded-t-lg rounded-e-lg top-0 text-white bg-black text-sm`}>Add to Wishlist</p>
   </div>
  </div>
            
  </div>
  
 
  
<CardHeader shadow={false} floated={false} className="flex p-5 ">
  <img src={post.image} className="object-fit h-[10rem] group-hover:scale-110 duration-200"/>
</CardHeader>
<CardBody className='mt-5'>
  <div className="mb-2 flex flex-col h-[5rem]">
    <Typography color="blue-gray" className="font-medium text-[14px]">
      {post.title.split(" ").slice(0,5).join( " ") + " ..."}
    </Typography>
    <Typography color="blue-gray" className="font-sm font-bold opacity-90">
    ${post.price}
    </Typography>
  </div>
  {/* <Typography
    variant="small"
    color="gray"
    className="font-normal opacity-75"
  >
    {post.description.split(" ").slice(0,10).join( " ") + "..." }
  </Typography> */}
</CardBody>
{/* <CardFooter className="pt-0 w-full text-sm ">
  <Button
    ripple={false}
    fullWidth={true}
    onClick={handleOnClick}
    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none  bg-gray-200 p-2 hover:bg-gray-300 duration-200 "
  >
    Add to Cart
  </Button>
</CardFooter> */}
</Card>
  )
}

export default Product