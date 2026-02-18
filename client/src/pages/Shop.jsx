import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import { useEffect } from 'react'
import search_icon from '../assets/search_icon.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Shop = () => {
    const { products } = useContext(AppContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState()
    const [search, setSearch] = useState()
    const [showSearch, setShowSearch] = useState(true)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [rowPerPage, setRowPerPage] = useState(8)
    // const indexOfLastItem = currentPage * rowPerPage;
    // const indexOfFirstItem = indexOfLastItem - rowPerPage;
    // const totalPages = Math.ceil(products?.length / rowPerPage);
    // const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    // const toggleSubCategory = (e) => {
    //     if (toggleSubCategory.includes(e.target.value)) {
    //         settoggleSubCategory(prev => prev.filter(item => item !== e.target.value))
    //     } else {
    //         settoggleSubCategory(prev => [...prev, e.target.value])
    //     }
    // }

    useEffect(() => {
        const applyFilter = () => {
            let filterProd = products.slice()
            // if(currentItems) {
            //     filterProd = currentItems
            // }
            if (search) {
                filterProd = filterProd.filter((item) => item.name?.toLowerCase().includes(search?.toLowerCase()))
            }
            if (category.length > 0) {
                filterProd = filterProd.filter((item) => category.includes(item?.category))
            }
            // if (toggleCategory.length > 0) {
            //     filterProd = filterProd.filter((item) => toggleCategory.includes(item?.toggleCategory))
            // }
            setFilterProducts(filterProd)
        }
        applyFilter()
    }, [category, products, search])

    useEffect(() => {
        const sortProducts = () => {
            switch (sortType) {
                case 'low-high': setFilterProducts(filterProducts?.slice().sort((a, b) => a.price - b.price))
                    break;
                case 'high-low': setFilterProducts(filterProducts?.slice().sort((a, b) => b.price - a.price))
                default:
                    break;
            }
        }
        sortProducts()
    }, [sortType])

    // const handlePrev = () => {
    //     setCurrentPage((prev)=> Math.max(prev -1,1));
    // }
    // const handleNext = () => {
    //     setCurrentPage((prev)=>Math.min(prev +1,totalPages))
    // }

    return (
        <>
            {/* Search */}
            <div className='border-t border-b bg-[rgba(235,235,235,1)] text-center'>
                <div className="inline-flex items-center justify-center border bg-white px-5 py-2 my-5 mx-3 rounded-full sm:w-2/5">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search here...' />
                    <img src={search_icon} className='w-4' alt="" />
                </div>
            </div>
            <div className='container mx-auto px-3 flex flex-col md:flex-row gap-1 sm:gap-8 pt-8 sm:pt-10'>
                {/* Filter Options */}
                <div className="min-w-60 flex flex-col">
                    <p className="text-gray-800 font-semibold text-2xl leading-none sm:mb-3 mb-2">Filter Products
                        {/* <img src={assets.dropdown_icon} className={`h-3 sm:hidden`} alt="" /> */}
                    </p>
                    {/* Category Filter */}
                    <div className={`border border-gray-300 pl-5 py-3 mt-2.5 sm:block`}>
                        <p className='mb-3 font-medium text-gray-800 sm:text-lg'>Categories</p>
                        <div className='flex flex-col gap-2 sm:text-sm text-[13px] font-normal text-gray-600'>
                            <p className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={'Video Games'} onChange={toggleCategory} />Video Games
                            </p>
                            <p className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={'Video & Audios'} onChange={toggleCategory} /> Videos & Audios
                            </p>
                            <p className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={'Smart Watch'} onChange={toggleCategory} />Smart Watch
                            </p>
                            <p className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={'Phones & Tablets'} onChange={toggleCategory} />Phones & Tablets
                            </p>
                            <p className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={'Home Appliances'} onChange={toggleCategory} />Home Appliances
                            </p>
                        </div>
                    </div>

                    <div className={`border border-gray-300 pl-5 py-3 mt-2.5 sm:block`}>
                        <p className='mb-3 font-medium text-gray-800 sm:text-lg'>Type</p>
                        <div className='flex flex-col gap-2 sm:text-sm text-[13px] font-normal text-gray-600'>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Gaming Accessories'} onChange={toggleCategory} />Gaming Accessories
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Smart TV'} onChange={toggleCategory} />Smart TV
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Speakers'} onChange={toggleCategory} />Speakers
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'HeadPhones'} onChange={toggleCategory} />Headphones
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Fans'} onChange={toggleCategory} />Fans
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Others'} onChange={toggleCategory} />Others
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex-1">
                    <div className="flex justify-between text-base sm:text-2xl mb-4">
                        {/* <Title text1={'All'} text2={'Collections'} /> */}

                        {/* Product Sort */}
                        <select onChange={(e) => setSortType(e.target.value)} className='w-fit border border-gray-300 text-xs sm:text-[13px] font-medium py-[10px] text-gray-800 px-3 outline-none'>
                            <option hidden>Sort by Price</option>
                            <option value={"low-high"}>Sort by: Low to High</option>
                            <option value={"high-low"}>Sort by: High to Low</option>
                        </select>
                    </div>
                    {/* Map Products */}
                    <div className="prod grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filterProducts?.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    {/* <div className='container mx-auto px-4 w-fit flex items-center gap-4 mt-4 text-sm'>
                        <div onClick={handlePrev} className='bg-[#994CF5] text-white rounded-full active:bg-gray-800 px-6 py-2 shadow-md cursor-pointer flex items-center gap-2'>
                            <span className=''><HiOutlineArrowNarrowLeft /></span>
                            <p>Prev</p>
                        </div>
                        <div onClick={handleNext} className='bg-[#994CF5] text-white rounded-full active:bg-gray-800 px-6 py-2 shadow-md cursor-pointer flex items-center gap-2'>
                            <p>Next</p>
                            <span><HiOutlineArrowNarrowRight /></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Shop