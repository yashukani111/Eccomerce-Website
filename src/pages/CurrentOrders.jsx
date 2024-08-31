import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  removeFromOrder } from '../slices/cartSlice';
import { Link } from 'react-router-dom';

const OrderPage = () => {
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch(); 

const handleCancleOrder = (order) =>{
  // console.log(order)
  dispatch(removeFromOrder(order));
  // console.log('called')
}
  return (
    <div className="container w-11/12 mx-auto mt-24 px-4 sm:px-6 lg:px-8 pb-10 pt-6 ">
      <h1 className="text-3xl font-bold text-gray-800">Your Orders</h1>

      {orders.length > 0 ? (
        orders.map((order, orderIndex) => (
          <div key={orderIndex} className="bg-white shadow-md rounded-lg my-6 p-4 relative">
            <h2 className="text-2xl font-semibold text-gray-700">Order {orderIndex + 1}</h2>
            <p className="text-gray-600">Total Amount: ${order.totalAmount}</p>

            <div className="mt-4">
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="w-[3rem] md:w-[5rem] h-16 object-contain rounded" />
                    <div>
                      <p className="text-gray-700">{item.title}</p>
                      <p className="text-gray-900 font-bold">${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() =>handleCancleOrder(order)} className='text-red-500 absolute right-20 top-2 bg-red-100 p-1 rounded-md'> Cancle Order</button>
          </div>
        ))
      ) : (
        <div className=' w-full text-center pb-16 h-[35vh]'>
              <p className='text-black mt-10 text-4xl pb-16'>No Orders Found</p>
              <Link to='/'>
                 <button className='p-3  px-20 bg-black text-white hover:bg-blue-600 duration-200 '>Continue Shopping</button>
              </Link>
            </div>
      )}
    </div>
  );
};

export default OrderPage;
