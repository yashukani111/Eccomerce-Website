import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { addToOrder, removeFromCart } from '../../slices/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import PaymentModal from '../modals/PaymentModal';

const ViewCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = useState(total);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  useEffect(() => {
    setTotalAmount(total);
  }, [total]);

  const handleShippingChange = (option) => {
    let shippingCost = 0;
    switch (option) {
      case 'flat_rate':
        shippingCost = 20; 
        break;
      case 'express':
        shippingCost = 25;
        break;
      case 'free':
        shippingCost = 0;
        break;
      default:
        break;
    }
    setTotalAmount(total + shippingCost);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
const handlePaymentSuccess = () => {
    // Add order to the state
    dispatch(addToOrder({ items: cart, totalAmount }));

    // Loop through the cart items in reverse order
    for (let i = cart.length - 1; i >= 0; i--) {
        dispatch(removeFromCart(cart[i]));
    }

    // Navigate to orders page after processing
    navigate('/orders');
    window.location.reload();
};

  return (
    <>
      <div className="container w-11/12 mx-auto mt-24 px-4 sm:px-6 lg:px-8 pb-10 pt-6">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="bg-white shadow-md rounded-lg w-full md:w-[70%] overflow-hidden">
            <div className="p-4">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.title} className="w-[3rem] md:w-[5rem] h-16 object-contain rounded" />
                      <div>
                        <p className="text-gray-700">{item.title}</p>
                        <p className="text-gray-900 font-bold">${item.price}</p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-red-500" onClick={() => handleRemoveFromCart(item)}>
                      <IoMdClose className="w-6 h-6" />
                    </button>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-gray-800 text-3xl py-4 pb-10">Your cart is <span className='text-red-500'>empty!</span></p>
                  <Link to='/'>
                    <button className='p-3 px-20 bg-black text-white hover:bg-blue-600 duration-200'>Continue Shopping</button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-[30%] h-fit">
            <div className="p-4">
              <div className="flex justify-between border-b pb-2">
                <p className="text-gray-700 font-semibold">Subtotal</p>
                <p className="text-gray-700">${total ? total : "0"}</p>
              </div>
              <div className="border-b py-2 cflex-col">
                <p className="text-gray-700 font-semibold">Shipping</p>
                <div className="flex flex-col">
                  <label htmlFor="flat_rate" className="flex space-x-2">
                    <input id="flat_rate" type="radio" name="shipping" onChange={() => handleShippingChange('flat_rate')} />
                    <span className='text-black'>Flat rate: <span className="text-blue-500">$20.00</span></span>
                  </label>
                  <label htmlFor="express" className="flex space-x-2">
                    <input id="express" type="radio" name="shipping" onChange={() => handleShippingChange('express')} />
                    <span className='text-black'>Local pickup: <span className="text-blue-500">$25.00</span></span>
                  </label>
                  <label htmlFor="free" className="flex space-x-2">
                    <input id="free" type="radio" name="shipping" onChange={() => handleShippingChange('free')} />
                    <span className='text-black'>Free shipping: <span className="text-blue-500">$0.00</span></span>
                  </label>
                </div>
              </div>
              <div className="flex justify-between pt-2">
                <p className="text-gray-700 font-semibold">Total</p>
                <p className="text-gray-700">${totalAmount ?totalAmount :'0'}</p>
              </div>
              { cart.length === 0 &&
              <Link to='/'>
                <button
                className="w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
                
              >
                Add Items
              </button>
              </Link>
              }
              { cart.length > 0 &&
              <button
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
                onClick={openModal}
              >
                Proceed to Checkout
              </button>
              }
              <PaymentModal isOpen={isModalOpen} onClose={closeModal} onSuccess={handlePaymentSuccess} />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ViewCart;
