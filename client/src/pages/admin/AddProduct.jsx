import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import upload_area from '../../assets/upload_area.svg'
import { useContext } from 'react';
import Quill from 'quill'

const AddProduct = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null)
  const editorRef2 = useRef(null);
  const quillRef2 = useRef(null)
  const navigate = useNavigate()
  const { backendUrl, token } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [about, setAbout] = useState();
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('description', quillRef2.current.root.innerHTML);
      formData.append('about', quillRef.current.root.innerHTML);
      formData.append('price', price);
      formData.append('offerPrice', offerPrice);
      formData.append('image', image);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, { withCredentials: true })
      if (response.data.success) {
        toast.success(response.data.messege);
        setLoading(false);
        setImage(false);
        setName('');
        setAbout('')
        setCategory('');
        setPrice('');
        setOfferPrice('')
        setDescription('')
        quillRef.current.root.innerHTML = ''
        setTimeout(()=>{
          navigate('/admin/listproduct')
        },1000)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
      toast.error(error.response.data.messege)
    }
  }

  // initiate Quill only once
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
    if (!quillRef2.current && editorRef2.current) {
      quillRef2.current = new Quill(editorRef2.current, { theme: 'snow' })
    }
  }, [])

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 px-4 py-8 lg:py-10 lg:px-14 bg-blue-50/50 text-gray-600 h-full min-h-[95vh]'>
      <div className='bg-white flex flex-col w-full max-w-3xl p-6 md:p-10 shadow rounded'>
        <div className='flex items-center'>
          <label htmlFor="image">
            <img src={!image ? upload_area : URL.createObjectURL(image)} className='rounded cursor-pointer max-h-24 max-w-24' alt="" />
            <input type="file" multiple onChange={(e) => setImage(e.target.files[0])} hidden id='image' />
          </label>
        </div>
        <p className='mt-4'>Product Name</p>
        <input type="text" placeholder='Type...' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} className='w-full mt-2 p-2 min-h-10 text-gray-600 placeholder:font-light bg-[#f6fafd] border border-gray-300 outline-none rounded text-sm' required />
        <p className='mt-4 mb-2'>About</p>
        <div ref={editorRef} className='w-full relative bg-[#f6fafd] border border-gray-300 min-h-[80px]'>
        </div>
        <p className='mt-4 mb-2'>Description</p>
        <div ref={editorRef2} className='w-full relative bg-[#f6fafd] border border-gray-300 min-h-[130px]'>
        </div>
        <div className='flex items-center w-full gap-4'>
          <div className='w-full relative'>
            <p className='mt-4'>Price</p>
            <input type='number' placeholder='120' id='price' name='price' value={price} onChange={(e) => setPrice(e.target.value)} className='w-full mt-2 p-2 border border-gray-300 bg-[#f6fafd] outline-none rounded text-sm' required></input>
          </div>
          <div className='w-full relative'>
            <p className='mt-4'>Offer Price</p>
            <input type='number' placeholder='100' id='offerPrice' name='offerPrice' value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)} className='w-full mt-2 p-2 border border-gray-300 bg-[#f6fafd] outline-none rounded text-sm' required></input>
          </div>
        </div>
        <p className='mt-4'>Category</p>
        <select defaultValue={0} onChange={(e) => setCategory(e.target.value)} name="category" className='mt-2 w-fit px-3 py-2 text-[13px] bg-[#f6fafd] border text-gray-500 border-gray-300 outline-none rounded'>
          <option disabled value={0}>--Select Category--</option>
          <option id='Video Games' value="Video Games">Video Games</option>
          <option id="Smart Watch" value="Smart Watch">Smart Watch</option>
          <option id="Phones & Tablets" value="Phones & Tablets">Phones & Tablets</option>
          <option id="Home Appliance" value="Home Appliances">Home Appliances</option>
          <option id="Video & Audios" value="Video & Audios">Video & Audios</option>
          <option id="Gaming Accessories" value="Gaming Accessories">Gaming Accessories</option>
          <option id="Smart TV" value="Smart TV">Smart TV</option>
          <option id="Speakers" value="Speakers">Speakers</option>
          <option id="Headphones" value="HeadPhones">Headphones</option>
          <option id="Fans" value="Fans">Fans</option>
          <option id="Others" value="Others">Others</option>
        </select>
        <button type='submit' className='mt-7 text-sm px-8 w-fit py-[10px] bg-[#994CF5] text-white rounded cursor-pointer'>{loading ? 'Ading...' : 'Add Product'}</button>
      </div>
    </form>
  )
}

export default AddProduct