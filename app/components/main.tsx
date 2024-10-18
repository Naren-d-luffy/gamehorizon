"use client"
import Nav from "./nav";
import React,{useState} from "react";
import Image from "next/image";
import bully from "../../public/assets/game/bully.jpg";
import Create from "./PopUp/Create";

export default function Main() {

  const [isCreated, setIsCreatedOpen] = useState(false);

  const openCreated = () => setIsCreatedOpen(true);
  const closeCreated = () => setIsCreatedOpen(false);

  return (
    <>
      <div className="w-full h-screen ">
        <Nav />
        <div className="flex flex-col justify-center items-center gap-5 p-5">
          <div className="flex gap-5">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-700 rounded-lg"></div>
              <button className="relative text-blue-950  bg-blue-300  text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out">
                Played Games
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-700 rounded-lg"></div>
              <button className="relative text-blue-950  bg-blue-300  text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out">
                Currently playing
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-700 rounded-lg"></div>

              <button className="relative text-blue-950  bg-blue-300  text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out">
                Want to play
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-700 rounded-lg"></div>

              <button className="relative text-blue-950  bg-blue-300  text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out"
              onClick={openCreated}>
                Add a New Game
              </button>
            </div>
          </div>

          <div className="h-0.5 w-11/12 bg-black"></div>
        </div>

        <div className="w-full h-3/4 gap-10 flex p-20 pt-0 pb-5">
          <div className="relative w-1/4 h-4/5">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl"></div>
            <div className="relative w-full h-full bg-black rounded-2xl group hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-in-out hover:shadow-lg">
              <Image src={bully} alt="Bully" className="rounded-t-2xl" />
              <h2 className="text-white text-center font-bold text-xl font-serif p-4 pb-1">
                Bully - Anniversary Edtion
              </h2>
              <h3 className="text-btext font-medium text-center pb-3">
                By Rockstar Games
              </h3>
              <h3 className="text-gray-400 font-medium font-roboto px-4 pb-2">
                Release Date :{" "}
                <span className="text-gray-200 font-normal">
                  {" "}
                  21 Oct, 2008{" "}
                </span>
              </h3>
              <h3 className="text-gray-400 font-medium px-4 pb-2">
                Reviews :{" "}
                <span className="p-1 bg-green-500 text-green-50 rounded-xl">
                  Very Positive
                </span>
              </h3>

              <h3 className="text-gray-400 font-medium font-roboto px-4 text-justify">
                Genres :{" "}
                <span className="text-gray-200 font-normal">
                  Open world, Action Adventure game, Fighting game, Shooter
                  Video Game, Nonlinear gameplay{" "}
                </span>
              </h3>
            </div>
          </div>

          <div className="relative w-1/4 h-4/5">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl"></div>
            <div className="relative w-full h-full bg-black  rounded-2xl group hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-in-out hover:shadow-lg"></div>
          </div>

          <div className="relative w-1/4 h-4/5">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl"></div>
            <div className="relative w-full h-full bg-black  rounded-2xl group hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-in-out hover:shadow-lg"></div>
          </div>

          <div className="relative w-1/4 h-4/5">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl"></div>
            <div className="relative w-full h-full bg-black  rounded-2xl group hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-in-out hover:shadow-lg"></div>
          </div>
        </div>
        <Create 
        isOpen={isCreated}
        onClose={closeCreated}
        />
      </div>
    </>
  );
}
