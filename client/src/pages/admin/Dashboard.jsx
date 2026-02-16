import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import dashboard_icon_1 from '../../assets/dashboard_icon_1.svg'
import dashboard_icon_4 from '../../assets/dashboard_icon_4.svg'
import { useContext } from 'react'
import cross_icon from '../../assets/cross_icon.svg'
import edit_icon from '../../assets/edit_icon.png'

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const { backendUrl, navigate } = useContext(AppContext);

  const fetchBlogs = async () => {
    let response = await axios.get(`${backendUrl}/api/blog/get-blogs`, { withCredentials: true })
    if (response.data) {
      setBlogs(response.data);
    }
  }

  const fetchProducts = async () => {
    let response = await axios.get(`${backendUrl}/api/product/get-products`, { withCredentials: true })
    if (response.data) {
      setProducts(response.data);
    }
  }

  const deleteBlog = async (blogId) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/blog/delete/${blogId}`, { withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.messege)
        await fetchBlogs();
      }
    } catch (error) {
      toast.error(error.response.data.messege);
      console.log(error)
    }
  }

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/product/delete/${productId}`, { withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.messege)
        await fetchProducts();
      }
    } catch (error) {
      toast.error(error.response.data.messege);
      console.log(error)
    }
  }

  const fetchOrders = async () => {
    try {
      let response = await axios.get(`${backendUrl}/api/order/get-orders`, { withCredentials: true })
      if (response.data) {
        setOrders(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogs();
    fetchProducts();
    fetchOrders();
  }, [])

  return (
    <div className='flex-1 px-4 py-8 lg:px-10 bg-blue-50/50'>
      <div className='flex flex-wrap gap-4'>
        <div className='flex items-center gap-3 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={dashboard_icon_1} className='w-14' alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{products.length}</p>
            <p className='text-gray-500 font-light text-sm'>Products</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={dashboard_icon_1} className='w-14' alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{blogs.length}</p>
            <p className='text-gray-500 font-light text-sm'>Blogs</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={dashboard_icon_1} className='w-14' alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{orders?.length}</p>
            <p className='text-gray-500 font-light text-sm'>Orders</p>
          </div>
        </div>
      </div>
      {/* Products */}
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={dashboard_icon_4} alt="" />
          <p>Latest Producsts</p>
        </div>
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <div className='w-full text-sm text-gray-800'>
            <div className='sm:grid md:grid-cols-[1fr_2fr_1fr_1fr_1fr] sm:grid-cols-[1fr_2fr_1fr_1fr] hidden gap-2 py-[14px] px-2 shadow text-xs uppercase font-semibold'>
              <label>Product</label>
              <label>Product Title</label>
              <label className='mx-auto'>Category</label>
              <label className='mx-auto max-md:hidden'>Date</label>
              <label className='mx-auto'>Action</label>
            </div>
            <div>
              {products?.slice(length - 3).reverse().map((product, index) => (
                <div key={index} className='product_list border-b border-gray-300 p-2 text-[13px] grid md:grid-cols-[1fr_2fr_1fr_1fr_1fr] sm:grid-cols-[1fr_2fr_1fr_1fr] grid-cols-[1fr_3fr_2fr] gap-2 items-center'>
                  <figure>
                    <img className='main_img w-14 h-14' src={JSON.parse(product?.image)} alt="" />
                  </figure>
                  <p className='leading-[1.4em]' style={{ fontFamily: 'Outfit' }}>{product?.name}</p>
                  <p className='category mx-auto text-center leading-[1.4em]' style={{ fontFamily: 'Outfit' }}>{product?.category}</p>
                  <p className='mx-auto max-md:hidden text-center leading-[1.4em]' style={{ fontFamily: 'Outfit' }}>{new Date(product?.createdAt).toDateString()}</p>
                  <figure className=' flex text-sm items-center gap-2 sm:mx-auto'>
                    <img src={edit_icon} onClick={() => { navigate(`/admin/updateproduct/${product._id}`) }} alt="" className='md:h-[20px] md:w-[20px] h-5 W-5 hover:scale-110 transition-all cursor-pointer' />
                    <img src={cross_icon} onClick={() => deleteProduct(product._id)} alt="" className='md:h-[20px] md:w-[20px] h-5 W-5 border border-red-400 rounded-full hover:scale-110 transition-all cursor-pointer' />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* blogs */}
      <div className='max-w-4xl'>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>
        <div className='relative w-full text-sm text-gray-800 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <div className='w-full text-sm text-gray-500'>
            <div className='blog_list_title text-xs uppercase p-3 border-b text-gray-800 font-semibold grid sm:grid-cols-[1fr_2fr_1fr_1fr] grid-cols-[1fr_2fr_1fr] gap-2'>
              <label className=' l:px-6'>Blog</label>
              <label className=''>Blog Title</label>
              <label className=' max-sm:hidden'>Date</label>
              <label className='mx-auto'>Action</label>
            </div>
            <div>
              {blogs?.slice(length - 3).reverse().map((blog, index) => (
                <div key={index} className='blog_list border-b text-gray-800 border-gray-300 text-sm p-3 grid sm:grid-cols-[1fr_2fr_1fr_1fr] grid-cols-[1fr_2fr_1fr] gap-2 items-center'>
                  <figure className=''>
                    <img className='main_image h-8 w-14' src={blog.image} alt="" />
                  </figure>
                  <p className=' leading-[1.3em]' style={{ fontFamily: 'Outfit' }}>{blog.title}</p>
                  <p className=' max-sm:hidden' style={{ fontFamily: 'Outfit' }}>{new Date(blog.createdAt).toDateString()}</p>
                  <figure className=' flex text-sm items-center gap-2 mx-auto'>
                    <img src={edit_icon} onClick={() => { navigate(`/admin/updateblog/${blog._id}`) }} alt="" className='md:h-[20px] md:w-[20px] h-5 W-5 hover:scale-110 transition-all cursor-pointer' />
                    <img src={cross_icon} onClick={() => deleteBlog(blog._id)} alt="" className='md:h-[20px] md:w-[20px] h-5 W-5 border border-red-400 rounded-full hover:scale-110 transition-all cursor-pointer' />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Orders */}
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={dashboard_icon_4} alt="" />
          <p>Latest Orders</p>
        </div>
        <div className='max-w-5xl overflow-auto'>
          {orders?.slice(length - 3).reverse().map((order, index) => (
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
              <div className="flex flex-col">
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
    </div >
  )
}

export default Dashboard