
import Image from "next/image";
import React from "react";
import arrow from "@/app/public/arrow.png";
const Hero = () => {
  return (
    <>
        {/* Hero Section */}
        <div className="py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center w-[1920px] h-[829px]">
          <div className="w-[656px] h-[361px]">
            <div className="w-[656px] h-[238px]">
              <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6 text-white">
                Get More Done with whitepace
              </h2>
              <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
                Project management software that enables your teams to
                collaborate, plan,
                <br /> analyze and manage everyday tasks
              </p>
              <div className="w-[219px] h-[63px] pt-[60px]">
                <button className="p-[20px] rounded-lg bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px]">
                  <p className="font-medium">Try Whitespace free</p>
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="w-[14px] h-[14px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
        </div>

		 
      
    </>
  );
};

export default Hero;