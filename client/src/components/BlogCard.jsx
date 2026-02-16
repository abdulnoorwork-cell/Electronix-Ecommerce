import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { LiaAngleRightSolid } from "react-icons/lia";

const BlogCard = ({ blog }) => {
    const { navigate } = useNavigate(AppContext);
    return (
        <div className="bg-white hover:-translate-y-1 transition duration-300 mx-auto">
            <Link to={`/blog/${blog?._id}`} onClick={() => scrollTo(0, 0)}>
                <img className="rounded-mdz w-full object-cover max-h-[260px] rounded-[10px]" src={blog?.image} alt="officeImage" />
            </Link>
            <h6 className='text-sm text-gray-500 mt-3 mb-1 font-medium'>{new Date(blog?.createdAt).toDateString()}</h6>
            <p className="text-gray-800 text-[22px] font-semibold">
                {blog?.title}
            </p>
            <p className="text-zinc-500 text-sm/6 mt-2 mb-0" dangerouslySetInnerHTML={{ __html: blog?.description.slice(0, 100) }}>
            </p>
            <Link to={`/blog/${blog?._id}`} onClick={() => scrollTo(0, 0)} type="button" className="transition hover:text-[#994CF5] font-medium flex items-center gap-1 cursor-pointer mt-2 py-2 rounded-md text-gray-800 text-sm">
                Read More
                <span className='text-black transition hover:text-[#994CF5]'><LiaAngleRightSolid /></span>
            </Link>
        </div>
    )
}

export default BlogCard