"use client";
import Nav from "./nav";
import React, { useEffect, useState } from "react";
import Create from "./PopUp/Create";
import Played from "./Category/Played";
import Playing from "./Category/Playing";
import ToPlay from "./Category/ToPlay";

export default function Main() {
  const [isCreated, setIsCreatedOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("played");

  const openCreated = () => setIsCreatedOpen(true);
  const closeCreated = () => setIsCreatedOpen(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "played":
        return <Played />;
      case "playing":
        return <Playing />;
      case "toPlay":
        return <ToPlay />;
      default:
        return <Played />;
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <Nav />
        <div className="flex flex-col justify-center items-center gap-5 p-5">
          <div className="flex gap-5">
            <div className="relative">
              <div className={`absolute inset-0 bg-blue-700 rounded-lg `}></div>
              <button
                className={`relative text-blue-950 bg-blue-300 text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg ${
                  activeTab === "played" &&
                  "bg-transparent border-white border-2 text-white hover:text-blue-100"
                }`}
                onClick={() => handleTabChange("played")}
              >
                Played Games
              </button>
            </div>

            <div className="relative">
              <div className={`absolute inset-0 bg-blue-700 rounded-lg `}></div>
              <button
                className={`relative text-blue-950 bg-blue-300 text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg ${
                  activeTab === "playing" &&
                  "bg-transparent border-white border-2 text-white hover:text-blue-100"
                }`}
                onClick={() => handleTabChange("playing")}
              >
                Currently Playing
              </button>
            </div>

            <div className="relative">
              <div className={`absolute inset-0 bg-blue-700 rounded-lg `}></div>
              <button
                className={`relative text-blue-950 bg-blue-300 text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg ${
                  activeTab === "toPlay" &&
                  "bg-transparent border-white border-2 text-white hover:text-blue-100"
                }`}
                onClick={() => handleTabChange("toPlay")}
              >
                Want to Play
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-700 rounded-lg"></div>
              <button
                className="relative text-blue-950 bg-blue-300 text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out"
                onClick={openCreated}
              >
                Add a New Game
              </button>
            </div>
          </div>

          <div className="mt-5 w-full">{renderContent()}</div>

          <Create
            isOpen={isCreated}
            onClose={closeCreated}
          />
        </div>
      </div>
    </>
  );
}
