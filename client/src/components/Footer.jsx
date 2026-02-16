import React from 'react'
import logo from '../assets/main-logo-3.png'
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { RxTimer } from "react-icons/rx";

const Footer = () => {
  return (
    <div className='bg-[#ECF2F7] mt-10'>
      <div className='container mx-auto px-3 text-gray-700 pt-16 pb-5 flex flex-wrap justify-between gap-12 md:gap-6'>
        <div className='max-w-80'>
          <img src={logo} alt="logo" className='mb-4' />
          <h6 className='text-sm'>
            Magnam vivamus quas vero urna officiis beatae facilisis, morbi, etiam mollis magni hymenaeos odio animi, molestiae etiam temporibus! Aptent, error irure habitant.
          </h6>
        </div>

        <div>
          <p className='text-lg text-gray-800 font-medium'>COMPANY</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><Link to={'/about'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>About</Link></li>
            <li><Link to={'/shop'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Shop</Link></li>
            <li><Link to={'/blogs'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Blog</Link></li>
            <li><Link to={'/shop'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Products</Link></li>
            <li><Link to={'/contact'} onClick={scrollTo(0,0)} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-lg text-gray-800 font-medium'>SUPPORT</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Help Center</Link></li>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Safety Information</Link></li>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Cancellation Options</Link></li>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Contact Us</Link></li>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Accessibility</Link></li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto px-4'>
        <hr className='border-gray-300 mt-6' />
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5 py-5'>
          <div className='bg-white flex items-center gap-4 rounded-[250px_50px_50px_250px] p-1'>
            <span className='bg-[#994CF5] text-white rounded-full border-[10px] border-[#ECF2F7] p-[14px] text-[28px]'><SlLocationPin /></span>
            <div>
              <h5 className='text-gray-800 font-medium'>Contact Info:</h5>
              <h6 className='text-gray-600 text-sm'>Haripur KPK Pakistan</h6>
            </div>
          </div>
          <div className='bg-white flex items-center gap-4 rounded-[250px_50px_50px_250px] p-1'>
            <span className='bg-[#994CF5] text-white rounded-full border-[10px] border-[#ECF2F7] p-[14px] text-[28px]'><MdOutlineSupportAgent /></span>
            <div>
              <h5 className='text-gray-800 font-medium'>Free Support :</h5>
              <h6 className='text-gray-600 text-sm'>+012-2563-2148</h6>
            </div>
          </div>
          <div className='bg-white flex items-center gap-4 rounded-[250px_50px_50px_250px] p-1'>
            <span className='bg-[#994CF5] text-white rounded-full border-[10px] border-[#ECF2F7] p-[14px] text-[28px]'><IoMailOpenOutline /></span>
            <div>
              <h5 className='text-gray-800 font-medium'>Orders Support:</h5>
              <h6 className='text-gray-600 text-sm'>sale@Yoursite.com</h6>
            </div>
          </div>
          <div className='bg-white flex items-center gap-4 rounded-[250px_50px_50px_250px] p-1'>
            <span className='bg-[#994CF5] text-white rounded-full border-[10px] border-[#ECF2F7] p-[14px] text-[28px]'><RxTimer /></span>
            <div>
              <h5 className='text-gray-800 font-medium'>Working Days:</h5>
              <h6 className='text-gray-600 text-sm'>Mon - Fir / 8:00 -18:00</h6>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-3'>
        <hr className='border-gray-300' />
        <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-gray-700 text-sm'>
          <p>© {new Date().getFullYear()} AbdulNoor. All rights reserved.</p>
          <ul className='flex items-center gap-4'>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Privacy</Link></li>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Terms</Link></li>
            <li><Link to={'/'} className='hover:text-[#994CF5] transition duration-100' style={{ fontFamily: 'Outfit' }}>Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer