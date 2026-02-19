import React, { useContext } from 'react'
import banner from '../assets/banner-7.jpg'
import { AppContext } from '../context/AppContext'

const HomeSection3 = () => {
    const { navigate } = useContext(AppContext);
    return (
        <div className='container mx-auto px-4 mt-10'>
            <div data-aos="fade-up" className='bg-[#ECF2F7] bg-center bg-cover rounded-[10px] 2xl:h-[330px] xl:h-[300px] h-[260px] p-7 sm:p-10 content-center' style={{backgroundImage: `url(${banner})`}}>
                <div className='max-w-[350px]'>
                    <h6 className='text-[#994CF5]'>EXCLUSIVE HEADPHONE</h6>
                    <p className='text-gray-800 font-bold sm:text-3xl xl:text-[40px] text-[28px] mb-6 mt-2' style={{lineHeight: '1.1em'}}>Discounts 50% On All Headphone</p>
                    <button onClick={()=>{navigate('/shop/headphones');scrollTo(0,0)}} className='bg-[#994CF5] text-white sm:text-sm text-xs px-10 py-[11px] rounded-full'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default HomeSection3