import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
    const {addToCart} = useContext(AppContext);
    return (
        <div>
            <div className="product_card border border-gray-500/20 mx-auto relative rounded-md md:px-4 px-3 py-2 mb-3 bg-blue-50/40 max-w-[250px] w-full">
                <Link to={`/shop/product/${product?._id}`} className="group cursor-pointer flex items-center justify-center px-2">
                    <img className="group-hover:scale-105 sm:h-36 transition max-w-26 md:max-w-36" src={JSON.parse(product?.image)} alt={product.name} />
                </Link>
                <span className='absolute right-1 top-1 bg-[#FFD40C] text-gray-800 text-xs font-medium px-2 py-1 rounded-full'>-{Math.round(((product?.price - product?.offerPrice) / product?.price) * 100)}%</span>
                <div className="text-gray-500/60 text-sm">
                    <p className='text-gray-500 mb-[2px]'>{product.category}</p>
                    <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                    <div className="flex flex-col gap-3 mt-1">
                        <p className="md:text-xl text-base font-medium text-[#E12E2E]">
                            ${product.offerPrice} <span className="text-gray-500 md:text-sm text-xs line-through">${product.price}</span>
                        </p>
                        <button onClick={()=>addToCart(product?._id)} className='bg-[#994CF5] text-white text-[13px] font-medium px-6 py-2 rounded transition-all hover:bg-gray-800'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard