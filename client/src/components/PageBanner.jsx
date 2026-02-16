import React from 'react'
import bannerBackground from '../assets/bg-img.png'
import { Link } from 'react-router-dom';
import { TfiAngleDoubleRight } from "react-icons/tfi";

const PageBanner = ({text}) => {
  return (
    <div className='bg-[#994CF5] bg-no-repeat bg-cover bg-top px-4 py-8 text-white min-h-[210px] sm:min-h-[250px] lg:min-h-[300px] 2xl:min-h-[380px] content-center justify-items-center' style={{backgroundImage: `URL(${bannerBackground})`}}>
        <h1 className='2xl:text-[52px] xl:text-[45px] sm:text-[42px] text-[34px] leading-none font-bold 2xl:mb-4 mb-3 text-center'>{text}</h1>
        <div className='flex items-center gap-2 font-medium text-sm'>
            <Link to={'/'} className='hover:text-gray-800 transition-all duration-200'>Home</Link>
            <span><TfiAngleDoubleRight /></span>
            <Link className='text-gray-800'>{text}</Link>
        </div>
    </div>
  )
}

export default PageBanner