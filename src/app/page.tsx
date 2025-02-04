
import { NewArrivals } from "@/components/NewArrival";
import Dressstyle from "@/components/Dressstyle";
import Happycustomer from "@/components/Happycustomer";
import Hero from "@/components/Hero";
import Topselling from "@/components/Topselling";



export default function Home() {
  return (
    <div>

      <Hero /> 
      <NewArrivals />
      <Topselling />  
      <Dressstyle />
      <Happycustomer />

    </div>

  );
}
