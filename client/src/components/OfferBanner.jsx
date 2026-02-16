import React from 'react'
import background_image from '../assets/baner-bg.png'
import mobile_image from '../assets/mobile_image.png'

const OfferBanner = () => {
    return (
        <div className='container mx-auto px-4 mt-10'>
            <div className='bg-[#944CF5] bg-no-repeat bg-cover pt-10 p-8 sm:p-10 rounded-[10px] relative overflow-hidden 2xl:h-[330px] gap-5 xl:h-[300px] sm:h-[260px] flex flex-col justify-center' style={{ backgroundImage: `url(${background_image})` }}>
                <div className='max-w-[350px]'>
                    <p className='sm:text-3xl xl:text-[40px] text-[28px] font-semibold text-[#FFD40C]' style={{lineHeight: '1em'}}>30% Off For New Customers</p>
                    <h6 className='text-white text-sm mt-4'>Free Shipping & Free Return at no order min. <br /> Restriction apply.</h6>
                    <button className='text-white mt-4 py-1 border-b sm:text-[16px] text-sm border-white/50 transition-all duration-200 hover:border-gray-800 hover:text-gray-800'>Start Your Order Now</button>
                </div>
                <figure>
                    <img src={mobile_image} className='sm:absolute sm:top-0 lg:right-0 md:-right-16 sm:-right-44 max-sm:max-w-[300px]' alt="" />
                </figure>
            </div>
        </div>
    )
}

export default OfferBanner