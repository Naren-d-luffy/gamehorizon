"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import bg1 from "../../public/assets/login img/finalsize.png";
import bg2 from "../../public/assets/login img/finalsize-1.png";
import bg3 from "../../public/assets/login img/finalsize-2.png";
import bg4 from "../../public/assets/login img/finalsize-3.png";
import bg5 from "../../public/assets/login img/finalsize-4.png";
import bg6 from "../../public/assets/login img/finalsize-5.png";
import bg7 from "../../public/assets/login img/finalsize-6.png";
import bg8 from "../../public/assets/login img/finalsize-7.png";
import icon from "../../public/assets/login img/danger.png";
import Image from "next/image";
import Loader from "./Loader/Loader";

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);
  const [password, setPassword] = useState(""); 
  const [backgroundImage, setBackgroundImage] = useState(bg1.src); 
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true); 
  const [loading, setLoading] = useState(true); 
  const [submitting, setSubmitting] = useState(false); 
  const router = useRouter(); 

  const backgrounds = [
    bg1.src,
    bg2.src,
    bg3.src,
    bg4.src,
    bg5.src,
    bg6.src,
    bg7.src,
    bg8.src
  ];

  useEffect(() => {
    const getRandomBackground = () => {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      return backgrounds[randomIndex];
    };

    setBackgroundImage(getRandomBackground());

    const intervalId = setInterval(() => {
      setBackgroundImage(getRandomBackground()); 
    }, 5000); 

    setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      if (password === "wh0@m!?." ) { 
        setIsPasswordCorrect(true); 
        router.push("/main"); 
      } else {
        setIsPasswordCorrect(false);
      }
      setSubmitting(false); 
    }, 2000); 
  };

  if (loading || submitting) {
    return <Loader />;
  }

  return (
    <div
      className={`h-screen w-full bg-cover bg-center flex justify-end items-center transition-all duration-1000 ease-in-out`} 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
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
              className={`bg-white text-slate-900 text-xl bg-opacity-40 h-12 rounded-2xl pl-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ${!isPasswordCorrect && "border-2 border-red-500"}`}
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
              className="bg-blue-500 text-white rounded-2xl text-xl font-medium hover:text-blue-100 hover:bg-blue-600 h-12 transition duration-200"
            >
              Login
            </button>
            {!isPasswordCorrect && <p className="text-red-500 text-center">Incorrect password!</p>} 
          </form>
        </div>
      </div>
    </div>
  );
}
