import React from "react";
import arrow1 from '../Assets/Images/Arrow1.png'
import arrow2 from '../Assets/Images/Arrow2.png'
import resumeImg from '../Assets/Images/resumeImg.png'
import laptop from '../Assets/Images/laptop.png'
const FeatureHome = () => {
  return (
    <div className="flex flex-col gap-16">

      <div className=" flex items-center justify-center">
        <span className="font-medium text-5xl text-mutedRed my-8">Features</span>
      </div>

      <div className=" flex justify-between flex-wrap lg:gap-20 lg:flex-nowrap" >
        <div className="flex flex-col gap-2" >
          <h6 className="font-medium text-2xl text-textHeading"> Teamplates</h6>
          <p className="font-normal text-[17px] text-textSecondary">
            A variety of pre-designed and customizable resume templates catering to different industries, roles, and design preferences.
          </p>
          <span className="border-2 my-4 rounded-sm border-mutedRed bg-[#0073E6] bg-opacity-5 flex items-center justify-center px-40">
            <img src={resumeImg} alt="resume" />
          </span>
          <h6 className="font-medium text-2xl text-textHeading"> Customization Options</h6>
          <p className="font-normal text-[17px] text-textSecondary">
            Ability to customize templates by changing colors, layouts, and adding personal branding elements, drag-and-drop functionality to rearrange sections and content blocks.
          </p>
        </div>

        <div className="flex flex-col gap-5 ">
          <span>
            <img src={arrow1} alt="arrow" />
          </span>
          <span className=" flex flex-col gap-2">
            <h6 className="font-medium text-2xl text-textHeading"> Customization Options</h6>
            <p className="font-normal text-[17px] text-textSecondary">
              Ability to customize templates by changing colors, layouts, and adding personal branding elements, drag-and-drop functionality to rearrange sections and content blocks.
            </p>
          </span>
          <span>
            <img src={arrow2} alt="arrow" />
          </span>
        </div>


      </div>

      <div className="relative flex lg:flex-nowrap flex-wrap justify-between px-28 gap-5">
        <div className=" flex flex-col gap-3">
          <h2 className="font-medium text-textSecondary leading-normal text-6xl">Join the <br /> ceVBuilder family</h2>
          <p className="text-primary font-normal text-2xl leading-8">We're thrilled to welcome you to the ceVBuilder <br />  family, where your journey to crafting <br /> exceptional resumes begins!</p>
          <button className="bg-mutedRed px-4  w-fit py-2 rounded-lg text-white font-bold ">Join ceVBuilder</button>
        </div>
        <div>
          <img src={laptop} alt="working" />
        </div>
        <div className="hidden lg:block  absolute top-0 left-0 w-full h-full z-0">
          <div className="h-[45%] "></div>
          <div
            className="relative bg-[#0073E6] bg-opacity-10"
            style={{ height: "55%", top: "50px", marginBottom: "-100px" }} 
          ></div>
   
        </div>
      </div>


      <div className="relative flex flex-col mt-20 p-20 gap-8">
        <span className="font-medium text-5xl leading-[48px] text-mutedRed">About CeVBuilder</span>
        <div className="absolute top-[4.5rem] left-[29.5rem] bg-[#0073E6] opacity-10 rounded-full w-16 h-16"></div>
        <span className="font-normal text-2xl leading-[50px]">Are you ready to take your career journey to the next level? Look no further than our state-of-the-art Resume Builder application! We understand that crafting a compelling resume is your ticket to landing your dream job, and our platform is designed to empower you in this endeavor.</span>
        <span></span>
      </div>
    </div>
  )
}
export default FeatureHome