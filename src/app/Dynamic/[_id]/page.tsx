"use client"
import { useEffect, useState } from "react"
import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from 'next/image';

import { Product } from "@/app/types/products";
import Swal from "sweetalert2";
import { addToCart } from "@/app/action/action";



const Dynamic: React.FC = (props: any) => {
    const [Data, setData] = useState<any>([])

    // console.log(props)

    useEffect(() => {
        const DynamicFetch = async () => {
            const fetchData = `*[_type == "products" && _id=="${props.params._id}"]{
    _id,
    category,
    name,
    description,
    price,
    discountPercent,
    isNew,
    sizes,
    colors,
    "imageUrl": image.asset->url
    }[0]`;

            const detailProducts: any = await client.fetch(fetchData)
            setData(detailProducts)
            //console.log(detailProducts)
        }
        DynamicFetch()
    }, [])

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        Swal.fire({
            position: 'top-start',             // Valid position
            icon: 'success',                   // Use lowercase 'success'
            title: `${Data.name} added to cart`, // Dynamic title
            showConfirmButton: false,          // Boolean, not a string
            timer: 1000,                       // Valid number for timer (milliseconds)
        });
        addToCart(product)
        //console.log(handleAddToCart)
    }
    console.log(Data)

    return (
        <article className='mt-12 mb-24 px-2 2xl:px-12 flex flex-col  gap-y-8'>

            <div className='border-4 border-white md:w-[60%] md:ml-[160px] lg:ml-[5px] xl:ml-[300px] flex flex-col lg:flex-row items-center
            rounded-xl'>
                <Image src={Data.imageUrl}
                    alt="product Image"
                    width={200}
                    height={200}
                    className='w-[700px] h-[600px] rounded-xl'
                />

                <div className='ml-5 mt-[-24px] flex-col'>
                    {/* Category */}
                    <h1 className='text-gray-400 uppercase font-semibold text-2xl'>{Data.category}</h1>

                    {/* Name */}
                    <h1 className='text-3xl xs:text-3xl lg:text-4xl uppercase font-bold text-blue-950 underline'>
                        {Data.name}
                    </h1>

                    {/* Rating */}
                    <h4 className='text-lg font-semibold mt-2'>
                        <span className='text-yellow-500 text-xl'>&#9733;&#9733;&#9733;&#9733;</span> 4.5/5</h4>

                    {/* Price */}
                    <div className="flex">
                        <h1 className='mt-3'><span className='text-2xl font-semibold text-green-950'>${Data.price}</span></h1>

                        {/* Discounted Percentage */}
                        <h4 className='w-[56px] h-[28px] text-sm font-bold text-red-600 bg-red-200 rounded-[16px] px-4 py-1 mt-3 ml-2'>
                            {Data.discountPercent}%
                        </h4>
                    </div>

                    {/* Description */}
                    <p className='text-gray-600 xl:text-xl mt-2 md:text-md'>
                        {Data.description}
                    </p>

                    {/* colors */}
                    <div>
                        <p className='w-[90px] h-[11px] text-gray-950 mt-2 font-semibold '>Select Colors</p>
                        <h4 className='gap-10 mt-3 ml-14'>
                            {Data.colors && Data.colors.map((color: any, index: any) => (
                                <span key={index} className='ml-2 text-[#00000099]'>
                                    {color}
                                </span>
                            ))}
                        </h4>
                    </div>

                    {/* Sizes */}
                    <div>
                        <p className='text-gray-950 mt-2 font-semibold'>Choose Size</p>
                        <h4 className='gap-10'>
                            {Data.sizes && Data.sizes.map((size: any, index: any) => (
                                <span key={index} className='mr-2 text-[#00000099]'>
                                    {size}
                                </span>
                            ))}
                        </h4>
                    </div>

                    <div className='flex space-x-4'>

                       
                      
                            <div className="bg-black text-white w-[40%] text-center h-12 py-2 rounded-2xl mt-2 text-[20px]">
                                <button
                                    onClick={(e) => handleAddToCart(e, Data)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Dynamic
