import React, { useContext, useState } from 'react'
import PageBanner from '../components/PageBanner'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const Checkout = () => {
    const [cart] = useState([
        { product_id: 1, name: "Product 1", price: 500, quantity: 2 }
    ]);
    const [deliveryInfo, setDeliveryInfo] = useState({
        full_name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: ""
    });
    const { currency, totalPrice, shippingFee, userId, backendUrl, cartItems, navigate,getCartItems,getTotalCartItems,fetchUserOrders } = useContext(AppContext);
    const onchangeHandler = (e) => {
        setDeliveryInfo({
            ...deliveryInfo,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${backendUrl}/api/order/place-order/${userId}`, {
                items: cartItems,
                deliveryInfo,
                shipping_fee: shippingFee
            })
            if (response.data) {
                console.log(response.data)
                fetchUserOrders();
                getCartItems();
                getTotalCartItems()
                toast.success(response.data.messege)
                navigate('/my-account')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <PageBanner text={'Checkout'} />
            <div className="container mx-auto px-4">
                <div>
                    <form onSubmit={onSubmitHandler} className='flex flex-col lg:flex-row justify-between gap-6 py-5 mb-4 pt-10 sm:pt-14'>
                        {/* Left Side */}
                        <div className="flex flex-col gap-4 sm:text-sm text-xs sm:p-10 p-7 py-9 w-full lg:max-w-[600px] rounded-[10px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)]">
                            <div className="mb-3">
                                <p className='text-gray-800 font-semibold text-2xl leading-none'>Billing Details</p>
                            </div>
                            <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                <label className='ml-1'>Full Name</label>
                                <input required onChange={onchangeHandler} name='full_name' value={deliveryInfo.full_name} className='border border-gray-300 bg-[#f4f7fa] py-3 rounded-[10px] px-3.5 w-full outline-none' type="text" placeholder='First Name' />
                            </div>
                            {/* <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                <label className='ml-1'>Email Address</label>
                                <input required onChange={onchangeHandler} name='email' value={deliveryInfo.email} className='border bg-[#f4f7fa] border-gray-300 py-3 rounded-[10px] px-3.5 w-full outline-none' type="email" placeholder='Email Address' />
                            </div> */}
                            <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                <label className='ml-1'>Address</label>
                                <input required onChange={onchangeHandler} name='address' value={deliveryInfo.address} className='border bg-[#f4f7fa] border-gray-300 py-3 rounded-[10px] px-3.5 w-full outline-none' type="text" placeholder='Address' />
                            </div>
                            <div className="flex sm:gap-4 gap-3">
                                <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                    <label className='ml-1'>City</label>
                                    <input required onChange={onchangeHandler} name='city' value={deliveryInfo.city} className='border bg-[#f4f7fa] border-gray-300 py-3 rounded-[10px] px-3.5 w-full outline-none' type="text" placeholder='City' />
                                </div>
                                <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                    <label className='ml-1'>State</label>
                                    <input required onChange={onchangeHandler} name='state' value={deliveryInfo.state} className='border bg-[#f4f7fa] border-gray-300 py-3 rounded-[10px] px-3.5 w-full outline-none' type="text" placeholder='State' />
                                </div>
                            </div>
                            <div className="flex sm:gap-4 gap-3">
                                <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                    <label className='ml-1'>Zipcode</label>
                                    <input required onChange={onchangeHandler} name='postal_code' value={deliveryInfo.postal_code} className='border bg-[#f4f7fa] border-gray-300 py-3 rounded-[10px] px-3.5 w-full outline-none' type="number" placeholder='Postal Code' />
                                </div>
                                <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                    <label className='ml-1'>Country</label>
                                    <input required onChange={onchangeHandler} name='country' value={deliveryInfo.country} className='border bg-[#f4f7fa] border-gray-300 py-3 rounded-[10px] px-3.5 w-full outline-none' type="text" placeholder='Country' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 text-gray-800 w-full'>
                                <label className='ml-1'>Phone</label>
                                <input required onChange={onchangeHandler} name='phone' value={deliveryInfo.phone} className='border bg-[#f4f7fa] border-gray-300 py-3 rounded-[10px] px-3.5 w-full outline-none' type="number" placeholder='Phone' />
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='w-full max-w-[500px] h-fit bg-white border-[#d5d8dc] rounded-[10px] lg:p-9 sm:p-7 p-5 shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] text-gray-600 font-medium'>
                            <h3 className='text-xl text-gray-800 font-semibold'>Cart Totals</h3>
                            <div className='flex items-center mt-5 justify-between gap-3 border-b pb-[6px] text-[15px]'>
                                <p>Subtotal</p>
                                <p>{currency}{totalPrice}</p>
                            </div>
                            <div className='flex items-center border-b pb-[6px] mt-2 justify-between gap-3 text-[15px]'>
                                <p>Shipping Fee</p>
                                <p>{currency}{shippingFee}</p>
                            </div>
                            <div className='flex items-center mt-2 justify-between gap-3 text-[15px]'>
                                <p>Total</p>
                                <p>{currency}{totalPrice === 0 ? 0 : totalPrice + shippingFee}</p>
                            </div>
                            <button className='mt-7 text-sm hover:bg-gray-800 transition duration-150 bg-[#994CF5] text-white rounded-full px-8 py-3'>Place Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout