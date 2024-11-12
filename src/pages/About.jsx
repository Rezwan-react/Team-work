import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {


  return (
   <div>
     <div className=' text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
     <img className=' w-full md:max-w-[450px]' src={assets.about_img} alt="about" />
      <div className=' flex flex-col justify-center gap-6 text-gray-600'>
        <p>Forever was born out out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platfrom where customers can easily discover, exploe, and puchase a wide range of products from the comfort of their home.</p>
        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
         <b className=' text-gray-800'>Our Mission</b>
         <p>Our mission at Forever is to empower customers eith choice, convenience, and confidence. We're dedicated to providing a seamless a shopping experience that exceeds expectation, from browsing and orderring to deliveriy and beyond.</p>
      </div>
    </div>
    <div className=' text-xl py-4'>
     <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className=' flex flex-col md:flex-row text-sm mb-20'>
     <div className=' border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
        <b>Quantity Assurance:</b>
         <p className=' text-gray-600'>We meticulouly select and vet each product to ensure it meets our stringent quality standards.</p>
     </div>
     <div className=' border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
        <b>Convenience:</b>
         <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
     </div>
     <div className=' border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
        <b>EXceptional Customar Service:</b>
         <p className=' text-gray-600'>Our team of dedicatd professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
     </div>
    </div>
    <NewsletterBox/>
   </div>
  )
}

export default About
