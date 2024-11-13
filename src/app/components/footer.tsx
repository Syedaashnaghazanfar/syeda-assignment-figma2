import React from 'react';
import Image from "next/image";
import logo from "@/app/public/Logo.png";

function Footer() {
  return (
    <div>
        <div className='w-[1920px] h-[461px] top-[5195px] bg-[#043873] flex justify-center items-center'>
            <div className='w-[1480px] h-[289px] mt-[140px]'>
                {/*Info*/}
              <div className='w-[1480px] h-[169px] flex justify-between gap-[100px] mb-[80.07px]'>
                <div className='w-[295px] h-[169px]'>
                <Image src={logo} alt='logo' className='w-[191px] h-[34px]'/>
                <div className="w-[240px] h-[120px] pt-[15px]">
                  <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]'>
                    Whitepace was created for<br/>the new ways we live and<br/>work. We make a better<br/>workspace around the world.
                  </p>
                </div>
                </div>
                {/*Info 1*/}
                <div className='w-[295px] h-[127px]'>
                  <p className='font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white'>
                    Product
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[0.02em] text-[#FFE492] pt-[16px]'>
                    Overview
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    Pricing
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    Customer stories
                  </p>
                </div>
                {/*Info  2*/}
                <div className='w-[295px] h-[130px]'>
                  <p className="font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
                    Resources
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    Blog
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    Guides & tutorials
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    Help center
                  </p>
                </div>
                {/*Info 3*/}
                <div className='w-[295px] h-[130px]'>
                <p className="font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
                    Company
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    About us
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    Careers
                  </p>
                  <p className='font-normal text-base leading-5 tracking-[-0.02em] text-white pt-[16px]'>
                    Media Kit
                  </p>
                </div>
              </div>
               
               <div className='w-[1480px] h-5 grid justify-items-center pt-[19.93px]'>
                <div className='w-[169px] h-5 '>
                  <p>
                   ©2021 Whitepace LLC.
                  </p>
                </div>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Footer