import React from 'react'
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const Header = () => {
    return (
        <div className='h-[41px] wrapper mt-[17px] flex gap-[40px]'>
            <div>
                <h1 className='w-[160px] h-[22px] font-bold text-[32px]'>SHOP.CO</h1>

            </div>


            <div className='w-[321px] h-[22px]'>
                <ul className='flex text-[16px] justify-between font-normal  pt-[10px]'>
                    <li className='flex'>Shops <ChevronDown /></li>
                    <li >On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>

                </ul>
            </div>
            <div className='w-[577px] h-[48px] bg-[#F0F0F0] rounded-[62px] flex items-center gap-[12px]'>
                <Search className="ml-5" />
                <input type="text" placeholder="Search For Products..." className='bg-[#F0F0F0] text-[16px] font-normal' />
            </div>






            <div className='flex items-center gap-[14px]'>
            <ShoppingCart className="w-[24px] h-[24px]" />
            <CircleUserRound className="w-[24px] h-[24px]" />

            </div>


        </div>
    )
}

export default Header
