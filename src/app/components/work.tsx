import React from 'react';
import arrow from "@/app/public/arrow.png";
import Image from "next/image";



function Work() {
  return (
    <div>
        <div className='w-[1921px] h-[574px] top-[4080px] py-[140px] px-[220px] bg-[#043873] text-white'>
            <div className='w-[1481px] h-[294px] grid justify-items-center'>
                {/* text section */}
            <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] ">
            Your work, everywhere you are
          </h1>
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] mb-[60px]">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox<br/>and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>   
          <div className="w-[195px] h-[63px]">
            {/* button */}
            <button className="rounded-lg bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] py-5 px-10">
              <p className="font-medium">Try Taskey</p>
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

export default Work