import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { AppContext } from '../context/AppContext'
import { useState } from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CategoryProducts = () => {
  const { products } = useContext(AppContext);
  const [label, setLabel] = useState('All')

  return (
    <div className='prod container mx-auto px-4 mt-10 flex flex-col gap-5'>
      <div className='flex items-center md:flex-row flex-col justify-between gap-6'>
        <p className='text-gray-800 font-semibold text-[26px]'>Products Choice</p>
        <div className='text-gray-800 grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3'>
          <label onClick={() => setLabel('All')} className={`px-6 py-[7px] rounded-full cursor-pointer text-sm text-center ${label === 'All' ? 'text-white bg-[#994CF5]' : ''}`}>All</label>
          <label onClick={() => setLabel('Video Games')} className={`px-6 py-[7px] rounded-full cursor-pointer text-sm text-center ${label === 'Video Games' ? 'text-white bg-[#994CF5]' : ''}`}>Videos Games</label>
          <label onClick={() => setLabel('Smart Watch')} className={`px-6 py-[7px] rounded-full cursor-pointer text-sm text-center ${label === 'Smart Watch' ? 'text-white bg-[#994CF5]' : ''}`}>Smart Watch</label>
          <label onClick={() => setLabel('Phones & Tablets')} className={`px-6 py-[7px] rounded-full cursor-pointer text-sm text-center ${label === 'Phones & Tablets' ? 'text-white bg-[#994CF5]' : ''}`}>Phones & Tablets</label>
          <label onClick={() => setLabel('Home Appliances')} className={`px-6 py-[7px] rounded-full cursor-pointer text-sm text-center ${label === 'Home Appliances' ? 'text-white bg-[#994CF5]' : ''}`}>Home Appliances</label>
          <label onClick={() => setLabel('Video & Audios')} className={`px-6 py-[7px] rounded-full cursor-pointer text-sm text-center ${label === 'Video & Audios' ? 'text-white bg-[#994CF5]' : ''}`}>Videos & Audios</label>
        </div>
      </div>
      <div className='prod grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 sm:gap-5'>
        {label === 'All' ? products.slice(0,10).map((product, index) => (
          <ProductCard key={index} product={product} />
        )) : products.filter(prod => prod.category === label).slice(0, 10).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Link to={'/shop'} onClick={()=>scrollTo(0,0)} className='flex justify-center'>
        <button className='text-white font-medium bg-[#994CF5] text-xs sm:text-sm px-9 py-3 rounded-full flex items-center gap-3'>More Products <BsArrowUpRight /></button>
      </Link>
    </div>
  )
}

export default CategoryProducts