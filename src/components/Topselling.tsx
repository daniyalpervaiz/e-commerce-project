import React from 'react'
import { Card } from './Card'
import Image from 'next/image'


const Topselling = () => {
    const items = [{
        image: "/grayshirt.png",
        title: "VERTICAL STRIPED SHIRT",
        ratingstar: "★★★★★", // Stars symbol
        rating: "5.0/5",
        Saleprice: "$212",
        originalPrice: "$232",
        priceDeduction: "-20%",

    },
    {
        image: "/orangeshirt1.png",
        title: "COURAGE GRAPHIC T-SHIRT",
        ratingstar: "★★★★", // Stars symbol
        rating: "4.0/5",
        Saleprice: "$145"



    },
    {
        image: "/shorts.png",
        title: "LOOSE FIT BERMUDA SHORTS",
        ratingstar: "★★★", // Stars symbol
        rating: "3.0/5",
        Saleprice: "$80",
    },
    {
        image: "/jeans.png",
        title: "FADED SKINNY JEANS",
        ratingstar: "★★★★★", // Stars symbol
        rating: "4.5/5",
        Saleprice: "$120",

    },

    ]
    return (

        <div className='mt-10'>
            <div className='wrapper flex flex-col '>
                <div className='wrapper flex  items-center  mt-[70px]' >
                    <Image src="/topselling.png" alt="customer" width={403} height={58} />
                </ div>

            </div>
            <div className="wrapper flex lg:flex-row flex-col md:items-center lg:space-x-1">
                {/* Render each item using the Card component */}
                {items.map((item, index) => (
                    <Card
                        key={index} // Ensure each card has a unique key
                        imagePath={item.image}
                        title={item.title}
                        stars={item.ratingstar}
                        rating={item.rating}
                        salePrice={item.Saleprice}
                        originalPrice={item.originalPrice}
                        priceDeduction={item.priceDeduction}


                    />

                ))}


            </div>
            {/* View All Top Selling Button */}
            <div className="md:ml-[240px] ml-20 lg:ml-8">
                <div className="wrapper w-[218px] h-[52px] border-1 rounded-[62px] bg-gray-200 mt-14 ">
                    <button className="pt-[16px] pr-[54px] pb-[16px] pl-[54px] ml-[24px]">View All</button>
                </div>
            </div>
        </div>
    )
}

export default Topselling
