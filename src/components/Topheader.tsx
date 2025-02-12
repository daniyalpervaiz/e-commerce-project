import React from 'react'
import { X } from 'lucide-react';


const Topheader = () => {
  return (
    <div className='w-[410px] md:w-[768px] lg:w-[1024px] 2xl:w-screen bg-black'>
    <div className='w-full h-[38px] justify-center bg-black flex'>
      <div className='flex justify-center'>
        <div className='h-[19x] lg:w-[1220px] w-full flex items-center justify-center '>


          <h1 className='font-normal md:text-[14x] lg:text-[20px] text-[12px] text-white'>Sign up and get 20% off to your first order.</h1>
          <h1 className='font-medium underline md:text-[14px] text-[10px] lg:text-[20px] text-white'>Sign Up Now</h1>


        </div>

      </div>
      <p className='text-white lg:flex items-center hidden '> <X /></p>
    </div>
    </div>
  )
}
export default Topheader
