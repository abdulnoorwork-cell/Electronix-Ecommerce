import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import cross_icon from '../../assets/cross_icon.svg'
import { useContext } from 'react';
import edit_icon from '../../assets/edit_icon.png'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { backendUrl, navigate } = useContext(AppContext);

  const fetchProducts = async () => {
    let response = await axios.get(`${backendUrl}/api/product/get-products`, { withCredentials: true })
    if (response.data) {
      setProducts(response.data);
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

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className='flex-1 px-4 py-8 lg:py-10 lg:px-14 bg-blue-50/50'>
      <h1 className='text-gray-800 font-medium'>Products List</h1>
      <div className='mt-4 max-w-4xl shadow rounded-lg bg-white'>
        <div className='w-full text-sm text-gray-800'>
          <div className='sm:grid md:grid-cols-[1fr_2fr_1fr_1fr_1fr] sm:grid-cols-[1fr_2fr_1fr_1fr] hidden gap-2 py-[14px] px-2 shadow text-xs uppercase font-semibold'>
            <label>Product</label>
            <label>Product Title</label>
            <label className='mx-auto'>Category</label>
            <label className='mx-auto max-md:hidden'>Date</label>
            <label className='mx-auto'>Action</label>
          </div>
          <div className='overflow-auto h-[75vh] scrollbar-hide relative'>
            {products?.reverse().map((product, index) => (
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
  )
}

export default ProductList