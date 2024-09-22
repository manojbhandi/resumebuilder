
import React, { useState } from "react"
import CVBuilderLogo from "../Assets/Icons/CvBuilderLogo"
import menu from "../Assets/Icons/menu-burger.png"
import { useNavigate } from "react-router-dom";
import ReactSpinner from "../CustomComponents/ReactSpinner";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <>
      <ReactSpinner
        loading={loading}
      />
      <div className="flex flex-row  flex-wrap items-center p-10 justify-between  w-full bg-white border-b-[1.4px] border-slate-100">
        <div
          role='button'
          onClick={() => {
            navigate('/')
          }}
        >
          <CVBuilderLogo />
        </div>
        <div className="flex gap-10 font-medium text-xl flex-wrap">
          <span className="">
            Home
          </span>
          <span>
            Templates
          </span>
          <span>
            Jobs
          </span>
          <span>
            About
          </span>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/builder')
            }}
            className="px-4 py-2 bg-mutedRed text-white rounded-lg font-semibold text-lg hidden lg:block">
            Get Statred
          </button>
        </div>
      </div>
    </>
  )
}
export default Navbar