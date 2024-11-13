import Image from "next/image";
import React from "react";
import arrow from "@/app/public/arrow.png";


function Customize() {
  return (
    <div> 
        {/* Customix Section 2*/}
    <div className="w-[1921px] h-[812.09px] top-[3268px] py-[140px] px-[220px] bg-white gap-[98px]  text-[#212529] flex items-center">
    <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
      <div className="w-[669px] h-[411px] gap-[60px]">
          <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-6">
          Customise it<br/>to your needs
          </h1>
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
          Customise the app with plugins, custom themes and multiple text editors (Rich<br/>Text or Markdown). Or create your own scripts and plugins using the Extension<br/>API.
        </p>
        <div className="w-[171px] h-[63px] pt-[60px]">
          <button className="rounded-lg bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] py-5 px-10">
            <p className="font-medium">Let’s Go</p>
            <Image
              src={arrow}
              alt="arrow"
              className="w-[14px] h-[14px]"
            />
          </button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Customize