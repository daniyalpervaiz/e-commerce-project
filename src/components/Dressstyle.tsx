import React from 'react'
import Image from 'next/image'

const Dressstyle = () => {
    return (
        <div className='h-[866px] wrapper bg-[#F0F0F0] mt-[200px]'>
            <div className='flex justify-center'>
                <Image src="/DressStyle.png" width={687} height={58} alt="Dress Style" className='mt-20' />
            </div>
            <div className='flex flex-col gap-6 ml-6'>
                <div className='w-[1091px] flex gap-20 mt-10  = '>
                    <div className='w-[407px] h-[289] flex bg-white rounded-[20px] gap-2 ml-10' >
                        <p className='relative top-5 left-14     text-[36px] font-bold'>Casual</p>
                        <Image src="/casual.png" width={300} height={300} alt="Casual Design" className='rounded-[20px]' />
                    </div>
                    <div className='w-[684px] h-[289px] flex rounded-[20px] bg-white'>
                        <p className='relative top-5 left-20 text-[36px] font-bold'>Formal</p>
                        <Image src="/formal.png" width={500} height={300} alt="Formal Design" className='rounded-[20px]' />
                    </div>
                </div>

                <div className='w-[1091px] flex'>

                    <div className='w-[684px] h-[289px] flex rounded-[20px] bg-white ml-10'>
                        <p className='relative top-5 left-20 text-[36px] font-bold'>Party</p>
                        <Image src="/party.png" width={600} height={300} alt="Formal Design" className='rounded-[20px]'/>
                    </div>
                    <div className='w-[407px] h-[289] flex bg-white rounded-[20px] gap-2 ml-28' >
                        <p className='relative top-5 left-14     text-[36px] font-bold'></p>
                        <Image src="/gym.png" width={600} height={300} alt="Casual Design" />
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Dressstyle
