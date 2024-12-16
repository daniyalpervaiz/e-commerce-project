import React from 'react'
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import { Card } from "../../components/Card"
import Link from 'next/link';
import { Check } from 'lucide-react';

// making review cards fro map method
function ReviewsCards(props: any) {
    return (
        <div>
            <div className='lg:wrapper '>
                <div className='lg:w-[610px] lg:h-[241px] h-[300px] border-2 border-gray-400 rounded-[20px] px-[32px] py-[26px]'>
                    <div className='lg:w-[546px] lg:h-[139px] h-[160px]'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#FFC633] w-[127px] text-[22.58px] '>{props.stars}</p>
                            <div className='text-gray-500'> <Ellipsis /></div>
                        </div>
                        <div className='flex space-x-1'>
                            <h1 className='text-[20px] font-bold mt-1'>{props.title}</h1>
                            <Image src="/greentick.png" alt='verify' width={25} height={5} />
                        </div>
                        <p className='text-[#00000099] text-[16px] leading-[22px] font-normal mt-2'>{props.content}</p>


                    </div>
                    <p className='text-[#00000099] text-[16px] font-medium mt-8'>{props.date}</p>

                </div>
            </div>

        </div>
    )

}

const T_Shirt = () => {
    const allReviews = [
        {
            star:"★★★★★",
            title: "Samantha D.",
            content: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            date: "Posted on August 14, 2023"
        },
        {
            star:"★★★★",
            title: "Alex M.",
            content: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
            date: "Posted on August 15, 2023"
        },
        {
            star:"★★★",
            title: "Ethan R.",
            content: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer s touch in every aspect of this shirt.",
            date: "Posted on August 16, 2023"
        },
        {
            star:"★★★★",
            title: "Olivia P.",
            content: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It s evident that the designer poured their creativity into making this t-shirt stand out.",
            date: "Posted on August 17, 2023"
        },
        {
            star:"★★★★",
            title: "Liam K.",
            content: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. It s like wearing a piece of art that reflects my passion for both design and fashion.",
            date: "Posted on August 18, 2023"
        },
        {
            star:"★★★★",
            title: "Ava H.",
            content: "I m not just wearing a t-shirt; I m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
            date: "Posted on August 19, 2023"
        },


    ]
    const might_Like = [
        {
            image: "/image 7.png",
            title: "Polo with Contrast Trims",
            ratingstar: "★★★★", // Stars symbol
            rating: "4.0/5",
            Saleprice: "$212",
            originalPrice: "$242",
            priceDeduction: "-20%",

        },
        {
            image: "/image 8.png",
            title: "Gradient Graphic T-shirt",
            ratingstar: "★★★", // Stars symbol
            rating: "3.5/5",
            Saleprice: "$145",
          

        },
        {
            image: "/image 9.png",
            title: "Polo with Tipping Details",
            ratingstar: "★★★★", // Stars symbol
            rating: "4.5/5",
            Saleprice: "$180",

        },
        {
            image: "/image 10.png",
            title: "Black Striped T-shirt",
            ratingstar: "★★★★★", // Stars symbol
            rating: "5.0/5",
            Saleprice: "$120",
            originalPrice: "$150",
            priceDeduction: "-30%",
        },

    ]
    return (
        <div>
            <div className='wrapper'>
                <ul className='flex text-[14px] font-normal text-[#00000099;] pt-[24px]'>
                    <li className='flex'>Home<ChevronRight className='w-4' /></li>
                    <li className='flex'>Shops<ChevronRight className='w-4' /></li>
                    <li className='flex'>Men <ChevronRight className='w-4' /></li>
                    <li className='flex text-black'>T-Shirts<ChevronRight className='w-4' /></li>
                </ul>
            </div>
            <div className='md:flex wrapper'>
                <div className='grid md:grid-cols-2 grid-col-1 lg:w-[28%] '>

                    <div className=' w-[152px] h-[167px]'><Image src="/image 2.png" alt="img" width={152} height={167} /></div>
                    <div className=' w-[444px] h-[530px] grid md:row-span-3 col-span-1'><Image src="/image 1.jpg" alt="img" width={444} height={530} /></div>


                    <div className=' w-[152px] h-[167px]'><Image src="/image 5.png" alt="img" width={152} height={167} /></div>
                    <div className=' w-[152px] h-[167px]'><Image src="/image 6.png" alt="img" width={152} height={167} /></div>

                </div>
                <div className='md:ml-72 mt-2'>

                    <Image src="/One Life Graphic T-shirt.png" alt="title" width={600} height={48} />
                    <div className='flex items-center space-x-2'>
                        <p className='text-[#FFC633;] text-[30px] '>★★★★★</p>
                        <p className='text-[16px] font-normal text-[#000000]'>4.5/5</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <h3 className='text-[32px] font-bold'>$260</h3>
                        <h3 className='line-through text-[#0000004D;] text-[32px]'>$300</h3>
                        <p className='bg-[#FF33331A] text-[#FF3333] w-[72px] h-[34px] py-[5px] px-[14px] rounded-[62px]'>-40%</p>
                    </div>

                    <p className='text-[16px] font-normal text-[#00000099] lg:w-[590px] h-[33px] mt-4'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

                    <hr className='mt-8' />
                    <p className='w-[93px] h-[11px] text-[#00000099] mt-2'>Select Colors</p>
                    <div className='flex space-x-3 mt-6'>
                        <div className='w-[37px] h-[37px] rounded-full bg-[#4F4631]  '><Check className='text-white mx-[6px] my-[7px]' /></div>
                        <div className='w-[37px] h-[37px] rounded-full bg-[#314F4A] '></div>
                        <div className='w-[37px] h-[37px] rounded-full bg-[#31344F]' ></div>
                    </div>
                    <hr className='mt-8' />
                    <p className='text-[#00000099] mt-2'>Choose Size</p>
                    <div className='flex space-x-5 mt-4 '>
                        <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[86px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>Small</button>
                        <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[105px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>Medium</button>
                        <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[89px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>Large</button>
                        <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[104px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>X-Large</button>

                    </div>
                    <hr className='mt-8' />
                    <div className='flex space-x-10 mt-8'>
                        <div className='w-[170px] h-[52px] bg-[#F0F0F0] rounded-[62px] flex items-center justify-center gap-10' >
                            <p className='text-[26px]'>-</p >
                            <div className='text-[26px]'>1</div>
                            <p className='text-[26px]'>+</p >
                        </div>
                      <Link href="/Cart">  <div>
                            <button className='lg:w-[400px] w-[200px] h-[52px] bg-black text-[#F0F0F0] rounded-[62px]'>Add to Cart</button>
                        </div></Link>
                    </div>

                </div>
            </div>
            <div className='wrapper flex mt-14 justify-around text-[20px] font-normal'>
                <p className='text-[#00000099] hover:underline  hover:text-black'>Product Details</p>
                <p className='text-[#00000099] hover:underline  hover:text-black'>Rating & Reviews</p>
                <p className='text-[#00000099] hover:underline  hover:text-black'>FAQs</p>
            </div>
            <hr className='wrapper mt-2' />
            <div className='flex wrapper justify-between mt-4'>

                <div className='flex items-center space-x-2 '>
                    <h2 className='lg:text-[24px] text-[16px] font-bold'>All Reviews</h2>
                    <p className='text-[#00000099] mt-1'>(451)</p>
                </div>
                <div className='flex w-[354px] h-[48px]'>
                    <div className='bg-[#F0F0F0] rounded-[62px] w-[48px] py-[16px] px-[20px] flex justify-between'><Image src="/filter.png" alt="filter" width={20.25} height={18.75} />
                    </div>
                    <div className='flex px-[26px] py-[11px] lg:w-[120px]    h-[48px] bg-[#F0F0F0] rounded-[62px] space-x-2' >
                        <div className='text-[16px] font-medium w-[43px] h-[22px]' >Latest  </div>
                        <div className='w-[16px]' ><ChevronDown /> </div>
                    </div>
                    <div className='lg:w-[166px] w-[120px] lg:h-[48px] rounded-[62px] text-[#FFFFFF] text-[16px] font-medium bg-black px-[28px] lg:py-[12px] py-[3px]'>Write a Review</div>



                </div>
            </div>
            <div className=' lg:wrapper grid lg:grid-cols-2 space-y-1 space-x-1 mt-3'>
                {allReviews.map((item, index) => {
                    return (
                        // rendered review card
                        <ReviewsCards
                            key={index}
                            stars={item.star}
                            title={item.title}
                            content={item.content}
                            date={item.date}


                        />

                    )
                })}

            </div>
            <div className='flex justify-center bg-blue'>
                <div className='w-[230px] h-[52] rounded-[62px] border-2 py-[16px] px-[54px] border-[#0000001A] mt-4'>

                    <button className='w-[140px] h-[22px] font-medium text-[14px]'>Load More Reviews</button>
                </div>
            </div>
            <div className='wrapper flex justify-center mt-[64px]'>
                <Image src="/You might also like.png" alt='heading' width={579} height={58} />

            </div>
            <div className='wrapper flex flex-col mb-14 lg:flex-row'>
                {might_Like.map((item, index) => {
                    return (
                        // rendered card using map method
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
                    )

                })}

            </div>
        </div>

    )
}

export default T_Shirt
