import React from 'react'
import { LiaTruckSolid } from "react-icons/lia";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaCircleNotch } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const HomeSection2 = () => {
    return (
        <div className='px-4 container mx-auto'>
            <div className='sm:bg-[#ECF2F7] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:p-6 rounded-[10px] mt-5'>
                <div className='flex sm:flex-row flex-col sm:text-start text-center items-center gap-2 sm:gap-4'>
                    <span className='text-2xl bg-[#1486D8] border-2 border-white rounded-full text-white p-3'><LiaTruckSolid /></span>
                    <div>
                        <p className='text-gray-800 text-lg font-medium leading-[1.3em]'>Free Delivery</p>
                        <h6 className='text-[#333333] text-[13px]'>From $50</h6>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col sm:text-start text-center items-center gap-2 sm:gap-4'>
                    <span className='text-2xl bg-[#FFD40C] border-2 border-white rounded-full text-white p-3'><BsHandThumbsUp /></span>
                    <div>
                        <p className='text-gray-800 text-lg font-medium leading-[1.3em]'>99% Positive</p>
                        <h6 className='text-[#333333] text-[13px]'>Feedback</h6>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col sm:text-start text-center items-center gap-2 sm:gap-4'>
                    <span className='text-2xl bg-[#E12E2E] border-2 border-white rounded-full text-white p-3'><FaCircleNotch /></span>
                    <div>
                        <p className='text-gray-800 text-lg font-medium leading-[1.3em]'>365 Days</p>
                        <h6 className='text-[#333333] text-[13px]'>For Free Return</h6>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col sm:text-start text-center items-center gap-2 sm:gap-4'>
                    <span className='text-2xl bg-[#944CF5] border-2 border-white rounded-full text-white p-3'><MdOutlinePayment /></span>
                    <div>
                        <p className='text-gray-800 text-lg font-medium leading-[1.3em]'>Payment</p>
                        <h6 className='text-[#333333] text-[13px]'>Secure System</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection2