import React from 'react'
import arrow from "@/app/public/arrow.png";
import WorkTogether from "@/app/public/worktogether.png";
import Image from "next/image";

function Management() {
  return (
    <div>
    {/* Work Management Section */}
    <div className="w-[1920px] h-[1588px] top-[921px] py-[140px] px-[220px] bg-[#FFFFFF] text-[#212529]">
                       {/* section 1 */}
      <div className="w-[1480px] h-[547px] flex items-center gap-[100px]">
        <div className="w-[672px] h-[411px]">
          <div className="w-[672px] h-[288px]">
            <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-6">
              Project
              <br />
              Management
            </h1>
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Images, videos, PDFs and audio files are supported. Create
              math expressions and
              <br />
              diagrams directly from the app. Take photos with the mobile
              app and save them
              <br />
              to a note.
            </p>
            <div className="w-[201px] h-[63px] pt-[60px]">
              <button className="rounded-lg bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] py-5 px-10">
                <p className="font-medium">Get Started</p>
                <Image
                  src={arrow}
                  alt="arrow"
                  className="w-[14px] h-[14px]"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
      </div>
                {/* section 2 */}
      <div className="w-[1480px] h-[661px] flex items-center pt-[100px] gap-[100px]">
        <div className="w-[710px] h-[661px]">
          <Image src={WorkTogether} alt="Working Together Image" />
        </div>
        <div className="w-[670px] h-[294px] flex flex-col ">
          <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-6">
            Work together
          </h1>
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
            With whitepace, share your notes with your colleagues and
            collaborate on them.
            <br />
            You can also publish a note to the internet and share the URL
            with others.
          </p>
          <div className="w-[186px] h-[63px] pt-[60px]">
            <button className="rounded-lg bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] py-5 px-10">
              <p className="font-medium">Try it now</p>
              <Image
                src={arrow}
                alt="arrow"
                className="w-[14px] h-[14px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default Management