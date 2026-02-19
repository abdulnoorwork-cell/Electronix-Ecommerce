import React from 'react'
import PageBanner from '../components/PageBanner'
import { TfiMapAlt } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { TbMailForward } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";

const Contact = () => {
  return (
    <div>
      <PageBanner text={'Contact Us'} />
      <div className="container mx-auto px-4 mt-10">
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
          <div data-aos="fade-right" className='flex items-center sm:gap-4 gap-3 sm:justify-center'>
            <span className='bg-white text-[#994CF5] sm:py-[20px] py-[18px] px-[18px] sm:px-[23px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] border-[5px] border-gray-100 rounded-full h-full text-2xl sm:text-[30px]'><TfiMapAlt /></span>
            <div>
              <p className='text-gray-800 sm:text-xl text-lg font-medium'>Location Address</p>
              <h6 className='text-gray-600 text-sm sm:mt-1'>9066 Green Lake Driven</h6>
            </div>
          </div>
          <div data-aos="fade-up" className='flex items-center sm:gap-4 gap-3 sm:justify-center'>
            <span className='bg-white text-[#994CF5] sm:py-[20px] py-[18px] px-[18px] sm:px-[23px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] border-[5px] border-gray-100 rounded-full h-full text-2xl sm:text-[30px]'><FiPhoneCall /></span>
            <div>
              <p className='text-gray-800 sm:text-xl text-lg font-medium'>WhatsApp Us</p>
              <h6 className='text-gray-600 text-sm sm:mt-1'>(1800)-88-66-990-990</h6>
            </div>
          </div>
          <div data-aos="fade-left" className='flex items-center sm:gap-4 gap-3 sm:justify-center'>
            <span className='bg-white text-[#994CF5] sm:py-[20px] py-[18px] px-[18px] sm:px-[23px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] border-[5px] border-gray-100 rounded-full h-full text-2xl sm:text-[30px]'><TbMailForward /></span>
            <div>
              <p className='text-gray-800 sm:text-xl text-lg font-medium'>Email Address</p>
              <h6 className='text-gray-600 text-sm sm:mt-1'>nowap75192@desiys.com</h6>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col items-center gap-8 mt-10 border-t pt-10 border-gray-100'>
          <div data-aos="fade-right" className='w-full max-w-xl'>
            <h2 className='text-gray-800 2xl:text-5xl xl:text-4xl text-3xl font-bold'>Get In Touch And Feel Free To Contact Us!</h2>
            <h6 className='text-gray-600/90 mt-6 text-sm mb-6'>Torquent ut iusto odio ut sunt quae, sagittis massa dicta euismod, architecto, animi architecto magnam alias porttitor mollis facilis corporis duis pharetra? Atque posuere, lacus tristique labore pulvinar? Molestias sint perspiciatis.</h6>
            <div className='flex sm:flex-row flex-col items-center'>
              <div className='border border-gray-100 flex flex-col gap-1 p-5 items-center text-center'>
                <h2 className='text-[#994CF5] 2xl:text-5xl text-4xl font-bold'>4.7+</h2>
                <div className='flex items-center gap-1 text-orange-500'>
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </div>
                <p className='text-gray-800 text-lg font-medium'>Review Customer</p>
                <h6 className='text-gray-600 text-sm'>Convallis earum quis vero quisque perferendis.</h6>
              </div>
              <div className='border border-gray-100 flex flex-col gap-1 p-5 items-center text-center'>
                <h2 className='text-[#994CF5] 2xl:text-5xl text-4xl font-bold'>A+</h2>
                <div className='flex items-center gap-1 text-orange-500'>
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </div>
                <p className='text-gray-800 text-lg font-medium'>Business Class</p>
                <h6 className='text-gray-600 text-sm'>Convallis earum quis vero quisque perferendis.</h6>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className='w-full'>
            <form action="https://api.web3forms.com/submit" method="POST" className='bg-white flex flex-col gap-4 py-10 mx-auto px-[30px] max-w-xl rounded-[10px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)]'>
              <input type="hidden" name="access_key" value="44a0df73-c478-46b6-af8f-27518e08c08e" />
              <input type="text" name="name" className='text-sm bg-blue-50 rounded-[10px] w-full border border-[#FFFFFF21] py-[13px] px-[18px] outline-[#994CF5]' placeholder='Your Name' />
              <input type="email" name="email" className='text-sm bg-blue-50 rounded-[10px] w-full border border-[#FFFFFF21] py-[13px] px-[18px] outline-[#994CF5]' placeholder='Your Email' />
              <input type="number" name="phone" className='text-sm bg-blue-50 rounded-[10px] w-full border border-[#FFFFFF21] py-[13px] px-[18px] outline-[#994CF5]' placeholder='Your Phone' />
              <textarea name='messege' className='text-sm bg-blue-50 rounded-[10px] min-h-40 w-full border border-[#FFFFFF21] py-[13px] px-[18px] outline-[#994CF5]' placeholder='Your Messege' />
              <button type="submit" className='font-medium text-white bg-[#994CF5] px-8 py-3 w-fit rounded-full sm:text-sm text-[13px] mt-2'>Send Messege</button>
            </form>
          </div>
        </div>
        <div className='w-full mt-10'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3179.914185858605!2d-83.76382572371777!3d37.15473994763331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4517%20Washington%20Ave.%20Manchester%2C%20Kentucky%2039495%20ashington%20Ave.%20Manchester%2C!5e0!3m2!1sen!2s!4v1766666258212!5m2!1sen!2s" className='w-full h-full min-h-[300px]' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact