import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className=' flex flex-col sm:grid grid-cols-3 gap-14 my-10 text-sm'>
          <div>
            <img className=' mb-5 w-32' src={assets.logo} alt="logo" />
             <p className=' w-full md:w-2/3 text-gray-600'>Lorem Ipsum is simply dumy text of the printing and typesetting industry.Lorem Ipsume has bean the industry's standard dummy text ever since the  1500s, when on unknown printer took a galley of type and scran </p>
          </div>
          <div>
            <p className=' text-xl font-medium mb-5'>COMPANY</p>
             <ul className=' flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
             </ul>
          </div>
          <div>
            <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
             <ul className=' flex flex-col gap-1 text-gray-600'>
                <li>+880 1772367890</li>
                <li>alomgirmiahwebdeveloperbd1@gmail.com</li>

             </ul>
          </div>
        </div>
        <div>
            <hr />
            <p className=' py-5 text-center '>mdalomgir2156@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer
