"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import bg1 from "../../public/assets/login img/f32.png";
import icon from "../../public/assets/login img/danger.png";
import Image from "next/image";

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);
  const [password, setPassword] = useState(""); 
  const router = useRouter(); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "wh0@m!?." ) { 
      router.push("/main"); 
    } else {
      alert("Incorrect password!"); 
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex justify-end items-center"
      style={{ backgroundImage: `url(${bg1.src})` }}
    >
      <div className="bg-black bg-opacity-70 mr-40 rounded-3xl h-3/5">
        <div className="p-5 h-full flex flex-col justify-around">
          <div>
            <p className="text-6xl text-center text-white font-head">
              Welcome, Naren, <br /> to Game Horizon!
            </p>
          </div>

          <form className="flex flex-col space-y-3 mb-4 relative" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="text-white font-roboto text-2xl font-medium"
              >
                Enter password to Login{" "}
              </label>
              {isHovered && (
                <div className="bg-white bg-opacity-40 w-5/12 absolute top-0 right-0 rounded-xl">
                  <p className="text-xs text-black text-center">
                    If you have forgotten the password, look inside the code.
                  </p>
                </div>
              )}
            </div>

            <input
              type="password" 
              placeholder="Password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="bg-white text-slate-900 text-xl bg-opacity-40 h-12 rounded-2xl pl-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <span
              className="absolute right-3 top-11"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image src={icon} alt="icon" title="Password Help" />
            </span>
            <button 
              type="submit" 
              className="bg-blue-500 text-white rounded-2xl text-xl  hover:bg-blue-600 h-10 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
