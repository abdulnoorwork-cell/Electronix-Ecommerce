import React from 'react'
import { NavLink } from 'react-router-dom'
import home_icon from '../../assets/home_icon.svg'
import add_icon from '../../assets/add_icon.svg'
import list_icon from '../../assets/list_icon.svg'

const Sidebar = () => {
    return (
        <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-[15px]'>
            <NavLink end={true} to={'/admin'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 sm:px-6 lg:px-9 xl:min-w-60 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-[#994CF5]'}`}>
                <img src={home_icon} alt="" className='min-w-4 w-5' />
                <p className='hidden md:inline-block'>Dashboard</p>
            </NavLink>
            <NavLink end={true} to={'/admin/addproduct'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 sm:px-6 lg:px-9 xl:min-w-60 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-[#994CF5]'}`}>
                <img src={add_icon} alt="" className='min-w-4 w-5' />
                <p className='hidden md:inline-block'>Add Product</p>
            </NavLink>
            <NavLink end={true} to={'/admin/addblog'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 sm:px-6 lg:px-9 xl:min-w-60 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-[#994CF5]'}`}>
                <img src={add_icon} alt="" className='min-w-4 w-5' />
                <p className='hidden md:inline-block'>Add Blog</p>
            </NavLink>
            <NavLink end={true} to={'/admin/listproduct'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 sm:px-6 lg:px-9 xl:min-w-60 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-[#994CF5]'}`}>
                <img src={list_icon} alt="" className='min-w-4 w-5' />
                <p className='hidden md:inline-block'>Products List</p>
            </NavLink>
            <NavLink end={true} to={'/admin/listblog'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 sm:px-6 lg:px-9 xl:min-w-60 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-[#994CF5]'}`}>
                <img src={list_icon} alt="" className='min-w-4 w-5' />
                <p className='hidden md:inline-block'>Blog List</p>
            </NavLink>
            <NavLink end={true} to={'/admin/listorders'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 sm:px-6 lg:px-9 xl:min-w-60 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-[#994CF5]'}`}>
                <img src={list_icon} alt="" className='min-w-4 w-5' />
                <p className='hidden md:inline-block'>Order List</p>
            </NavLink>
        </div>
    )
}

export default Sidebar