import React from 'react'
import Image from "next/image";
import Apple from "@/app/public/Apple.png";
import Google from "@/app/public/Google.png";
import Microsoft from "@/app/public/Microsoft.png";
import Slack from "@/app/public/slack-tect.png";

function Sponsers() {
  return (
    <div>
        <div className='w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] gap-[100px] bg-white text-[#212529]'>
            <h1 className='w-[1482px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] grid justify-items-center'>
                Our sponsors                
            </h1>
            <div className="w-[1482px] h-[71px] justify-between pt-[100px]">
            <ul className='flex flex-row justify-between'>
							<li><Image src={Apple} alt="Apple Logo" className="w-[55.47px] h-[68px] gap-1"/></li>
							<li><Image src={Microsoft} alt="Microsoft Logo" className='w-[287px] h-[62px] gap-1'/></li>
							<li><Image src={Slack} alt="Slack Logo" className='w-[280px] h-[71px] gap-1'/></li>
							<li><Image src={Google} alt="Google Logo" className='w-[211px] h-[69.81px] gap-1'/></li>
						</ul>
            </div>
        </div>
    </div>
  )
}

export default Sponsers