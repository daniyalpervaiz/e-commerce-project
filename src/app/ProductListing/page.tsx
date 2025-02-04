"use client"
import React, { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Check } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';

const ProductList = () => {
    const [Products, setProduct] = useState([])
    const [Search, setSearch] = useState('')


    useEffect(() => {
        const FetchedData = async () => {
            const query = `*[_type=="products"]{
                    _id,
                    name,
                    price,
                    category,
                    "imageUrl": image.asset->url
                    
                    }`

            const fetch_products = await client.fetch(query)
            setProduct(fetch_products)



            setSearch(fetch_products)

        }
        FetchedData()


    }, [])


    return (
        <div className='mb-72'>
            <div className='wrapper mt-4'>
                <ul className='flex text-[12px] items-center'>
                    <li>Home</li>
                    <li><ChevronRight className='w-[16px]' /></li>
                    <li>Products</li>
                </ul>
            </div>
            <div className='wrapper lg:flex lg:flex-row flex-col'>
                {/* left side div */}
                <div className='w-full lg:w-[295px] h-[1220px] py-[20px] px-[24px] border-2 border-[#0000001A] mt-2 rounded-[20px]'>
                    <div className='flex justify-between'>
                        <h2 className='text-[16px] font-bold'>Filter</h2>
                        <p> <SlidersHorizontal className='w-[16px] h-[20px] text-[#00000099]'></SlidersHorizontal></p>
                    </div>
                    <hr className='bg-gray-300 mt-4' />


                    <div className='mt-4'>
                        <ul className='text-[16px] text-[#00000099] space-y-5'>
                            <li className='flex justify-between'>T-shirts<ChevronRight className='w-[16px]' /> </li>
                            <li className='flex justify-between'>Shorts <ChevronRight className='w-[16px]' /></li>
                            <li className='flex justify-between'>Shirts <ChevronRight className='w-[16px]' /></li>
                            <li className='flex justify-between'>Hoodie <ChevronRight className='w-[16px]' /></li>
                            <li className='flex justify-between'>Jeans <ChevronRight className='w-[16px]' /></li>
                        </ul>
                    </div>
                    <hr className='bg-gray-300 mt-5' />
                    <div className='flex justify-between mt-5'>
                        <h2 className='text-[16px] font-bold'>Price</h2>
                        <p> <ChevronUp className='w-[16px]' /></p>
                    </div>
                    <div className='w-[247px] h-[6px] bg-slate-300 flex justify-center items-center'>
                        <div className='flex justify-between w-[150px] h-[6px] bg-black items-center'>
                            <div className='bg-black w-[20px] h-[20px] border-2 border-black rounded-full'  ></div>

                            <div className='bg-black w-[20px] h-[20px] border-2 border-black rounded-full' ></div>

                        </div>
                    </div>
                    <div className='flex justify-around mt-5 text-[14px]'>
                        <p>$50</p>
                        <p>$150</p>
                    </div>
                    <hr className='bg-gray-300 mt-5' />


                    <div className='flex justify-between mt-5'>
                        <h2 className='text-[16px] font-bold'>Colors</h2>
                        <p> <ChevronUp className='w-[16px]' /></p>
                    </div>
                    <div className='flex w-[247px] space-x-4 mt-5'>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#00C12B]'></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#F50606]'></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#F5DD06]'></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#F57906]'></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#06CAF5]'></p>
                    </div>
                    <div className='flex w-[247px] space-x-4 mt-3'>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#063AF5]'><Check className='text-white mx-[6px] my-[7px]' /></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#7D06F5]'></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#F506A4]'></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#FFFFFF]'></p>
                        <p className='w-[37px] h-[37px] border-2 rounded-full bg-[#000000]'></p>
                    </div>
                    <hr className='bg-gray-300 mt-5' />


                    <div className='flex justify-between mt-5'>
                        <h2 className='text-[16px] font-bold '>Size</h2>
                        <p> <ChevronUp className='w-[16px] mt-5' /></p>
                    </div>
                    <div className='flex space-x-1'>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white' >XX-Small</button>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white'>X-Small</button>
                    </div>
                    <div className='mt-1'>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white'>Small</button>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white'>Medium</button>
                    </div>
                    <div className='mt-1'>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white'>Large</button>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white'>X-Large</button>
                    </div>
                    <div className='mt-1'>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white'>XX-Large</button>
                        <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal hover:bg-black hover:text-white'>3X_Large</button>
                    </div>
                    <button className='w-[96px] h-[39px] text-[#00000099] bg-[#F0F0F0] rounded-[62px] text-[14px] font-normal mt-1'>3X_Large</button>
                    <hr className='bg-gray-300 mt-5' />



                    <div className='flex justify-between mt-5'>
                        <h2 className='text-[16px] font-bold'>Dress Style</h2>
                        <p> <ChevronUp className='w-[16px]' /></p>
                    </div>
                    <div className='mt-5'>
                        <ul className='text-[16px] text-[#00000099] space-y-5'>
                            <li className='flex justify-between'>Casual<ChevronRight className='w-[16px]' /> </li>
                            <li className='flex justify-between'>Formal <ChevronRight className='w-[16px]' /></li>
                            <li className='flex justify-between'>Party <ChevronRight className='w-[16px]' /></li>
                            <li className='flex justify-between'>Gym <ChevronRight className='w-[16px]' /></li>
                        </ul>
                    </div>


                    <div className='w-[247px] h-[48px] bg-black mt-5 rounded-[62px] '>

                        <button className='text-[#FFFFFF] py-[12px] px-[82px] text-[14px]'>Apple Filter</button>
                    </div>
                    <hr className='bg-gray-300 mt-5' />

                </div>






                {/* right side div */}
                <div className='w-full '>
                    <div className='w-full h-[43px] flex justify-between items-center '>
                        <h1 className='md:text-[32px] text-[28px] font-semibold '>Products</h1>
                      <div className='md:w-[350px] md:h-[48px] bg-[#F0F0F0] rounded-lg md:rounded-[62px] md:flex md:items-center  md:gap-[12px] w-[280px] '>

                            <input type="text" placeholder="Search For Products..." className='bg-[#F0F0F0] md:text-[16px] text-[14px] font-normal md:px-10 px-2 ' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                        </div>

                       





                    </div>
                    <div className='grid lg:grid lg:grid-cols-3 grid-col-1 md:flex md:flex-col md:items-center lg:space-x-4 mt-[24px]'>{
                        Products.filter((element: any) => (element.name.toLowerCase()).includes(Search))
                            .map((item: any, index: any) => {
                                return (
                                    <div key={index}>

                                        <div className='h-[450px] border-2'><Image src={urlFor(item.imageUrl).url()} width={300} height={150} className='h-full w-full' alt="pic" /></div>
                                        <h1 className="text-[20px] font-bold">{item.name}</h1>
                                        <p className="text-[24px] font-bold text-black ">Price:${item.price}</p> <br />
                                        <p className='text-[24px]'>Category: <span className="text-[20px]">{item.category}</span></p>
                                        <Link href={`Dynamic/${item._id}`}><div className='w-full bg-black text-center text-white text-[18px] h-[30px] py-[2px] rounded-xl'><button>More Details</button>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            })}
                    </div>
                    <div className='grid lg:grid lg:grid-cols-3 grid-col-1 md:flex md:flex-col md:items-center lg:space-x-4 mt-[24px]'>{
                        Products.map((item: any, index: any) => {
                            return (
                                <div key={index}>

                                    <div className='h-[450px] border-2'><Image src={urlFor(item.imageUrl).url()} width={300} height={150} className='h-full w-full' alt="pic" /></div>
                                    <h1 className="text-[20px] font-bold">{item.name}</h1>
                                    <p className="text-[24px] font-bold text-black ">Price:${item.price}</p> <br />
                                    <p className='text-[24px]'>Category: <span className="text-[20px]">{item.category}</span></p>
                                    <Link href={`Dynamic/${item._id}`}><div className='w-full bg-black text-center text-white text-[18px] h-[30px] py-[2px] rounded-xl'><button>More Details</button>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <hr className='mt-14' />
                    <div className='lg:flex lg:justify-between flex gap-2 items-center mt-2' >
                        <div className='w-[110px] h-[36px] text-[14px] font-medium flex gap-1 items-center border-2 border-[#0000001A] rounded-[8px] px-[14px] py-[8px]'><ArrowLeft className='w-[20px] h-[20px]' />Previous</div>
                        <div className='flex lg:w-[292px] w-[200px] ' >
                            <p className='w-[40px] h-[40] rounded-[8px] text-[16px] font-medium text-[#00000080]'>1</p>
                            <p className='w-[40px] h-[40] rounded-[8px] text-[16px] font-medium text-[#00000080]'>2</p>
                            <p className='w-[40px] h-[40] rounded-[8px] text-[16px] font-medium text-[#00000080]'>3</p>
                            <p className='w-[40px] h-[40] rounded-[8px] text-[#00000080]'>...</p>
                            <p className='w-[40px] h-[40] rounded-[8px] text-[16px] font-medium text-[#00000080]'>4</p>
                            <p className='w-[40px] h-[40] rounded-[8px] text-[16px] font-medium text-[#00000080]'>5</p>
                            <p className='w-[40px] h-[40] rounded-[8px] text-[16px] font-medium text-[#00000080]'>6</p>

                        </div>
                        <div className='w-[86px] h-[36px] text-[14px] font-medium flex gap-1 items-center border-2 border-[#0000001A] rounded-[8px] px-[14px] py-[8px]'>Next<ArrowRight className='w-[20px] h-[20px]' /></div>
                    </div>
                </div>





            </div>





        </div>
    )
}

export default ProductList
