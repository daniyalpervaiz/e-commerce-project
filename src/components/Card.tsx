import React from "react";
import Image from "next/image";


const Card = (props: any) => {
    return (
        <div className="wrapper">

            {/* Ensure imagePath is consistent */}
            <Image src={props.imagePath} width={295} height={298} alt="images" className="mt-[60px]  rounded-2xl" />
            <div className='wrapper h-[80px] mt-[25px] '>
                <div className="flex flex-col">

                    <h1 className="text-[20px] font-bold">{props.title}</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-[20px] font-normal text-[#FFC633]">{props.stars}</span>
                        <span className="flex items-center ">{props.rating}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        {/* Sale price */}
                        <span className="text-[24px] font-bold text-black ">{props.salePrice}</span>
                        {/* Original price with line-through */}
                        {props.originalPrice && (<span className="text-[20px] line-through text-[#00000066] font-bold">{props.originalPrice}</span>)}

                        {/* price Deduction */}
                        {props.priceDeduction && (<span className=" w-14 h-6 items-center bg-[#FF33331A] text-[12px] font-medium px-[12px] py-[3px] text-[#FF3333] rounded-md">{props.priceDeduction}</span>)}



                    </div>
                </div>
            </div>
        </div>
    );
}

function NewArrivals() {

    const items = [{
        image: "/shirt.png",
        title: "T-SHIRT WITH TAPE DETAILS",
        ratingstar: "★★★★", // Stars symbol
        rating: "4.5/5",
        Saleprice: "$120",
    },
    {
        image: "/bluejeans.png",
        title: "Skinny Fit Jeans",
        ratingstar: "★★★", // Stars symbol
        rating: "4.5/5",
        Saleprice: "$240",
        originalPrice: "$260",
        priceDeduction: "-20%",

    },
    {
        image: "/checkshirt.png",
        title: "Checkered Shirt",
        ratingstar: "★★★★★", // Stars symbol
        rating: "4.5/5",
        Saleprice: "$180",
    },
    {
        image: "/orangetshirt.png",
        title: "Sleeve Striped T-Shirt",
        ratingstar: "★★★★", // Stars symbol
        rating: "4.5/5",
        Saleprice: "$120",
        originalPrice: "$160",
        priceDeduction: "-30%",
    },

    ]

    return (
        <div>
            <div className='wrapper flex flex-col '>
                <div className='wrapper flex mt-[70px] items-center' >
                    <Image src="/newarrivals.png" alt="customer" width={403} height={58} />
                </ div>

            </div>


            <div className="wrapper flex flex-col lg:flex-row ">
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

            {/* View All Top NewArrival Button */}
            <div className="wrapper w-[218px] h-[52px] border-1 rounded-[62px] bg-gray-200 mt-14  ">
                <button className="pt-[16px] pr-[54px] pb-[16px] pl-[54px] ml-[24px]">View All</button>
            </div>

        </div>


    );
}

export { NewArrivals, Card };
