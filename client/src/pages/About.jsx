import React from 'react'
import PageBanner from '../components/PageBanner'

const About = () => {
  return (
    <div>
      <PageBanner text={'About Us'} />
      <div className="container mx-auto px-4 mt-10">
        <p className="text-3xl font-semibold text-gray-800 text-center mx-auto">About our apps</p>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
          A visual collection of our most recent works - each piece crafted with intention, emotion and style.
        </p>
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 pt-10">
          <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
          <div className="py-10 border-b border-gray-200 md:py-0 md:border-r md:border-b-0 md:px-10">
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
              <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
            </div>
          </div>
          <div className="py-10 border-b border-gray-200 md:py-0 lg:border-r md:border-b-0 md:px-10">
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
              <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
            </div>
          </div>
          <div className="py-10 border-b border-gray-200 md:py-0 md:border-b-0 md:px-10">
            <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
              <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
              <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
            </div>
          </div>
        </div>
        <section className="flex flex-col mt-12 pb-4 md:flex-row items-center justify-center gap-10 max-md:px-4">
          <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
            <img className="max-w-md w-full object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
              alt="" />
            <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
              <div className="flex -space-x-4 shrink-0">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                  className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                  className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="image"
                  className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                <div
                  className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                  50+
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800">Join our developer community</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
              production-ready UI components. </p>
            <p className="mt-4">Whether you're launching a SaaS app, landing page, or dashboard, our collection of Tailwind
              CSS components is crafted to boost your development speed and improve user experience.</p>
            <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
              beautifully and scale effortlessly.</p>
            <a href="#" className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#994CF5] to-[#8A7DFF] py-3 px-8 rounded-full text-white">
              <span>Read more</span>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="#fff" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About