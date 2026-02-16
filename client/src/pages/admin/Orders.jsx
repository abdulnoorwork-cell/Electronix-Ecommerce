import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { AppContext } from '../../context/AppContext'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { currency, backendUrl, token } = useContext(AppContext);
    const fetchAllOrders = async () => {
        try {
            let response = await axios.get(`${backendUrl}/api/order/get-orders`, { withCredentials: true })
            if (response.data) {
                setOrders(response.data)
            } else {
                console.log(error.response.data.messege);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const statusHandler = async (event, orderId) => {
        try {
            let response = await axios.post(`${backendUrl}/api/order/status`, { orderId, status: event.target.value }, { withCredentials: true })
            if (response.data.success) {
                await fetchAllOrders()
                toast.success(response.data.messege)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllOrders()
    }, [])

    return (
        <div className="flex-1 px-4 py-8 lg:py-10 lg:px-14 bg-blue-50/50">
            <h2 className="text-gray-800 font-medium mb-4">Orders List</h2>
            <div className='max-h-[80vh] mt-4 overflow-auto max-w-7xl'>
                {orders?.reverse().map((order, index) => (
                    <div key={index} className="bg-white grid xl:grid-cols-[2fr_2fr_1fr_2fr_1fr] md:grid-cols-[2fr_2fr_1fr] sm:grid-cols-2 items-center gap-4 py-4 px-3 rounded-md border border-gray-300 text-gray-800">
                        <div className="order_image_parent flex gap-2">
                            <img className="w-12 h-12 object-cover" src={order?.image ? JSON.parse(order?.image) : null} alt="product_image" />
                            <div className="flex flex-col justify-center">
                                <p className="font-medium text-sm">
                                    {order?.name} <span className={`text-[#994CF5] ${order?.quantity < 2 && "hidden"}`}>x{order?.quantity}</span>
                                </p>
                            </div>
                        </div>

                        <div className="text-sm">
                            <p className='font-medium mb-1'>{order?.full_name}</p>
                            <p className='text-[13px] text-gray-600'>{order?.address}, {order?.city}, {order?.state},{order?.zipcode}, {order?.country}</p>
                        </div>

                        <p className="font-medium text-sm my-auto text-black/70">${order?.total_amount}</p>

                        <div className="flex flex-col text-[13px]">
                            <p>Method: {order.payment_method}</p>
                            <p>Date: {new Date(order.created_at).toDateString()}</p>
                            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                        </div>
                        <select value={order?.order_status} onChange={(event) => statusHandler(event, order._id)} className='p-2 font-semibold text-xs outline-[#994CF5] w-fit'>
                            <option value="Order Placed">Order Placed</option>
                            <option value="Packing">Packing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Out for delivery">Out for delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders