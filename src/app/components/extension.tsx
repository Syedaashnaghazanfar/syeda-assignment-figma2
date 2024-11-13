import React from 'react'
import Image from "next/image";
import arrow from "@/app/public/arrow.png";

function Extension() {
  return (
    <div className="w-[1921px] h-[759px] top-[2509px] py-[140px] px-[220px] bg-[#043873] gap-[98px]  text-white flex items-center">
    <div className="w-[697px] h-[294px] gap-[60px]">
        <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-6">
        Use as Extension
        </h1>
        <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
        Use the web clipper extension, available on Chrome and Firefox, to save web pages<br/>or take screenshots as notes.
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
    <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
    </div>
  )
}

export default Extension