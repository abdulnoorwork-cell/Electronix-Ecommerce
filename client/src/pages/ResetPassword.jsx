import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetToken, setResetToken] = useState('')
    const { backendUrl,navigate } = useContext(AppContext);
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Password does not match')
            return
        }
        try {
            let response = await axios.post(`${backendUrl}/api/user/reset-password`, { token: resetToken, password }, {
                withCredentials: true
            })
            if (response.data.success) {
                toast.success(response.data.messege)
                console.log(response.data)
                setPassword('');
                setConfirmPassword('');
                navigate('/login')
                
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.messege)
        }
    }
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");
        if (token) {
            setResetToken(token);
            console.log(token)
        } else {
            toast.error("Reset token not found")
        }
    }, [])
    return (
        <div className='container mx-auto px-4 h-[82vh] flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit} className='bg-white rounded-[10px] text-sm p-8 shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] max-w-[500px] w-full mx-auto border'>
                <p className='text-gray-800 text-xl font-semibold'>Reset Password</p>
                <div className='text-gray-800 flex flex-col gap-2 mt-5 text-sm'>
                    <p>New Password</p>
                    <input type="password" placeholder='Enter new password' value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#ECF2F7] rounded-[5px] text-[#3D3D3D] placeholder:text-gray-400 py-3 px-[16px] text-sm w-full outline-[#994CF5]' />
                </div>
                <div className='text-gray-800 flex flex-col gap-2 mt-5 text-sm'>
                    <p>Confirm Password</p>
                    <input type="password" placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='bg-[#ECF2F7] rounded-[5px] text-[#3D3D3D] placeholder:text-gray-400 py-3 px-[16px] text-sm w-full outline-[#994CF5]' />
                </div>
                <button type="submit" className='text-white bg-[#994CF5] px-10 py-2.5 mt-5 rounded-full'>Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword