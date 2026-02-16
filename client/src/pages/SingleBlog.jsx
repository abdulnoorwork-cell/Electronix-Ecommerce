import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner'

const SingleBlog = () => {
    const { backendUrl } = useContext(AppContext);
    const { blogId } = useParams()
    const [blog, setBlog] = useState([]);
    console.log(blog)
    const fetchBog = async () => {
        try {
            let response = await axios.get(`${backendUrl}/api/blog/blog-detail/${blogId}`, { withCredentials: true });
            if (response.data) {
                setBlog(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBog();
    }, [])
    return (
        <>
            <PageBanner text={`${blog[0]?.title}`} />
            <div className='max-w-[1024px] mx-auto px-3 mt-10'>
                <figure>
                    <img src={blog[0]?.image} alt="" className='w-full' />
                </figure>
                <p className='text-gray-800/80 mt-4'>{new Date(blog[0]?.createdAt).toDateString()}</p>
                <div className='mt-4'>
                    <div className='text-gray-600 text-sm leading-[1.6em]' dangerouslySetInnerHTML={{__html: blog[0]?.description}}></div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog