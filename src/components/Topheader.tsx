import React from 'react'
import { X } from 'lucide-react';


const Topheader = () => {
  return (
    <div className='w-full h-[38px] bg-black flex gap-[450px]'>
      <div className='w-[420px] h-[19x] flex items-center ml-[710px] '>


        <h1 className='font-normal text-[14x] text-white'>Sign up and get 20% off to your first order.</h1>
        <h1 className='font-medium underline text-[14px] text-white'>Sign Up Now</h1>


      </div>
      <p className='text-white flex items-center '> <X /></p>
    </div>
  )
}
export default Topheader
