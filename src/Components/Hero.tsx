
import React from "react"
import resumePhoto from '../Assets/Images/Ellipse 14@2x.png'
import { useNavigate } from "react-router-dom"
const Hero = () => {
  const navigate = useNavigate()
 
  return (
    <div className="flex justify-between lg:flex-nowrap flex-wrap gap-10 lg:gap-0  items-center ">
      <div className="">
        <div className="">
          <span className="font-semibold text-8xl text-mutedRed">Create</span> <br />
          <span className="font-semibold text-6xl">a craeer in tech.</span>
        </div>
        <div className="mt-6 w-full lg:w-[70%] ">
          <span className="font-normal text-primary text-xl">
            The template includes carefully structured sections for personal information, summary or objective, work experience, education, skills, projects, certifications, and more. You can easily customize these sections to fit your unique background.
          </span>
        </div>
        <div className="mt-8">
          <button
            onClick={() => {
              navigate('/builder')
            }}
            className="bg-mutedRed text-white rounded-lg px-6 py-2 font-bold text-lg">Create Resume For Free</button>
        </div>
      </div>

      <div className="flex flex-col  gap-4">
        <div className="border-[1.4px] border-slate-100 flex p-8  gap-6 ">
          <div>
            <img src={resumePhoto} alt="photo" className="w-14" />
          </div>
          <div className="flex flex-col gap-4 ">
            <div>
              <span className=" font-medium text-lg text-primary"> Jane Doe</span><br />
              <span className=" font-medium text-sm text-primary">Frontend Developer</span>
            </div>
            <div>
              <span className=" font-medium text-base text-primary">Bio</span><br />
              <span className=" font-normal text-sm text-primary opacity-70">I’m a frontend developer with 3years experience in ReactJs and VueJs
              </span>
            </div>
          </div>
        </div>

        <div className=" flex-col border-[1.4px] border-slate-100 flex p-8 gap-4 ">
          <span className=" font-medium text-lg text-primary">Work History</span>
          <span className="font-medium text-sm text-primary">
            Cloud Engineer | Yep!,USA
            March 2022 - Present
          </span>
          <span className=" font-medium text-sm opacity-70">
            I am Christian Chiemela<br />
            a cloud engineer, a Nigerian with the passion for creating stunning and user-friendly websites and applications. With 3years plus experience in the industry, I have honed skills in HTML, CSS, Javascript, as well as modern frontend frameworks such as ReactJs And VueJs.<br />
            I began my career at Esoft response a United Kingdom base company where I quickly develop the interest in frontend development. Years later I moved to YEP! a United States of America base company where I am responsible for the development and maintenance of several high-traffic websites.<br />
            I have the ability of turning complex design concepts into highly optimized and accessible user interfaces, which are up to date with the latest trends and technologies in the industry. I am always looking for ways to improve the user experience and performance of my projects.
          </span>

        </div>

      </div>
    </div>
  )
}
export default Hero