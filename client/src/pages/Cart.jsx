import React, { useContext } from 'react'
import PageBanner from '../components/PageBanner'
import { AppContext } from '../context/AppContext'
import bin_icon from '../assets/bin_icon.png'

const Cart = () => {
    const { cartItems, currency,totalPrice,shippingFee,removeFomCart,updateQuantity,navigate } = useContext(AppContext);
    return (
        <div>
            <PageBanner text={'Cart Page'} />
            {cartItems.length > 0 ?
                <div className="container mx-auto px-4 mb-[30px] mt-11 flex lg:flex-row flex-col gap-7">
                    <div className='lg:w-[70%] w-full bg-white border-[#d5d8dc] rounded-[10px] lg:p-9 sm:p-7 p-5 shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)]'>
                        <div className='text-gray-800 font-medium gap-5 hidden sm:grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] w-full text-sm border-b pb-3'>
                            <label>Product</label>
                            <label>Name</label>
                            <label>Price</label>
                            <label>Quantity</label>
                            <label>SubTotal</label>
                            <label>Remove</label>
                        </div>
                        {cartItems.map((product, index) => (
                            <div key={index} className='py-3 border-b text-gray-700 items-center gap-4'>
                                <div className="cart_items gap-5 grid grid-cols-[1fr_3fr_1fr] items-center sm:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] text-gray-600 text-sm font-medium">
                                    <img className='w-16 sm:w-20' src={JSON.parse(product?.image)} alt="" />
                                    <p className=''>{product?.name}</p>
                                    <p className='sm:block hidden'>{currency}{product?.offerPrice}</p>
                                    <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 outline-none' type="number" onChange={(e)=> e.target.value === 0 ? null : updateQuantity(product?._id,Number(e.target.value))} min={1} value={product.quantity} />
                                    <p>{currency}{product?.total}</p>
                                    <img onClick={()=>removeFomCart(product?._id)} src={bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='lg:w-[30%] w-full h-fit bg-white border-[#d5d8dc] rounded-[10px] lg:p-9 sm:p-7 p-5 shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] text-gray-600 font-medium'>
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
                            <p>{currency}{totalPrice === 0 ? 0 : totalPrice+shippingFee}</p>
                        </div>
                        <button onClick={()=>navigate('/checkout')} className='mt-7 text-sm hover:bg-gray-800 transition duration-150 bg-[#994CF5] text-white rounded-full px-8 py-3'>Proceed To Checkout</button>
                    </div>
                </div>
                : <p className='container mx-auto px-4 text-gray-800 font-semibold text-xl mt-5'>Cart is Empty</p>}
        </div>
    )
}

export default Cart