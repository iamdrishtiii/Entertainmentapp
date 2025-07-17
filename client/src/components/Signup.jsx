
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdMovie } from 'react-icons/md';
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import {Authurl} from "../assets/api"
const Signup = ({ setActive }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repeatShowPassword, setRepeatShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    const userData = {
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };

    axios
      .post(`${Authurl}/signup`, userData)
      .then((response) => {
        console.log("Signup successful:", response.data);
        localStorage.setItem("token", response.data.token)
        toast.success("Signup successful!");
        navigate("/");
      })
      .catch((error) => {
        if(error.response && error.response.status === 400 && password === repeatPassword){
          console.error("Signup error:", error.response.data);
        toast.error("Already registered Email")
        }else{
        console.error("Signup error:", error.response.data);
        toast.error("Signup failed. Please try again.");
        }
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <div className="flex flex-col items-center justify-center h-full bg-black">
        <MdMovie color='red' className='size-8 sm:size-12' />
        <div className="bg-slate-900 rounded-2xl flex flex-col gap-3 shadow-lg m-3 sm:m-6 p-4 sm:p-8 sm:px-16">
          <h2 className="text-[42px] text-white mb-4">Sign Up</h2>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 py-2 px-4 text-white outline-none bg-[#161D2F] text-[20px] block w-full rounded-md shadow-sm focus:ring-opacity-50"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="h-[1.3px] mt-3 w-full bg-[#5A698F]"></div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 py-2 px-4 text-white outline-none bg-[#161D2F] text-[20px] block w-full rounded-md shadow-sm focus:ring-opacity-50"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaRegEyeSlash color="white" />
                ) : (
                  <MdOutlineRemoveRedEye color="white" />
                )}
              </div>
            </div>
            <div className="h-[1.3px] mt-3 w-full bg-[#5A698F]"></div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type={repeatShowPassword ? "text" : "password"}
                id="repeatPassword"
                className="mt-1 py-2 px-4 text-white outline-none bg-[#161D2F] text-[20px] block w-full rounded-md shadow-sm focus:ring-opacity-50"
                value={repeatPassword}
                placeholder="Repeat Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <div onClick={() => setRepeatShowPassword(!repeatShowPassword)}>
                {repeatShowPassword ? (
                  <FaRegEyeSlash color="white" />
                ) : (
                  <MdOutlineRemoveRedEye color="white" />
                )}
              </div>
            </div>
            <div className="h-[1.3px] mt-3 w-full bg-[#5A698F]"></div>
          </div>
          <button
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600"
            onClick={handleSignup}
          >
            Create Account
          </button>
          <div className="mt-4 text-[16px] flex gap-1 text-white mx-auto">
            <p>Already have an account?</p>
            <button
              className="text-red-600 hover:underline focus:outline-none"
              onClick={() => setActive(1)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Signup