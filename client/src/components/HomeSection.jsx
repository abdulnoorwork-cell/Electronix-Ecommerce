import React, { useContext, useEffect } from 'react'
import mobile_image from '../assets/mobile.png'
import camera_image from '../assets/camera.png'
import drone_image from '../assets/drone.png'
import product_image from '../assets/product_image.png'
import { AppContext } from '../context/AppContext'

const HomeSection = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div className='container mx-auto p-4 flex lg:flex-row flex-col items-center mt-5 gap-5 justify-center'>
      <div data-aos="fade-right" className='flex lg:flex-col sm:flex-row flex-col bg-[#4080e0] rounded-[10px] xl:pt-10 xl:pb-[30px] pt-8 pb-6 sm:px-8 px-6 text-white'>
        <div className='flex flex-col'>
          <p className='text-[22px] sm:text-2xl 2xl:text-3xl font-semibold mb-3'>New iphone 15 Pro Max</p>
          <small className='sm:text-sm text-xs max-w-[280px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi temporibus odio.</small>
          <button onClick={() => { navigate('/shop/phones-&-tablets'); scrollTo(0, 0) }} className='sm:text-sm text-xs font-medium w-fit border-b mt-5 border-blue-400 transition-all duration-200 pb-1 hover:text-gray-800 hover:border-gray-800'>Shop Now</button>
        </div>
        <figure className='flex justify-end'>
          <img src={mobile_image} alt="" className='w-full xl:max-w-[350px] sm:max-w-[280px] max-w-[250px]' />
        </figure>
      </div>
      {/* <div className='flex flex-col w-full gap-5 h-full'>
        <div className='p-[30px] gap-[30px] flex items-center rounded-[10px] w-full h-full' style={{ backgroundImage: 'linear-gradient(180deg, #F197CA 50%, #ECF2CF 50%)' }}>
          <div className='w-full'>
            <img src={camera_image} alt="" className='max-w-[180px]' />
          </div>
          <div className='w-full flex flex-col gap-5'>
            <div>
              <h6 className='text-[22px] text-gray-800 font-medium leading-[1.2em]'>Instant 360 <br /> Camera</h6>
            </div>
            <div>
              <button className='font-medium w-fit border-b mt-6 text-[#994CF5] border-[#984cf55d] transition-all duration-200 pb-1 hover:text-gray-800 hover:border-gray-800'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#FFD40C] rounded-[10px] p-[30px] h-full'>
          <h6 className='text-[22px] leading-[1.2em] text-gray-800 text-center font-medium'>Shop The Hottest Products</h6>
          <figure className='flex justify-center'>
            <img src={drone_image} alt="" className='w-full max-w-[335px]' />
          </figure>
          <button className='font-medium w-fit border-b text-gray-800 border-[#984cf55d] transition-all duration-200 pb-1 hover:text-gray-800 hover:border-gray-800'>Shop Now</button>
        </div>
      </div> */}
      <div data-aos="fade-up" className='flex lg:flex-col sm:flex-row flex-col bg-[#FFD40C] rounded-[10px] xl:pt-10 xl:pb-[30px] pt-8 pb-6 sm:px-8 px-6 text-gray-800 h-full' style={{ backgroundImage: 'linear-gradient(180deg, #F197CA 50%, #ECF2CF 50%)' }}>
        <div className='flex flex-col'>
          <p className='text-[22px] sm:text-2xl 2xl:text-3xl font-semibold mb-3'>Instant 360 Camera</p>
          <small className='sm:text-sm text-xs max-w-[280px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi temporibus odio.</small>
          <button onClick={() => { navigate('/shop/video-&-audios'); scrollTo(0, 0) }} className='sm:text-sm text-xs font-medium w-fit border-b mt-5 text-[#994CF5] border-[#984cf55d] transition-all duration-200 pb-1 hover:text-gray-800 hover:border-gray-800'>Shop Now</button>
        </div>
        <figure className='flex justify-end'>
          <img src={camera_image} alt="" className='w-full xl:max-w-[350px] sm:max-w-[280px] max-w-[250px]' />
        </figure>
      </div>
      <div data-aos="fade-left" className='flex lg:flex-col sm:flex-row flex-col bg-[#E12E2E] rounded-[10px] xl:pt-10 xl:pb-[30px] pt-8 pb-6 sm:px-8 px-6 text-white h-full'>
        <div className='flex flex-col'>
          <p className='text-[22px] sm:text-2xl 2xl:text-3xl font-semibold mb-3'>Big Deal Home Appliance</p>
          <small className='sm:text-sm text-xs max-w-[280px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi temporibus odio.</small>
          <button onClick={() => { navigate('/shop/home-appliances'); scrollTo(0, 0) }} className='sm:text-sm text-xs font-medium w-fit border-b mt-5 border-blue-400 transition-all duration-200 pb-1 hover:text-gray-800 hover:border-gray-800'>Shop Now</button>
        </div>
        <figure className='flex justify-end'>
          <img src={product_image} alt="" className='w-full xl:max-w-[350px] sm:max-w-[280px] max-w-[250px]' />
        </figure>
      </div>
    </div>
  )
}

export default HomeSection