import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";
import star_ion from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import DOMPurify from "dompurify";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
    const [product, setProduct] = useState();
    const [mainImage, setMainImage] = useState()
    const { productId } = useParams()
    const { products, currency, addToCart, backendUrl,navigate } = useContext(AppContext);
    const getSingleProduct = async () => {
        try {
            let response = await axios.get(`${backendUrl}/api/product/product-detail/${productId}`, { withCredentials: true })
            if (response.data) {
                setProduct(response.data[0]);
                setMainImage(JSON.parse(response.data[0]?.image))
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleProduct();
    }, [productId])

    console.log(product)

    return product && (
        <div className="container mx-auto px-4 mt-10">
            <div className="flex flex-col lg:flex-row 2xl:gap-16 xl:gap-14 lg:gap-10 gap-6 w-[90%] mx-auto">
                <div className="flex gap-3 w-full">
                    {/* <div className="flex flex-col gap-3">
                        <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                            <img src={JSON.parse(product?.image)} onClick={()=>setMainImage(product?.image)} alt="" />
                        </div>
                    </div> */}

                    <div className="w-full">
                        <img src={JSON.parse(product?.image)} alt="Selected product" className="w-full h-fit border border-gray-500/30 rounded overflow-hidden bg-gray-50" />
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-gray-800/90 xl:block hidden font-medium text-[13px] 2xl:text-sm mb-4 2xl:mb-5">
                        <span>Home</span> /
                        <span> Products</span> /
                        <span> {product.category}</span> /
                        <span className="text-[#994CF5]"> {product.name}</span>
                    </p>
                    <p className="2xl:text-4xl text-3xl font-semibold mb-2 text-gray-800">{product.name}</p>
                    <div className="flex items-center gap-1">
                        <img src={star_ion} alt="" className="w-[14px]" />
                        <img src={star_ion} alt="" className="w-[14px]" />
                        <img src={star_ion} alt="" className="w-[14px]" />
                        <img src={star_ion} alt="" className="w-[14px]" />
                        <img src={star_dull_icon} alt="" className="w-[14px]" />
                    </div>
                    <div className="mt-5 flex items-center gap-3 2xl:text-2xl text-xl sm:text-[22px]">
                        <p className="text-gray-500/70 font-medium line-through">{currency}{product.price}.00</p>
                        <p className="font-medium text-[#E12E2E] underline">{currency}{product.offerPrice}.00</p>
                    </div>

                    {/* <h6 className="text-lg font-medium mt-5 text-gray-800">About Product</h6> */}
                    <div className="text-gray-800/80 mt-5 text-sm" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product?.about) }}>
                    </div>
                    <h6 className="text-gray-800 font-medium text-sm flex gap-2 mt-6">Category: <p className="text-[#994CF5]">{product?.category}</p></h6>
                    <div className="flex items-center mt-8 gap-4 text-[13px] sm:text-sm">
                        <button onClick={()=>addToCart(product?._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button onClick={()=>{addToCart(product?._id);navigate('/checkout')}} className="w-full py-3.5 cursor-pointer font-medium bg-[#994CF5] text-white hover:bg-gray-800 transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            {/* Description and reviews */}
            <div className="mt-10 w-[90%] mx-auto">
                <div className="flex">
                    <div className="border px-8 py-2.5 cursor-pointer text-gray-800 text-[13px] sm:text-sm">Description</div>
                    {/* <div className="border px-5 py-3 cursor-pointer">Review (122)</div> */}
                </div>
                <p className="flex flex-col gap-4 border px-4 sm:px-6 py-6 text-gray-800/80 text-sm" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product?.description) }}>
                </p>
            </div>
            <div className="mt-8 flex flex-col gap-5 w-[90%] mx-auto">
                <p className='text-gray-800 font-semibold text-[26px]'>Related Products</p>
                <div className='prod grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                    {products?.filter(prod => prod.category === product.category).slice(0, 5).reverse().map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;