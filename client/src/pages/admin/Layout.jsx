import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import logo from '../../assets/main-logo-3.png'
import { useContext } from 'react';

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    toast.success('Logout Successfully')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  return (
    <>
      <div className='flex items-center justify-between py-3 px-4 sm:px-12 border-b border-gray-200 gap-3'>
        <img src={logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={() => navigate('/admin')} />
        <button onClick={logout} className='sm:text-sm text-xs px-9 py-2.5 bg-[#994CF5] hover:bg-gray-800 font-medium transition duration-150 text-white rounded-full cursor-pointer'>Logout</button>
      </div>
      <div className='flex min-h-[95vh]'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout