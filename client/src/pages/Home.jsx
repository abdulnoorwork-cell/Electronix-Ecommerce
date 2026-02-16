import React from 'react'
import Hero from '../components/Hero'
import HomeSection from '../components/HomeSection'
import HomeSection2 from '../components/HomeSection2'
import CategoryProducts from '../components/CategoryProducts'
import LatestBlog from '../components/LatestBlog'
import OfferBanner from '../components/OfferBanner'
import Category from '../components/Category'
import RecentProducts from '../components/RecentProducts'
import HomeSection3 from '../components/HomeSection3'

const Home = () => {
  return (
    <div>
        <Hero />
        <HomeSection />
        <HomeSection2 />
        <CategoryProducts />
        <Category />
        <HomeSection3 />
        <RecentProducts />
        <OfferBanner />
        <LatestBlog />
    </div>
  )
}

export default Home