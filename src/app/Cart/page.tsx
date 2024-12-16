import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Trash2 } from 'lucide-react';
import { Tag } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
const Cart = () => {
    return (
        <div>
            <div className='wrapper mt-4 '>
                <ul className='flex text-[12px] items-center'>
                    <li>Home</li>
                    <li><ChevronRight className='w-[16px]' /></li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className='wrapper mt-6'>
                <Image src="/Your cart.png" alt="cart" width={259} height={50} />
            </div>
            <div className='wrapper mt-6 lg:flex lg:flex-row flex-col  gap-4'>
                {/* right side div */}
                <div className='w-[715px] h-[508px] py-[20px] px-[24px] border-2 border-[#0000001A] rounded-[20px]'>
                    <div className='flex w-[667px] h-[124px]'>
                        <Image src="/Frame 33.png" alt="shirt" width={124} height={124} />
                        <div className='flex justify-between w-[527px] h-[124px]'>
                            <div>
                                <h2 className='text-[20px] font-bold'>Gradient Graphic T-shirt</h2>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[14px]'>Size:</p>
                                    <p className='text-[12px] text-[#00000099]'>Large</p></div>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[14px]'>Color:</p>
                                    <p className='text-[12px] text-[#00000099]'>White</p></div>
                                <p className='mt-4 font-bold text-[20px]'>$145</p>
                            </div>
                            <div className='flex flex-col justify-between '>

                                <div className='flex justify-end'>
                                    <Trash2 className='text-red-600 w-[18px] h-[19.5px] ' />

                                </div>
                                <div className='flex w-[126px] justify-around items-center rounded-[62px] h-[44px] bg-[#F0F0F0]'>
                                    <button className='w-[24px] h-[20px] text-[30px]  px-[10px] pb-[4px] flex items-center '>-</button>
                                    <p>1</p>
                                    <button className='w-[24px] h-[20px] text-[28px] px-[1px] flex items-center pb-[3px] '>+</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <hr className='mt-6' />





                    <div className='flex w-[667px] h-[124px] mt-6'>
                        <Image src="/checkshirt.png" alt="shirt" width={124} height={124} />
                        <div className='flex justify-between w-[527px] h-[124px]'>
                            <div>
                                <h2 className='text-[20px] font-bold'>CHECKERED SHIRT</h2>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[14px]'>Size:</p>
                                    <p className='text-[12px] text-[#00000099]'>Medium</p></div>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[14px]'>Color:</p>
                                    <p className='text-[12px] text-[#00000099]'>Red</p></div>
                                <p className='mt-4 font-bold text-[20px]'>$180</p>
                            </div>
                            <div className='flex flex-col justify-between '>

                                <div className='flex justify-end'>
                                    <Trash2 className='text-red-600 w-[18px] h-[19.5px] ' />

                                </div>
                                <div className='flex w-[126px] justify-around items-center rounded-[62px] h-[44px] bg-[#F0F0F0]'>
                                    <button className='w-[24px] h-[20px] text-[30px]  px-[10px] pb-[4px] flex items-center '>-</button>
                                    <p>1</p>
                                    <button className='w-[24px] h-[20px] text-[28px] px-[1px] flex items-center pb-[3px] '>+</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <hr className='mt-6' />

                    <div className='flex w-[667px] h-[124px] mt-6'>
                        <Image src="/bluejeans.png" alt="shirt" width={124} height={124} />
                        <div className='flex justify-between w-[527px] h-[124px]'>
                            <div>
                                <h2 className='text-[20px] font-bold'>SKINNY FIT JEANS</h2>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[14px]'>Size:</p>
                                    <p className='text-[12px] text-[#00000099]'>Large</p></div>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[14px]'>Color:</p>
                                    <p className='text-[12px] text-[#00000099]'>Blue</p></div>
                                <p className='mt-4 font-bold text-[20px]'>$240</p>
                            </div>
                            <div className='flex flex-col justify-between '>

                                <div className='flex justify-end'>
                                    <Trash2 className='text-red-600 w-[18px] h-[19.5px] ' />

                                </div>
                                <div className='flex w-[126px] justify-around items-center rounded-[62px] h-[44px] bg-[#F0F0F0]'>
                                    <button className='w-[24px] h-[20px] text-[30px]  px-[10px] pb-[4px] flex items-center '>-</button>
                                    <p>1</p>
                                    <button className='w-[24px] h-[20px] text-[28px] px-[1px] flex items-center pb-[3px] '>+</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                {/* left side div */}
                <div className='w-[505px] h-[458px] py-[20px] px-[24px] border-2 border-[#0000001A] rounded-[20px]'>
                    <h2 className='text-[24px] font-bold'>Order Summary</h2>
                    <div className='w-[457px] h-[193px] flex flex-col'>
                        <div className='flex justify-between py-[4px] text-[#00000099] text-[20px] font-normal'>
                            <div>Subtotal</div>
                            <div className='text-[20px] font-bold text-black'>$565</div>
                        </div>
                        <div className='flex justify-between py-[16px] text-[#00000099] text-[20px] font-normal'>
                            <div>Discount(-20%)</div>
                            <div className='text-[#FF3333] text-[20px] font-bold'>-$113</div>
                        </div>
                        <div className='flex justify-between py-[16px] text-[#00000099] text-[20px] font-normal'>
                            <div>Delivery Fee</div>
                            <div className='text-[20px] font-bold text-black' >$15</div>
                        </div>
                        <hr />
                        <div className='flex justify-between py-[16px] text-[#00000099] text-[20px] font-normal'>
                            <div>Total</div>
                            <div className='text-[24px] font-bold text-black'>$565</div>
                        </div>
                    </div>

                    <div className='w-[457px] h-[48px] flex gap-3 mt-8'>
                        <div className='flex w-[326px]  items-center bg-[#F0F0F0]  rounded-[62px]' >
                            <Tag className='w-[80px] h-[24px] text-gray-500 rounded-[62px] bg-[#F0F0F0] ' />
                            <input type="text" className='w-[300px] rounded-[62px] text-[18px] h-[48px] pb-2 bg-[#F0F0F0]' placeholder="Add Promo Code" />
                        </div>
                        <div className='bg-black rounded-[62px] w-[119px] h-[48px] '>
                            <button className='text-white text-[16px] font-medium py-[10px] px-[38px]'>Apply</button>
                        </div>
                    </div>
                    <div className='w-[457px] h-[60px] bg-black rounded-[62px] mt-7'>
                        <button className='text-[#FFFFFF] px-[150px] py-[15px] flex items-center gap-1 text-[18px]'>Go To Checkout <ArrowRight />
                        </button>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Cart
