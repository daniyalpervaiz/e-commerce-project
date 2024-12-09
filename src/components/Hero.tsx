import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
        <div className='w-full h-[663px] mt-[17px] bg-[#F2F0F1]'>
            <div className='wrapper h-[663px] flex'>
                <div className='flex flex-col'>
                    <div className='w-[577px] h-[173px] mt-[124px]  text-[64px] font-bold leading-[64px]'>
                        FINDS CLOTHES THAT MATCHES YOUR STYLE
                    </div>
                    <div className='w-[545px] h-[33px] text-[16px] font-normal text-[#00000099] leading-[22px] mt-[35px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                    <button className='w-[210px] h-[52px] bg-black rounded-[62px] text-white mt-[35px]'>Shop Now</button>
                </div>
                <Image src="/Vector1.png" alt="star" width={50} height={50} className='w-[56px] h-[56px] mt-[307px] bg-[#F2F0F1]'/>
                

                <Image src="/heropic.jpg" width={540} height={300} alt="hero-pic"  />
               
                <Image src="/Vector1.png" alt="star" width={50} height={50} className='w-[104px] h-[104px] mt-[50px] bg-[#F2F0F1] mr-[20px]'/>
            </div>

        </div>
        <div className='w-full bg-black '>

            <div className='wrapper h-[122px] flex items-center justify-around'>
                <div><Image src="/versace.png" alt="versace" width={100} height={50} className="w-[166.48px] h-[33.16px]"/></div>
                <div><Image src="/zara.png" alt="versace" width={100} height={50} className="w-[91px] h-[38px]"/></div>
                <div><Image src="/gucci.png" alt="versace" width={100} height={50} className="w-[156px] h-[36px]"/></div>
                <div><Image src="/prada.png" alt="versace" width={100} height={50} className="w-[94px] h-[32px]"/></div>
                <div><Image src="/calvin.png" alt="versace" width={100} height={50} className="w-[206.79px] h-[33.35px]"/></div>
                


            </div>



        </div>
        </div>
    )
}

export default Hero
