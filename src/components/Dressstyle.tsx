import React from 'react'
import Image from 'next/image'


const Dressstyle = () => {
    return (

        <div className='lg:h-[866px] md:h-[1050px] h-[1050px] md:wrapper bg-[#F0F0F0] mt-[200px] rounded-[20px] w-full'>
            <div className='flex justify-center w-full'>
                <Image src="/DressStyle.png" width={687} height={58} alt="Dress Style" className='mt-20' />
            </div>
            <div className='md:flex md:flex-col gap-6'>
                {/* Casual Style */}

                <div className='lg:w-[1091px] md:flex md:flex-col lg:flex-row md:gap-[40px] mt-10 w-full ml-2 '>
                    
                        <div className='md:w-[650px] lg:w-[407px]  md:h-[200px] lg:h-[289px] w-[400px] h-[190px] flex bg-white rounded-[20px] gap-2 md:ml-10' >
                            <p className='relative top-5 left-14 md:text-[36px] text-[24px] font-bold'>Casual</p>
                            <Image src="/casual.png" width={300} height={300} alt="Casual Design" className='rounded-[20px] md:w-[530px] lg:w-[300px] w-[400px]' />
                        </div>
                    {/* Formal Style */}

                    <div className='xl:w-[684px] md:w-[650px] lg:w-[450px] md:ml-10 lg:ml-0 lg:h-[289px] w-[400px] h-[190px] md:flex rounded-[20px] bg-white mt-8 md:mt-[0px]'>
                        <p className='relative md:top-5 md:left-20 top-12 left-8 md:text-[36px] text-[24px] font-bold'>Formal</p>
                        <Image src="/formal.png" width={500} height={300} alt="Formal Design" className='md:w-[530px] lg:w-[400px] xl:w-[500px] rounded-[20px]' />
                    </div>
                </div>

                <div className='lg:w-[1091px] md:flex md:flex-col lg:flex-row ml-3 md:ml-0 md:gap-4 lg:gap-0 w-full'>

                    {/* Party Style */}
                    <div className='lg:w-[684px] md:w-[650px] md:h-[200px] lg:h-[289px] w-[440px] h-[190px] lg:mr-20  md:flex   '>
                        <p className='relative md:top-5 md:left-40 top-20 left-8 md:text-[36px] text-[24px] font-bold'>Party</p>
                        <Image src="/party.png" width={600} height={300} alt="party Design" className='rounded-[20px] -ml-12 md:ml-0 lg:w-[580px]' />
                    </div>

                    {/* Gym Style */}
                    <div className='lg:w-[407px] lg:h-[289px] md:w-[700px] md:h-[200px] w-[390px] mt-16 md:mt-[1px]  h-[190px]  md:flex rounded-[20px] md:ml-[85px] lg:ml-0' >

                        <Image src="/gym.png" width={600} height={600} alt="Casual Design" className='w-[500px] h-[200px] md:h-[200px] lg:h-[285px] md:w-[600px] lg:w-[300px] xl:w-[500px]' />
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Dressstyle
