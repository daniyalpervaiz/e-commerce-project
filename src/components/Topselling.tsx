"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'


const Topselling = () => {

const [Products,setProduct]=useState([])




    useEffect(() => {
        const FetchedData = async () => {
            const query = `*[_type=="products"][0...6]{
                _id,
                name,
                price,
                category,
                "imageUrl": image.asset->url
                
                }`
                
              
            const fetch_products = await client.fetch(query)
            setProduct(fetch_products)
            console.log(fetch_products)
       

           
        }
        FetchedData()
    }, [])

    return (

        <div className='mt-10' id="topselling">
            <div className='wrapper flex flex-col '>
                <div className='wrapper flex  items-center mt-[70px]' >
                    <Image src="/topselling.png" alt="customer" width={403} height={58} />
                </ div>

            </div>
            <div className="wrapper grid md:grid-cols-2 md:space-x-2 lg:grid-cols-3 grid-col-1 md:items-center lg:space-x-6 mt-4 space-y-5">

                {Products.map((item: any,index:any) => (
                    <div key={index}>

                        <div className='h-[450px] border-2'><Image src={urlFor(item.imageUrl).url()} width={300} height={150} className='h-full w-full' alt="pic" /></div>
                        <h1 className="text-[20px] font-bold">{item.name}</h1>
                        <p className="text-[24px] font-bold text-black ">Price:${item.price}</p> <br />
                        <p className='text-[24px]'>Category: <span className="text-[20px]">{item.category}</span></p>
                        <Link href={`Dynamic/${item._id}`}><div className='w-full bg-black text-center text-white text-[18px] h-[30px] py-[2px] rounded-xl'><button>More Detail</button>
                        </div>
                        </Link>
                    </div>

                ))}


            </div>
          
        </div>
    )
}

export default Topselling
