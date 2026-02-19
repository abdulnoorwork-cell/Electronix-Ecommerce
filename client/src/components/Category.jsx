import React, { useContext } from 'react'
import video_game from '../assets/video_game.png'
import video_audio from '../assets/video_audio.png'
import smart_watch from '../assets/smart_watch.png'
import phone_tablet from '../assets/phone_tablet.png'
import electronics from '../assets/electronics.png'
import home_appliance from '../assets/home_appliance.png'
import { BsArrowUpRight } from "react-icons/bs";
import { AppContext } from '../context/AppContext'
import headphone from '../assets/headphone.png'

const Category = () => {
    const { products,navigate } = useContext(AppContext);
    return (
        <div className='container mx-auto px-4 flex flex-col gap-5 mt-6'>
            <div className='flex items-end justify-between'>
                <p className='text-gray-800 font-semibold text-[26px]'>Top Categories</p>
                <span className='bg-[#994CF5] text-white rounded-full p-3 cursor-pointer'>
                    <BsArrowUpRight />
                </span>
            </div>
            
            <div className='grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-6 text-sm'>
                <div data-aos="fade-right" onClick={()=>{navigate('/shop/video-games');scrollTo(0,0)}} className='bg-transparent cursor-pointer'>
                    <figure>
                        <img src={video_game} className='border border-[#ECF2F7] rounded-[10px] max-w-[180px] w-full' alt="" />
                    </figure>
                    <h5 className='text-gray-800 font-medium text-center'>Video Games</h5>
                </div>
                <div data-aos="fade-right" onClick={()=>{navigate('/shop/video-&-audios');scrollTo(0,0)}} className='bg-transparent cursor-pointer'>
                    <figure>
                        <img src={video_audio} className='border border-[#ECF2F7] rounded-[10px] max-w-[180px] w-full' alt="" />
                    </figure>
                    <h5 className='text-gray-800 font-medium text-center'>Video & Audios</h5>
                </div>
                <div data-aos="fade-up" onClick={()=>{navigate('/shop/smart-watch');scrollTo(0,0)}} className='bg-transparent cursor-pointer'>
                    <figure>
                        <img src={smart_watch} className='border border-[#ECF2F7] rounded-[10px] max-w-[180px] w-full' alt="" />
                    </figure>
                    <h5 className='text-gray-800 font-medium text-center'>Smart Watch</h5>
                </div>
                <div data-aos="fade-up" onClick={()=>{navigate('/shop/phones-&-tablets');scrollTo(0,0)}} className='bg-transparent cursor-pointer'>
                    <figure>
                        <img src={phone_tablet} className='border border-[#ECF2F7] rounded-[10px] max-w-[180px] w-full' alt="" />
                    </figure>
                    <h5 className='text-gray-800 font-medium text-center'>Phones & Tablets</h5>
                </div>
                <div data-aos="fade-left" onClick={()=>{navigate('/shop/home-appliances');scrollTo(0,0)}} className='bg-transparent cursor-pointer'>
                    <figure>
                        <img src={home_appliance} className='border border-[#ECF2F7] rounded-[10px] max-w-[180px] w-full' alt="" />
                    </figure>
                    <h5 className='text-gray-800 font-medium text-center leading-[1.3em]'>Home Appliances</h5>
                </div>
                <div data-aos="fade-left" onClick={()=>{navigate('/shop/headphones');scrollTo(0,0)}} className='bg-transparent cursor-pointer'>
                    <figure>
                        <img src={headphone} className='border border-[#ECF2F7] rounded-[10px] max-w-[180px] w-full' alt="" />
                    </figure>
                    <h5 className='text-gray-800 font-medium text-center'>HeadPhones</h5>
                </div>
            </div>
        </div>
    )
}

export default Category