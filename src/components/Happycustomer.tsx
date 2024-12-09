import React from 'react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Happycustomer = () => {
    return (
        <div className='wrapper flex flex-col mb-44'>
            <div className='wrapper flex mt-[50px] items-center gap-[522px]  ' >
                <Image src="/ourhappycustomer.png" alt="customer" width={654} height={58} />


                <div className='flex gap-3'>

                    <ArrowLeft />
                    <ArrowRight />
                </div>
            </div>
            <div className='h-[240px] flex justify-evenly mt-[50px] '>
                <div className='w-[336px] h-[161.58] flex flex-col  p-6 border-2 border-[#0000001A] rounded-[20px] ml-5'>
                    <span className='text-[#FFC633] text-3xl'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                    <div className='flex'> <h1 className='font-bold *: text-[20px]'>Sarah M.</h1>
                        <span><Image src="/greentick.png" alt="customer" width={30} height={30} /></span></div>
                    <p className='text-[16px] leading-[22px] font-normal'>I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations</p>

                </div>
                <div className='w-[336px] h-[161.58] flex flex-col  p-6 border-2 border-[#0000001A] rounded-[20px]'>
                    <span className='text-[#FFC633] text-3xl'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                    <div className='flex'> <h1 className='font-bold *:text-[20px]'>Alex K.</h1>
                        <span><Image src="/greentick.png" alt="customer" width={30} height={30} /></span></div>
                    <p className='text-[16px] leading-[22px] font-normal'>Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions</p>

                </div>
                <div className='w-[336px] h-[161.58] flex flex-col  p-6 border-2 border-[#0000001A] rounded-[20px]'>
                    <span className='text-[#FFC633] text-3xl'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                    <div className='flex'> <h1 className='font-bold *:text-[20px]'>James L.</h1>
                        <span><Image src="/greentick.png" alt="customer" width={30} height={30} /></span></div>
                    <p className='text-[16px] leading-[22px] font-normal'>As someone who s always on the lookout for unique fashion pieces, I m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends</p>

                </div>
            </div>
        </div>
    )
}

export default Happycustomer
