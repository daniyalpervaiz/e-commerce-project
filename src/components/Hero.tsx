import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div>
            <div className='w-full md:h-[663px] h-[980px]  mt-[17px] bg-[#F2F0F1]'>
                <div className='md:wrapper  h-[663px] md:flex w-full '>
                    {/* Hero Section Title */}
                    <div className='flex flex-col w-full'>
                        <div className='md:w-[400px] md:h-[150px] lg:w-[577px] lg:h-[173px] md:mt-[100px]  lg:mt-[124px] mt-[50px]   text-[45px] md:text-[55px] lg:text-[64px] font-bold leading-[50px] md:leading-[45px] lg:leading-[64px]'>
                            FINDS CLOTHES THAT MATCHES YOUR STYLE
                        </div>
                        <div className='w-full md:w-[350px] lg:w-[545px] lg:h-[33px] text-[16px] font-normal text-[#00000099] leading-[22px] mt-[10px] md:mt-[35px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                        <Link href="/ProductListing">  <button className='md:w-[210px] md:h-[52px] bg-black rounded-[62px] text-white md:mt-[35px] mt-[24px] ml-[30px] w-[358px] h-[52px]'>Shop Now</button></Link>


                        {/* 200+ International Brands,High Quality Products,Happy Customer */}
                        <div className='md:hidden '>
                            <div className='w-[278px] h-[52px] flex space-x-10 items-center mt-[20px]  ml-[80px] '>
                                <div className='leading-5'>
                                    <p className='text-[24px] font-bold '>200+</p>
                                    <p className='text-[12px] text-[#00000099]'>International Brands</p>
                                </div>



                                <div className='leading-5'>
                                    <p className='text-[24px] font-bold'>2000+</p>
                                    <p className='text-[12px] text-[#00000099]'>High-Quality Products</p>
                                </div>

                            </div>
                            <div className='w-[278px] h-[52px] ml-[160px] leading-5 mt-[12px]'>
                                <p className='text-[24px] font-bold '>30,000+</p>
                                <p className='text-[12px] text-[#00000099]'>Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Section Image */}
                    <div className='w-full'>
                        <Image src="/Vector1.png" alt="star" width={50} height={50} className='relative top-56 left-12 md:left-1 md:top-75  w-[56px] h-[56px] bg-[#F2F0F1]' />


                        <Image src="/heropic.jpg" width={540} height={300} alt="hero-pic" className='md:w-[345px] md:h-[500px] lg:w-[540px] lg:h-[500px]' />

                        <Image src="/Vector1.png" alt="star" width={50} height={50} className='relative bottom-[450px] left-[300px] md:left-[235px] md:bottom-[500px] lg:bottom-[500px] lg:left-[340px] xl:bottom-[550px] w-[104px] h-[104px]  bg-[#F2F0F1] ' />
                    </div>
                </div>
 
            </div>
            {/* Brands Section */}
            <div className='w-full bg-black'>
                <div className='wrapper md:h-[122px] h-[120px]  md:flex md:flex-col lg:flex-row md:items-center md:justify-around'>
                    <div className='flex justify-around md:gap-20 pt-4 items-center'>

                        <Image src="/versace.png" alt="versace" width={100} height={50} className="md:w-[166.48px] md:h-[33.16px] w-[116px]" />
                        <Image src="/zara.png" alt="versace" width={100} height={50} className="md:w-[91px] md:h-[38px] w-[63px]" />
                        <Image src="/gucci.png" alt="versace" width={100} height={50} className="md:w-[156px] md:h-[36px] w-[109px]" />
                    </div>
                    <div className='flex justify-around md:gap-20 pt-5 items-center'>
                        <Image src="/prada.png" alt="versace" width={100} height={50} className="md:w-[94px] md:h-[32px] w-[127px]" />
                        <Image src="/calvin.png" alt="versace" width={100} height={50} className="md:w-[206.79px] md:h-[33.35px] w-[134px]" />
                    </div>



                </div>



            </div>
        </div>
    )
}

export default Hero
