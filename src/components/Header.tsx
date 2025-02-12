import React from 'react'
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='h-[41px] md:wrapper mt-[17px] flex gap-[20px] md:gap-[35px] w-[410px] md:w-[768px] lg:w-[1024px] 2xl:w-screen'>
            <div>
                <Link href="/"><h1 className='md:w-[130px] md:h-[22px] w-[75px] font-bold text-[20px] md:text-[32px]'>SHOP.CO</h1></Link>

            </div>


            <div className='md:w-[321px] md:h-[22px] w-full'>
                <ul className='flex md:text-[16px] text-[12px] md:justify-between items-center gap-2  font-normal lg:pt-2 '>
                   <Link href="/ProductListing"> <li className='flex items-center'>Shops <ChevronDown className='w-[14px]' /></li></Link>
                  <Link href="#topselling"><li >On Sale</li></Link>  
                    <Link href="#newarrival"><li>New Arrivals</li></Link>
                    <li>Brands</li>

                </ul>
            </div>
            <div className='md:w-[577px] md:h-[48px] bg-[#F0F0F0] md:rounded-[62px] md:flex md:items-center md:-mt-2 md:gap-[12px] hidden md:visible  '>
                <Search className="ml-5 sm:block mb-2" />
                <input type="text" placeholder="Search For Products..." className='bg-[#F0F0F0] text-[16px] font-normal ' />
            </div>






            <div className='flex items-center md:gap-[12px] gap-[10px] md:mr-7'>
               <Link href="/Cart"> <ShoppingCart className="md:w-[24px] md:h-[24px] w-[14px]" /></Link>
                <CircleUserRound className="md:w-[24px] md:h-[24px] w-[14px]" />

            </div>


        </div>
    )
}

export default Header


