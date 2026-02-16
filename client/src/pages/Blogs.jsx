import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import PageBanner from '../components/PageBanner';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const { blogs } = useContext(AppContext);
  return (
    <>
      <PageBanner text={'Blogs'} />
      <div className='container mx-auto px-4'>
        <p className='text-gray-800 font-semibold text-3xl mb-5 mt-10'>Our Blogs</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blogs