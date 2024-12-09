import Card from "@/components/Card";
import Dressstyle from "@/components/Dressstyle";
import Happycustomer from "@/components/Happycustomer";
import Hero from "@/components/Hero";
import Image from "next/image";



export default function Home() {
  return (
    <div>
    
      <Hero />
      <Image src="/newarrivals.png" width={403} height={58} alt="New Arrivals" className="wrapper mt-[100px] mb-[50px] " />
      <Card>

        <div className='flex'>
          <div className="flex flex-col">
            <Image src="/shirt.png" alt="shirt" width={295} height={298} className="rounded-[20px]" />
            <h1 className="text-[20px]">T-SHIRT WITH TAPE DETAILS</h1>
            <div className="flex items-center gap-2">
            <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span>4.5/5</span>
            </div>
            <span className="text-[24px] font-bold">$120</span>
          </div>

        </div>
        <div className="flex flex-col ml-5">
          <Image src="/bluejeans.png" alt="shirt" width={265} height={298} className="rounded-[20px] " />
          <h1 className="text-[20px]">SKINNY FIT JEANS</h1>
          <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span>3.5/5</span>
          </div>
          <div className="flex items-center">
            <span className="text-[24px] font-bold">$240 </span>
            <span className="line-through text-gray-400 ml-2 ">$160</span>
            <span className="bg-[#FF33331A] w-[58px] h-[28px] text-center text-red-400 text-[12px] rounded-[62px] ml-4 font-medium pt-[6px] ">-20%</span>
          </div>




        </div>
        <div className="flex flex-col">
          <Image src="/checkshirt.png" alt="shirt" width={295} height={298} className="rounded-[20px]" />
          <h1 className="text-[20px]">CHECKERED SHIRT</h1>
          <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span>4.5/5</span>
          </div>
          <span className="text-[24px] font-bold">$180</span>
        </div>
        <div className="flex flex-col">
          <Image src="/orangetshirt.png" alt="shirt" width={295} height={298} className="rounded-[20px]" />
          <h1 className="text-[20px]">SLEEVE STRIPED T-SHIRT</h1>
          <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span>4.5/5</span>
          </div>
          <div className="flex items-center">
            <span className="text-[24px] font-bold">$130 </span>
            <span className="line-through text-gray-400 ml-2 ">$160</span>
            <span className="bg-[#FF33331A] w-[58px] h-[28px] text-center text-red-400 text-[12px] rounded-[62px] ml-4 font-medium pt-[6px] ">-30%</span>
          </div>
        </div>
        <div className="wrapper pl-[490px] pt-14  " >
          <button className="w-[218px] h-[52px] rounded-[62px] border-2 border-gray-200">View All</button>
        </div>

      </Card>
      <Image src="/topselling.png" width={403} height={58} alt="New Arrivals" className="wrapper mt-[250px] mb-[50px]" />
      <Card>




        <div className='flex'>
          <div className="flex flex-col">
            <Image src="/grayshirt.png" alt="shirt" width={295} height={298} className="rounded-[20px]" />
            <h1 className="text-[20px]">VERTICAL STRIPED SHIRT</h1>
            <div className="flex items-center gap-2">
            <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span>5.0/5</span>
            </div>
            <div className="flex items-center">
              <span className="text-[24px] font-bold">$212 </span>
              <span className="line-through text-gray-400 ml-2 ">$232</span>
              <span className="bg-[#FF33331A] w-[58px] h-[28px] text-center text-red-400 text-[12px] rounded-[62px] ml-4 font-medium pt-[6px] ">-20%</span>
            </div>
          </div>

        </div>
        <div className="flex flex-col ">
          <Image src="/orangeshirt1.png" alt="shirt" width={295} height={298} className="rounded-[20px] " />
          <h1 className="text-[20px]">COURAGE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span>4.0/5</span>
          </div>

          <span className="text-[24px] font-bold">$145 </span>





        </div>
        <div className="flex flex-col">
          <Image src="/shorts.png" alt="shirt" width={295} height={298} className="rounded-[20px]" />
          <h1 className="text-[20px]">LOOSE FIT BERMUDA SHORTS</h1>
          <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;</span>
          
          <span>3.0/5</span>
          </div>
          <span className="text-[24px] font-bold">$80</span>
        </div>
        <div className="flex flex-col">
          <Image src="/jeans.png" alt="shirt" width={250} height={280} className="rounded-[20px]" />
          <h1 className="text-[20px]">FADED SKINNY JEANS</h1>
          <div className="flex items-center gap-2">
          <span className="text-[20px] font-normal text-[#FFC633]">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span>4.5/5</span>
          </div>
          <span className="text-[24px] font-bold">$210 </span>

        </div>
        <div className="wrapper pl-[490px] pt-14  " >
          <button className="w-[218px] h-[52px] rounded-[62px] border-2 border-gray-200">View All</button>
        </div>



      </Card>
      <Dressstyle />
      <Happycustomer/>
     

    </div>

  );
}
