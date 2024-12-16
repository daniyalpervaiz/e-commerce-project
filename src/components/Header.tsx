import React from 'react'
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const Header = () => {
    return (
        <div className='h-[41px] md:wrapper mt-[17px] flex gap-[20px] md:gap-[40px] w-full'>
            <div>
                <h1 className='md:w-[160px] md:h-[22px] w-[100px] font-bold text-[24px] md:text-[32px]'>SHOP.CO</h1>

            </div>


            <div className='md:w-[321px] md:h-[22px] w-full'>
                <ul className='flex md:text-[16px] text-[10px] md:justify-between items-center gap-2  font-normal  pt-[10px]'>
                    <li className='flex items-center'>Shops <ChevronDown className='w-[14px]' /></li>
                    <li >On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>

                </ul>
            </div>
            <div className='md:w-[577px] md:h-[48px] bg-[#F0F0F0] md:rounded-[62px] md:flex md:items-center  md:gap-[12px] hidden md:visible  '>
                <Search className="ml-5 sm:block" />
                <input type="text" placeholder="Search For Products..." className='bg-[#F0F0F0] text-[16px] font-normal ' />
            </div>






            <div className='flex items-center md:gap-[14px] gap-[10px]'>
            <ShoppingCart className="md:w-[24px] md:h-[24px] w-[14px]" />
            <CircleUserRound className="md:w-[24px] md:h-[24px] w-[14px]" />

            </div>


        </div>
    )
}

export default Header


