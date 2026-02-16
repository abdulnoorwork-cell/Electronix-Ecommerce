import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const RecentProducts = () => {
  const { products } = useContext(AppContext);
  return (
    <div className='container mx-auto px-4 flex flex-col gap-5 mt-10'>
      <div>
        <p className='text-gray-800 font-semibold text-[26px]'>Recent Products</p>
      </div>
      <div className='prod grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
        {products?.slice(length - 5).reverse().map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RecentProducts