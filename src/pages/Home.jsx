import React, { useEffect, useState } from 'react'
import Product from '../components/Homepage/Product';
import Slider from '../components/Homepage/Slider';
import img1 from '../assets/homepage/img1.png';
import img2 from '../assets/homepage/img2.png';
import img3 from '../assets/homepage/img3.png';
import Support from '../components/Homepage/Support';
import Footer from '../components/Footer';
import Offers from '../components/Homepage/Offers';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts , setPosts]  =  useState([]);


  const slides = [
    {
      title: 'The Best Mobile Collection', 
      description: 'Exclusive offer -10% off this week',
      buttonText: 'Shop Now',
      img:img1
    },
    {
      title: 'The Best Laptop  for you!',
      description: 'Exclusive offer -10% off this week',
      buttonText: 'Shop Now',
      img: img2
    },
    {
      title: 'The Best clothes Collection',
      description: 'Exclusive offer -50% off this week',
      buttonText: 'Shop Now',
      img:img3
    }
  ];

  async function fetchProductData(){
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data)
    }
    catch(error){

    }
  }
  useEffect(() => {
    fetchProductData();
  },[])
  return (
    <>
      <div className='  bg-slate-200'>
      <Slider slides={slides} />
      </div>
      <Support/>
      <Offers/>
    <div className='container text-black text-2xl w-11/12 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4'>
        {
        posts.map((post) => (
          <Product key={post.id} post={post}/>
        ))
        }
      </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Home