import React from 'react'
import hero_image from '../assets/banner-image-3.png'
import { LiaAwardSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bg-[#994CF5] text-white'>
      <div className='container mx-auto px-4 flex md:flex-row flex-col-reverse items-center gap-5 py-14 md:py-0 h-full md:h-[86vh]'>
        <div className='w-full flex flex-col md:items-start md:text-start items-center text-center gap-6'>
          <h1 className='text-white 2xl:text-[53px] xl:text-[50px] md:text-[45px] sm:text-[40px] text-[32px] font-bold' style={{lineHeight: '1em'}}>Flat 25% Off <br /> Electronic Order</h1>
          <div className='flex items-center justify-between gap-5 border-t border-b border-[#ECF2F71A] py-3 w-full max-w-[400px]'>
            <div className='flex flex-col sm:flex-row items-center gap-2'>
              <span className='bg-white text-[#994cf5] p-3 text-2xl rounded-full'>
                <LiaAwardSolid />
              </span>
              <h5 className='font-medium leading-5 text-sm sm:text-[16px]'>Win Big Offer <br /> Every Day</h5>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-2'>
              <span className='bg-white text-[#994cf5] p-3 text-2xl rounded-full'>
                <TbTruckDelivery />
              </span>
              <h5 className='font-medium leading-5 text-sm sm:text-[16px]'>Free Delivery <br /> From $50</h5>
            </div>
          </div>
          <div className='sm:text-sm text-xs w-full max-w-[400px]'>Malesuada dis pellentesque etiam nunc accumsan tempus cursus aut lectus aliquid optio magnis veritatis consectetur.</div>
          <Link to={'/shop'}>
            <button className='border border-white hover:border-gray-800 py-[10px] px-[30px] sm:text-sm text-xs font-medium rounded-full hover:bg-gray-800 transition-all duration-200'>Explore Products</button>
          </Link>
        </div>
        <figure className='w-full'>
          <img src={hero_image} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default Hero