import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [email,setEmail] = useState('');
    const {backendUrl} = useContext(AppContext);
    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            let response =await axios.post(`${backendUrl}/api/user/forgot-password`,{email},{
                withCredentials: true
            })
            if(response.data.success){
                toast.success(response.data.messege)
                setEmail('');
            }
            console.log(response.data)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.messege)
        }
    }
  return (
    <div className='container mx-auto px-4 h-[82vh] flex flex-col items-center justify-center'>
        <form onSubmit={handleSubmit} className='bg-white rounded-[10px] text-sm p-8 shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] max-w-[500px] w-full mx-auto border'>
            <p className='text-gray-800 text-xl font-semibold'>Forgot Password</p>
            <div className='text-gray-800 flex flex-col gap-2 mt-5'>
                <label className='text-[15px]'>Email</label>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-[#ECF2F7] rounded-[5px] text-[#3D3D3D] placeholder:text-gray-400 py-3 px-[16px] text-sm w-full outline-[#994CF5]' />
            </div>
            <button type="submit" className='text-white bg-[#994CF5] px-10 py-2.5 mt-5 rounded-full'>Send Link</button>
        </form>
    </div>
  )
}

export default ForgotPassword