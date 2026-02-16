import React, { useContext } from 'react'
import BlogCard from './BlogCard'
import { AppContext } from '../context/AppContext'
import { BsArrowUpRight } from "react-icons/bs";

const LatestBlog = () => {
  const { blogs,navigate } = useContext(AppContext);
  return (
    <div className='container mx-auto px-4 flex flex-col gap-5 mt-8'>
      <div className='flex items-end justify-between'>
        <p className='text-gray-800 font-semibold text-[26px]'>Latest Article</p>
        <span onClick={()=>navigate('/blogs')} className='bg-[#994CF5] text-white rounded-full p-3 cursor-pointer'>
          <BsArrowUpRight />
        </span>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
        {blogs.slice(length - 3).reverse().map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default LatestBlog