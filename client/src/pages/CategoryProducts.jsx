import React, { useContext } from 'react'
import PageBanner from '../components/PageBanner'
import { AppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const CategoryProducts = ({ category }) => {
  const { products } = useContext(AppContext);
  console.log(products)
  console.log(category)
  return (
    <div>
      <PageBanner text={category} />
      <div className='container mx-auto px-4 mt-10'>
        <div className='prod grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
          {products.filter(prod => prod.category === category).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryProducts