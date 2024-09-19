import React, { useState } from "react"
import HeroImage from "../Assets/Images/HeroImage.png"
import eyeIcon from "../Assets/Icons/Eye.png"
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    return (
        <div className="flex flex-row h-screen">
            <div className="flex-1 hidden lg:block">
                <img
                    src={HeroImage}
                    alt="hero"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 justify-center px-32 pt-20">
                <div className="flex justify-center flex-col gap-4">
                    <div className="flex justify-between ">
                        <span className="font-semibold text-base text-textHeading">Register</span>
                        <span className="font-semibold text-base text-textHeading">Login</span>
                    </div>
                    <div className="flex">
                        <hr className="h-[6px] bg-[#D9D9D9] w-[50%]" />
                        <hr className="h-[6px] bg-mutedRed w-[50%]" />
                    </div>
                    <div className="flex flex-col relative gap-2 mt-8">
                        <span className=" text-[#3B3B3B] font-normal text-base ">Email address</span>
                        <input
                            className="border-[1.4px] border-slate-100 rounded-[8px] p-3 shadow-custom-2"
                            placeholder="Johndoe@gmail.com"
                        />
                        <span className=" text-[#3B3B3B] font-normal text-base ">Password</span>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="border-[1.4px] border-slate-100 rounded-[8px] p-3 pl-5 pr-12 shadow-custom-2 items-center flex justify-center"
                            placeholder="*********"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-[8.5rem] right-0 flex items-center pr-3"
                        >
                            {showPassword ? <img src={eyeIcon} alt="showpassword" className="w-5 h-5 text-slate-500" /> : <img src={eyeIcon} alt="showpassword" className="w-5 h-5 text-slate-500" />}
                        </button>
                        <span className=" font-normal text-base text-[#0073E6] ms-auto">Forgot Password</span>
                    </div>
                    <button className="bg-mutedRed px-4 py-2 text-white rounded-[8px] mt-8">
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )

}
export default Login;