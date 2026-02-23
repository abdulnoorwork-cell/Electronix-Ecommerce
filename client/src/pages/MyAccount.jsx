import React, { useEffect, useRef, useState } from 'react'
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { RiHomeLine } from "react-icons/ri";
import { LuCircleUser } from "react-icons/lu";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import toast from 'react-hot-toast';
import profile_image from '../assets/profile_image.png';
import PageBanner from '../components/PageBanner'
import { IoClose } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import cross_icon from '../assets/cross_icon.svg'

const MyAccount = () => {
    const [label, setLabel] = useState('My details')
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState(false);
    const { userData, backendUrl, userId, fetchUser, token, userOrders, currency, navigate, fetchUserOrders } = useContext(AppContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState(profile_image);

    const file = useRef();

    const fetchUserData = async () => {
        if (token) {
            try {
                let response = await axios.get(`${backendUrl}/api/user/userdetail/${userId}`, { withCredentials: true })
                if (response.data) {
                    setName(response.data[0].name)
                    setEmail(response.data[0].email);
                    setPhone(response.data[0].phone);
                    setPreviewImage(JSON.parse(response?.data[0]?.image))
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const updateUserHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('image', image || '');
            let response = await axios.put(`${backendUrl}/api/user/update/${userId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            if (response.data.success) {
                setLoading(false)
                toast.success(response.data.messege);
                fetchUser();
                setModel(false)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error(error.response.data.messege);
        }
    }

    const imageHandler = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            setImage(file)
            setPreviewImage(fileReader?.result)
        }
    }

    const logout = () => {
        localStorage.removeItem('User')
        toast.success('Logout Successfully')
        setTimeout(() => {
            window.location.reload()
            navigate('/login')
        }, 1000)
    }

    const deleteOrder = async (order_id) => {
        if (token) {
            if (window.confirm('Are you sure to cancelled order')) {
                try {
                    let response = await axios.delete(`${backendUrl}/api/order/delete-order/${order_id}`, { withCredentials: true })
                    if (response.data.success) {
                        toast.success(response.data.messege)
                        fetchUserOrders();
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    return (
        <div>
            <PageBanner text={'My Account'} />
            <div className='container mx-auto px-3'>
                <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-800 font-medium mt-8 mb-5">
                    <Link to={'/'}>
                        <span className='text-xl'>
                            <RiHomeLine />
                        </span>
                    </Link>
                    <TfiAngleRight />
                    <span className="text-[#994CF5]">My Account</span>
                </div>
                <div className=''>
                    <div className='flex md:flex-row flex-col gap-6'>
                        {/* Sidebar */}
                        <div className='my_account_sidebar md:w-[250px] text-sm sm:text-[15px] w-full md:flex md:flex-col grid grid-cols-3 gap-2'>
                            <div onClick={() => setLabel('My details')} className={`flex items-center gap-2 px-3 py-2 rounded bg-gray-100 cursor-pointer ${label === 'My details' ? 'border' : 'border-none'}`}>
                                <LuCircleUser />
                                <p className='text-gray-600'>My details</p>
                            </div>
                            <div onClick={() => setLabel('My orders')} className={`flex items-center gap-2 px-3 py-2 rounded bg-gray-100 cursor-pointer ${label === 'My orders' ? 'border' : 'border-none'}`}>
                                <LuCircleUser />
                                <p className='text-gray-600'>My orders</p>
                            </div>
                            <div onClick={() => setModel(true)} className='flex items-center gap-2 px-3 py-2 rounded cursor-pointer bg-gray-100'>
                                <FaRegEdit />
                                <p className='text-gray-600'>Edit Profile</p>
                            </div>
                            <div onClick={logout} className='flex items-center gap-2 px-3 py-2 rounded cursor-pointer bg-gray-100'>
                                <GrLogout />
                                <p className='text-gray-600'>Logout</p>
                            </div>
                        </div>
                        {label === 'My orders' ? <div className='bg-gray-100 rounded-lg w-full p-6 sm:p-8'>
                            <p className='text-2xl font-semibold text-gray-800 pb-4'>My orders</p>
                            {/* fetch Orders */}
                            <div className='flex flex-col gap-3'>
                                <div className='hidden lg:grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] text-xs font-medium bg-gray-800 text-white p-3 border rounded'>
                                    <label>Product</label>
                                    <label>Name</label>
                                    <label className='mx-auto'>Payment Status</label>
                                    <label className='mx-auto'>Order Status</label>
                                    <label className='mx-auto'>Payment Type</label>
                                    <label className='mx-auto'>Action</label>
                                </div>
                                {userOrders.map((item, index) => (
                                    <div key={index} className='flex flex-col sm:grid lg:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border sm:text-start text-center rounded p-5 sm:p-2 bg-white gap-3 text-[13px] text-gray-600 font-medium'>
                                        <div className='flex flex-col gap-2'>
                                            <img src={item?.image ? JSON.parse(item?.image) : null} alt="" className='w-[70px]' />
                                            <div className='flex items-center leading-none text-gray-600 gap-2'>
                                                <p>Qty: {item?.quantity}</p>
                                                <p>{currency}{item?.offerPrice}</p>
                                            </div>
                                        </div>
                                        <p>{item?.name}</p>
                                        <p className='mx-auto lg:block hidden'>{item?.payment_status}</p>
                                        <p className='mx-auto'>{item?.order_status}</p>
                                        <p className='mx-auto'>{item?.payment_method}</p>
                                        <img src={cross_icon} onClick={() => deleteOrder(item?.order_id)} alt="" className='md:h-[20px] mx-auto md:w-[20px] h-5 W-5 border border-red-400 rounded-full hover:scale-110 transition-all cursor-pointer' />
                                    </div>
                                ))}
                            </div>
                        </div> : <div className='bg-gray-100 w-full rounded-lg p-6 sm:p-8'>
                            <p className='text-2xl font-semibold text-gray-800 mb-4'>My details</p>
                            <div className='flex items-center gap-3'>
                                <figure>
                                    <img src={userData?.image ? JSON.parse(userData?.image) : previewImage} className='w-[85px] h-[85px] rounded-full' alt="" />
                                </figure>
                                <p className='text-gray-800 font-semibold text-2xl'>{userData?.name}</p>
                            </div>
                            <div className='mt-5'>
                                <p className='text-gray-800 font-medium text-lg'>Email :</p>
                                <h6 className='text-gray-600 text-sm'>{userData?.email}</h6>
                            </div>
                            <div className='mt-5'>
                                <p className='text-gray-800 font-medium text-lg'>Phone :</p>
                                <h6 className='text-gray-600 text-sm'>{userData?.phone}</h6>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className={`relative ${model ? 'block' : 'hidden'}`}>
                <form onSubmit={updateUserHandler} className='bg-white sm:p-10 p-8 z-50 fixed rounded-lg top-[50%] left-[50%] max-w-[500px] w-[93%] mx-auto h-fit shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)]' style={{ transform: 'translate(-50%,-50%)' }}>
                    <span onClick={() => setModel(false)} className='absolute top-0 right-0 bg-red-500 text-white text-xl cursor-pointer p-1'><IoClose /></span>
                    <h3 className='text-xl font-semibold'>Update Profile</h3>
                    <div className='text-sm flex flex-col gap-4 mt-5'>
                        <div className='flex flex-col gap-1 text-gray-800 w-full'>
                            <label className='ml-1'>Full Name</label>
                            <input required onChange={(e) => setName(e.target.value)} name='name' value={name} className='border bg-[#f4f7fa] border-gray-300 py-[10px] rounded-[10px] px-3.5 w-full outline-none' type="name" placeholder='Full Name' />
                        </div>
                        <div className='flex flex-col gap-1 text-gray-800 w-full'>
                            <label className='ml-1'>Email Address</label>
                            <input required onChange={(e) => setEmail(e.target.value)} name='email' value={email} className='border bg-[#f4f7fa] border-gray-300 py-[10px] rounded-[10px] px-3.5 w-full outline-none' type="email" placeholder='Email Address' />
                        </div>
                        <div className='flex flex-col gap-1 text-gray-800 w-full'>
                            <label className='ml-1'>Phone</label>
                            <input required onChange={(e) => setPhone(e.target.value)} name='phone' value={phone} className='border bg-[#f4f7fa] border-gray-300 py-[10px] rounded-[10px] px-3.5 w-full outline-none' type="number" placeholder='Phone' />
                        </div>
                        <img src={previewImage} onClick={() => file.current.click()} className='w-[75px] h-[75px] rounded-full cursor-pointer mt-1' alt="profile image" />
                        <input type="file" ref={file} onChange={imageHandler} hidden />
                        <button type='submit' className='bg-[#994CF5] mt-4 text-white px-8 py-3 rounded-full' style={{ fontFamily: 'Outfit' }}>{loading ? 'saving...' : 'Save Changes'}</button>
                    </div>
                </form>
            </div>
            {/* Overlay */}
            <div onClick={() => setModel(false)} className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-black/50 z-30 ${model ? 'block' : 'hidden'}`}></div>
        </div>
    )
}

export default MyAccount