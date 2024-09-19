
import React from "react"
import CVBuilderLogo from "../Assets/Icons/CvBuilderLogo"
import facebook from "../Assets/Icons/Facebook.png"
import Instagram from "../Assets/Icons/Instagram.png"
import Twitter from "../Assets/Icons/Twitter.png"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="flex flex-col border-t-[1.4px] border-slate-100 p-20 pb-10 gap-20 flex-wrap">
      <div className="flex justify-center lg:justify-between flex-wrap lg:gap-0 gap-10 " >
        <div className="flex flex-col gap-16">
          <CVBuilderLogo />
          <div>
            <p className="text-textHeading font-normal text-lg">Updates right to your Inbox</p>
            <div className=" flex gap-4 mt-2" >
              <input
                placeholder="Email Address"
                className="border-[1.4px] border-slate-100 rounded-[10px] p-2 w-80"
              />
              <button className="bg-mutedRed rounded-[10px] text-white p-2 font-normal text-lg focus:outline-none">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-14 justify-center">
          <div className="flex gap-14">
            <span>
              <h6 className="font-medium text-textHeading text-lg">Our Story</h6>
              <p className="font-normal text-textSecondary text-lg">FAQ</p>
              <p className="font-normal text-textSecondary text-lg">Contact</p>
            </span>
            <span>
              <h6 className="font-medium text-textHeading text-lg">Services</h6>
              <Link to='/'><p className="font-normal text-textSecondary text-lg">Build Resume</p></Link>
              <p className="font-normal text-textSecondary text-lg">Cover Letter</p>
              <p className="font-normal text-textSecondary text-lg">Template</p>
            </span>
            <span>
              <h6 className="font-medium text-textHeading text-lg">About Us</h6>
              <p className="font-normal text-textSecondary text-lg">Developers</p>
              <p className="font-normal text-textSecondary text-lg">Meet Our Team</p>
              <p className="font-normal text-textSecondary text-lg">Join ceVBuilder</p>
            </span>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <img src={facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Instagram} alt="instagram" />
            <img src={Instagram} alt="linkedin" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 mx-auto flex-wrap">
        <span className="font-medium text-textHeading text-lg"><span className="inline-flex items-center justify-center border-2 border-textHeading rounded-full w-5 h-5 me-1">c</span>ceVBuilder 2023</span>
        <span className="font-medium text-textHeading text-lg">Privacy Policy</span>
        <span className="font-medium text-textHeading text-lg">Terms Of Use</span>
      </div>
    </div>
  )
}
export default Footer