import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AppContext } from '../context/AppContext'
import { jwtDecode } from "jwt-decode";
import profile_image from '../assets/profile_image.png'

const Login = () => {
    const [loginModel, setLoginModel] = useState(true);
    const [passwordShow, setPasswordShow] = useState(false);
    const [signupModel, setSignupModel] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState();
    const [previewImage, setPreviewImage] = useState(profile_image);

    const { backendUrl, navigate, token } = useContext(AppContext)
    const file = useRef();
    const imageHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(file)
            setPreviewImage(reader.result)
        }
    }

    const onSignupHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('phone', phone);
            formData.append('image', image || '')
            let response = await axios.post(`${backendUrl}/api/user/signup`, formData, {
                headers: { "Content-Type": 'multipart/form-data' },
                withCredentials: true
            })
            if (response.data.success) {
                setLoading(false)
                toast.success(response.data.messege)
                setName('');
                setEmail('');
                setPassword('');
                setPhone('');
                setSignupModel(false)
                setLoginModel(true)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.response.data.messege)
            { error.response.data.messege === 'Email already exist' ? toast.error(error.response.data.messege) : null }
            setError(error.response.data)
        }
    }

    const onLoginHandler = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(`${backendUrl}/api/user/login`, { email, password }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            if (response.data.success) {
                localStorage.setItem('User', JSON.stringify(response.data))
                toast.success(response.data.messege)
                setEmail('');
                setPassword('');
                setTimeout(() => {
                    navigate('/')
                    window.location.reload();
                }, 1000)
                // Decode token
                const decoded = jwtDecode(token);

                // Calculate remaining time
                const expirationTime = decoded.exp * 1000 - Date.now();
                // Auto logout when expired
                setTimeout(() => {
                    localStorage.removeItem("User");
                    toast.error("Session expired. Please login again.");
                 navigate('/login')   
                }, expirationTime);
            }
        } catch (error) {
            console.log(error.response.data)
            setError(error.response.data)
        }
    }

    return loginModel ? (
        <div className='container mx-auto px-3 min-h-[86vh] h-full content-center justify-center'>
            <form onSubmit={onLoginHandler} className='bg-white rounded-[10px] text-sm p-[40px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] max-w-[700px] mx-auto border'>
                <h2 className='text-gray-800 text-[26px] font-semibold'>Login</h2>
                <div className='my-8 flex flex-col gap-3'>
                    <div>
                        <p className='text-gray-800 mb-2 text-[13px]'>Email Address <span className='text-[#E12E2E]'>*</span></p>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#ECF2F7] rounded-[5px] text-[#3D3D3D] placeholder:text-gray-400 py-[13px] px-[16px] text-sm w-full outline-[#994CF5]' placeholder='Email' />
                        <p className='text-red-600 mt-2 leading-none'>{error === 'Please enter your email' || error === 'No email exist' ? error : null}</p>
                    </div>
                    <div>
                        <p className='text-gray-800 mb-2 text-[13px]'>Password <span className='text-[#E12E2E]'>*</span></p>
                        <div className='flex items-center justify-between w-full outline-[#994CF5] bg-[#ECF2F7] rounded-[5px] pr-4'>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordShow ? 'text' : 'password'} className=' text-[#3D3D3D] bg-[#ECF2F7] placeholder:text-gray-400 py-[13px] px-[16px] text-sm w-full outline-none' placeholder='Password' />
                            <div className='cursor-pointer text-gray-800'>{passwordShow ? <span onClick={() => setPasswordShow(false)}><RxEyeOpen /></span> : <span onClick={() => { setPasswordShow(true) }}><GoEyeClosed /></span>}</div>
                        </div>
                        <p className='text-red-600 mt-2 leading-none'>{error === 'Please enter your password' || error === 'Incorrect Password' ? error : null}</p>
                    </div>
                    <p onClick={() => navigate('/forgot-password')} className='text-[#994CF5] font-medium cursor-pointer'>Forgot Password?</p>
                </div>
                <button type='submit' className='bg-[#994CF5] text-[#111827] font-medium text-sm py-3 px-12 rounded-full w-fit'>{loading ? 'loading...' : 'Log In'}</button>
                <p className='text-gray-800 mt-4'>Don,t have an account? <Link onClick={() => { setSignupModel(true); setLoginModel(false) }} className='text-[#994CF5]'>Signup</Link></p>
            </form>
        </div>
    ) : (
        <div className='container mx-auto px-3 min-h-[86vh] h-full mt-8  content-center justify-center'>
            <form onSubmit={onSignupHandler} className='bg-white rounded-[10px] text-sm p-[40px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] max-w-[700px] mx-auto border'>
                <h2 className='text-gray-800 text-[26px] font-semibold'>Signup</h2>
                <div className='my-8 flex flex-col gap-3'>
                    <div>
                        <p className='text-gray-800 mb-2 text-[13px]'>Your FullName <span className='text-[#E12E2E]'>*</span></p>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='bg-[#ECF2F7] rounded-[5px] text-[#3D3D3D] placeholder:text-gray-400 py-[13px] px-[16px] text-sm w-full outline-[#994CF5]' placeholder='Name' />
                        <p className='text-red-600 mt-2 leading-none'>{error === 'Please enter the name' ? error : null}</p>
                    </div>
                    <div>
                        <p className='text-gray-800 mb-2 text-[13px]'>Email Address <span className='text-[#E12E2E]'>*</span></p>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#ECF2F7] rounded-[5px] text-[#3D3D3D] placeholder:text-gray-400 py-[13px] px-[16px] text-sm w-full outline-[#994CF5]' placeholder='Email' />
                        <p className='text-red-600 mt-2 leading-none'>{error === 'Please enter the email' ? error : null}</p>
                    </div>
                    <div>
                        <p className='text-gray-800 mb-2 text-[13px]'>Password <span className='text-[#E12E2E]'>*</span></p>
                        <div className='flex items-center justify-between w-full outline-[#994CF5] bg-[#ECF2F7] rounded-[5px] pr-4'>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordShow ? 'text' : 'password'} className=' text-[#3D3D3D] bg-[#ECF2F7] placeholder:text-gray-400 py-[13px] px-[16px] text-sm w-full outline-none' placeholder='Password' />
                            <div className='cursor-pointer text-gray-800'>{passwordShow ? <span onClick={() => setPasswordShow(false)}><RxEyeOpen /></span> : <span onClick={() => { setPasswordShow(true) }}><GoEyeClosed /></span>}</div>
                        </div>
                        <p className='text-red-600 mt-2 leading-none'>{error === 'Please enter the password' || error === 'Password contains 8 characters long' ? error : null}</p>
                    </div>
                    <div>
                        <p className='text-gray-800 mb-2 text-[13px]'>Phone (Optional)</p>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className='bg-[#ECF2F7] rounded-[5px] text-[#3D3D3D] placeholder:text-gray-400 py-[13px] px-[16px] text-sm w-full outline-[#994CF5]' placeholder='Phone' />
                    </div>
                    <div>
                        <img src={previewImage} onClick={() => file.current.click()} className='w-20 rounded-full cursor-pointer' alt="profile_image" />
                        <input type="file" ref={file} onChange={imageHandler} hidden />
                    </div>
                </div>
                <button type='submit' className='bg-[#994CF5] text-[#111827] font-medium text-sm py-3 px-12 rounded-full w-fit'>{loading ? 'loading...' : 'Sign Up'}</button>
                <p className='text-gray-800 mt-4'>Already have an account? <Link onClick={() => { setSignupModel(false); setLoginModel(true) }} className='text-[#994CF5]'>Login</Link></p>
            </form>
        </div>
    )
}

export default Login