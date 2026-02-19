import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import toast, { Toaster } from 'react-hot-toast';
import MyAccount from './pages/MyAccount'
import SingleBlog from './pages/SingleBlog'
import Blogs from './pages/Blogs'
import SingleProduct from './pages/SingleProduct'
import Shop from './pages/Shop'
import Dashboard from './pages/admin/Dashboard'
import Layout from './pages/admin/Layout'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog';
import ProductList from './pages/admin/ProductList'
import AddProduct from './pages/admin/AddProduct'
import UpdateBlog from './pages/admin/UpdateBlog'
import MainLayout from './MainLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import 'quill/dist/quill.snow.css';
import CategoryProducts from './pages/CategoryProducts';
import UpdateProduct from './pages/admin/UpdateProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Orders from './pages/admin/Orders';
import { AppContext } from './context/AppContext';
import AdminLogin from './pages/admin/Login'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const { token, isAdmin } = useContext(AppContext);
  const now = new Date();
  const item = {
    value: token,
    expiry: now.getTime() + 24 * 60 * 60 * 1000
  }
  // If expired
  if (now.getTime() > item.expiry) {
    localStorage.removeItem("User");
    return null;
  }

  useEffect(() => {
    // Scroll Animation Reveal
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-account' element={token ? <MyAccount /> : <Login />} />
          <Route path='/blog/:blogId' element={<SingleBlog />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={token ? <Cart /> : <Login />} />
          <Route path='/checkout' element={token ? <Checkout /> : <Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/shop/video-games' element={<CategoryProducts category='Video Games' />} />
          <Route path='/shop/video-&-audios' element={<CategoryProducts category='Video & Audios' />} />
          <Route path='/shop/smart-watch' element={<CategoryProducts category='Smart Watch' />} />
          <Route path='/shop/phones-&-tablets' element={<CategoryProducts category='Phones & Tablets' />} />
          <Route path='/shop/home-appliances' element={<CategoryProducts category='Home Appliances' />} />
          <Route path='/shop/headphones' element={<CategoryProducts category='HeadPhones' />} />
          <Route path='/shop/product/:productId' element={<SingleProduct />} />
        </Route>
        {isAdmin ? <Route path='/admin' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='listblog' element={<ListBlog />} />
          <Route path='listproduct' element={<ProductList />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='updateblog/:blogId' element={<UpdateBlog />} />
          <Route path='updateproduct/:productId' element={<UpdateProduct />} />
          <Route path='listorders' element={<Orders />} />
        </Route> : <Route path='/admin' element={<AdminLogin />} />}
      </Routes>
      <Toaster />
    </div>
  )
}

export default App