import React, { useState } from "react";
import HeroImage from "../Assets/Images/HeroImage.png";
import eyeIcon from "../Assets/Icons/Eye.png";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { API_END_POINT, ROUTES } from "../Utils/SiteConfig";
import ReactSpinner from "../CustomComponents/ReactSpinner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    const loginData = {
      email: email,
      password: password,
    };

    try {

      const response = await fetch(`${API_END_POINT.baseUrl}/${API_END_POINT.login}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      setLoading(false)
      if (!response.ok) {
        throw new Error("Failed to login, please check your credentials");
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      toast.success(`Welcome Back! ${data?.user}`, {
        position: 'top-right'
      });
      navigate('/')
      console.log("Login successful", data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <ReactSpinner
        loading={loading}
      />
      <div className="flex flex-row h-screen">
        <div className="flex-1 hidden lg:block">
          <img
            src={HeroImage}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 justify-center px-32 pt-20">
          <form onSubmit={handleLogin} className="flex justify-center flex-col gap-4">
            <div className="flex justify-between ">
              <span className="font-semibold text-base text-textHeading">Register</span>
              <span className="font-semibold text-base text-textHeading">Login</span>
            </div>
            <div className="flex">
              <hr className="h-[6px] bg-[#D9D9D9] w-[50%]" />
              <hr className="h-[6px] bg-mutedRed w-[50%]" />
            </div>
            <div className="flex flex-col relative gap-2 mt-8">
              <span className="text-[#3B3B3B] font-normal text-base">Email address</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1.4px] border-slate-100 rounded-[8px] p-3 shadow-custom-2"
                placeholder="Johndoe@gmail.com"
                required
              />
              <span className="text-[#3B3B3B] font-normal text-base">Password</span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1.4px] border-slate-100 rounded-[8px] p-3 pl-5 pr-12 shadow-custom-2"
                placeholder="*********"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-[8.5rem] right-0 flex items-center pr-3"
              >
                <img src={eyeIcon} alt="toggle password visibility" className="w-5 h-5 text-slate-500" />
              </button>
              <span className="flex ms-auto gap-2">
                <span className="font-normal text-base ms-auto">New To This Site ?</span>
                <Link to={ROUTES.register} className="font-normal text-base text-[#0073E6] ms-auto">Register</Link>
              </span>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <button type="submit" className="bg-mutedRed px-4 py-2 text-white rounded-[8px] mt-8">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>

  );
};

export default Login;
