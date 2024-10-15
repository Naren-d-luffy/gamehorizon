import Nav from "./nav";
import React from "react";
import Image from "next/image";
import bully from "../../public/assets/game/bully.jpg"

export default function Main() {
  return (
    <>
      <div className="w-full h-screen ">
        <Nav />
        <div className="flex flex-col justify-center items-center gap-5 p-5">
          <div className=" flex gap-5">
            <p className="text-teal-500 text-2xl font-roboto font-bold hover:bg-blue-950 hover:text-white hover:underline border-teal-500 hover:border-white border-2 p-2 rounded-lg cursor-pointer">
              Played Games
            </p>
            <p className="text-teal-500 text-2xl font-roboto font-bold hover:bg-blue-950 hover:text-white hover:underline border-teal-500 hover:border-white border-2 p-2 rounded-lg cursor-pointer">
              Currently playing
            </p>
            <p className="text-teal-500 text-2xl font-roboto font-bold hover:bg-blue-950 hover:text-white hover:underline border-teal-500 hover:border-white border-2 p-2 rounded-lg cursor-pointer">
              want to play
            </p>
          </div>

          <div className="h-0.5 w-11/12 bg-black"></div>
        </div>
        <div className="w-full h-3/4 gap-10 flex p-20 pt-0 pb-5">
          <div className="w-1/4 h-4/5 bg-black bg-opacity-60 rounded-2xl">
          <Image src={bully} alt="Bully" className="rounded-t-2xl"/>
          <h2 className="text-white font-bold text-2xl font-sans">Bully</h2>
          </div>
          <div className="w-1/4 h-4/5 bg-black bg-opacity-60 rounded-2xl"></div>
          <div className="w-1/4 h-4/5 bg-black bg-opacity-60 rounded-2xl"></div>
          <div className="w-1/4 h-4/5 bg-black bg-opacity-60 rounded-2xl"></div>
          
        </div>
      </div>
    </>
  );
}
