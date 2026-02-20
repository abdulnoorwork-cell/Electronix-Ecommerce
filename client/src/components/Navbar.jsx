import React from 'react'
import logo from '../assets/main-logo-3.png'
import { LiaFacebookF } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import { FaWhatsapp } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { useRef } from 'react';
import { LuUserRound } from "react-icons/lu";
import { useState } from 'react';
import { useEffect } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu,setMobileMenu] = useState(false);
  const { token, navigate,totalCartItems } = useContext(AppContext);
  const inputRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false)
      }
    })
  }, [])

  return (
    <>
      <div className='z-30 w-full sticky top-0'>
        <div className={`bg-[#994CF5] md:block hidden text-white text-xs ${sticky ? 'fixed -top-[100%]' : 'block'}`}>
          <div className="container mx-auto px-4 py-[1vh] flex justify-between items-center">
            <div className='flex items-center gap-3'>
              <span className='bg-[#E12E2E] py-[5px] px-3 text-xs rounded-[20px] font-medium'>HOT</span>
              <h6 className='leading-none'>FREE Express Shipping On Orders $99+</h6>
            </div>
            <div className='flex items-center gap-5'>
              <div className='flex items-center text-[16px] gap-3'>
                <a href='#'><LiaFacebookF /></a>
                <a href='#'><FaXTwitter /></a>
                <a href='#'><LuInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full sticky top-0 bg-white border-b`}>
          <div className='container mx-auto px-4 py-[2vh] flex items-center justify-between'>
            <figure className="logo">
              <Link to={'/'}>
                <img src={logo} alt="" />
              </Link>
            </figure>
            <nav className='text-sm lg:flex font-medium hidden items-center gap-5 text-gray-700'>
              <NavLink to={'/'} onClick={()=>scrollTo(0,0)} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Home</p></NavLink>
              <NavLink to={'/about'} onClick={()=>scrollTo(0,0)} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>About Us</p></NavLink>
              <NavLink to={'/shop'} onClick={()=>scrollTo(0,0)} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Shop</p></NavLink>
              <NavLink to={'/blogs'} onClick={()=>scrollTo(0,0)} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Blog</p></NavLink>
              <NavLink to={'/contact'} onClick={()=>scrollTo(0,0)} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Contact Us</p></NavLink>
              <Link to={'/admin'} className='text-xs border px-5 p-1 border-gray-800 text-gray-800 rounded-full font-normal' style={{fontFamily:'Outfit'}}>Admin Panel</Link>
            </nav>
            <div className='flex items-center justify-between text-gray-700 gap-5'>
              <div className='items-center gap-3 sm:flex hidden'>
                <span className='text-2xl'><FiPhoneCall /></span>
                <div className='text-gray-700'>
                  <h6 className='leading-[1.2em] text-xs'>Call Us Now</h6>
                  <h5>+92-3197-45367</h5>
                </div>
              </div>
              <div onClick={()=>{token ? navigate('/cart') : navigate('/login');scrollTo(0,0)}} className='relative cursor-pointer'>
                <Link className='text-[22px]'><BsCart /></Link>
                {token ? <span className='bg-[#E12E2E] text-white rounded-full text-[11px] font-medium absolute -top-2 -right-2 h-[1.4em]  min-w-[1.4em] text-center leading-[1.5em]'>{totalCartItems === 0 || totalCartItems === '' || totalCartItems === null ? '0' : totalCartItems}</span> : <span className='bg-[#E12E2E] text-white rounded-full text-[11px] font-medium absolute -top-2 -right-2 h-[1.4em]  min-w-[1.4em] text-center leading-[1.5em]'>0</span>}
              </div>
              {token ? <span onClick={() => navigate('/my-account')} className='text-[22px] cursor-pointer'><LuUserRound /></span> : <span onClick={() => navigate('/login')} className='text-[22px] cursor-pointer'><LuUserRound /></span>}
              <span onClick={()=>setMobileMenu(true)} className='text-xl lg:hidden block cursor-pointer'><RiMenu3Line /></span>
              <nav className={`centered-container z-50 lg:hidden flex flex-col mx-auto w-[92%] sm:w-[400px] text-center text-sm font-medium bg-white justify-center items-center gap-5 text-gray-700 py-20 rounded-md ${mobileMenu ? 'block' : 'hidden'}`}>
                <span onClick={()=>setMobileMenu(false)} className='text-lg p-1 rounded absolute top-1 right-1 bg-red-500 text-white cursor-pointer'><MdClose /></span>
                <NavLink onClick={()=>setMobileMenu(false)} to={'/'} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Home</p></NavLink>
                <NavLink onClick={()=>setMobileMenu(false)} to={'/about'} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>About Us</p></NavLink>
                <NavLink onClick={()=>setMobileMenu(false)} to={'/shop'} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Shop</p></NavLink>
                <NavLink onClick={()=>setMobileMenu(false)} to={'/blogs'} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Blog</p></NavLink>
                <NavLink onClick={()=>setMobileMenu(false)} to={'/contact'} className={`px-2 hover:text-[#994CF5] transition-all duration-200`}><p>Contact Us</p></NavLink>
                <Link to={'/admin'} className='text-xs border px-5 p-1 border-gray-800 text-gray-800 rounded-full font-normal' style={{fontFamily:'Outfit'}}>Admin Panel</Link>
              </nav>
            </div>
            <div onClick={()=>setMobileMenu(false)} className={`w-full h-screen fixed top-0 left-0 bg-black/50 z-30 ${mobileMenu ? 'block' : 'hidden'}`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar