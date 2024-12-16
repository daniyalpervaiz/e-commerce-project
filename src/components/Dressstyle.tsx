import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Dressstyle = () => {
    return (

        <div className='lg:h-[866px] h-[1300px] lg:wrapper bg-[#F0F0F0] mt-[200px] w-full'>
            <div className='flex justify-center w-full'>
                <Image src="/DressStyle.png" width={687} height={58} alt="Dress Style" className='mt-20' />
            </div>
            <div className='lg:flex lg:flex-col gap-6 ml-6'>
                {/* Casual Style */}
                
                <div className='lg:w-[1091px] lg:flex lg:gap-[40px] mt-10 w-full'>
                    <Link href="/Casual"> <div className='lg:w-[407px] h-[289px] flex bg-white rounded-[20px] gap-2 lg:ml-10' >
                        <p className='relative top-5 left-14 text-[36px] font-bold'>Casual</p>
                        <Image src="/casual.png" width={300} height={300} alt="Casual Design" className='rounded-[20px]' />
                    </div></Link>
                    {/* Formal Style */}

                    <div className='lg:w-[684px] h-[289px] lg:flex rounded-[20px] bg-white'>
                        <p className='relative top-5 left-20 text-[36px] font-bold'>Formal</p>
                        <Image src="/formal.png" width={500} height={300} alt="Formal Design" className='rounded-[20px]' />
                    </div>
                </div>

                <div className='lg:w-[1091px] lg:flex'>

                    {/* Party Style */}
                    <div className='lg:w-[684px] h-[289px] lg:flex rounded-[20px] bg-white lg:ml-10'>
                        <p className='relative top-5 left-20 text-[36px] font-bold'>Party</p>
                        <Image src="/party.png" width={600} height={300} alt="Formal Design" className='rounded-[20px]' />
                    </div>

                    {/* Gym Style */}
                    <div className='w-[407px] h-[289] lg:flex bg-white rounded-[20px] gap-2 lg:ml-28' >
                        <p className='relative top-5 left-14 text-[36px] font-bold'></p>
                        <Image src="/gym.png" width={600} height={300} alt="Casual Design" />
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Dressstyle
