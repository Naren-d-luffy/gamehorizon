"use client";
import Nav from "./nav";
import React, { useEffect, useState } from "react";
import Create from "./PopUp/Create";
import Played from "./Category/Played";
import Playing from "./Category/Playing";
import ToPlay from "./Category/ToPlay";
import CatLoader from "./Category/CatLoader";
import { ObjectId } from "mongodb";

interface Game {
  _id: ObjectId;
  image: string;
  name: string;
  created: string;
  date: string;
  review: string;
  genres: string[];
  color: string;
  type: string;
}

export default function Main() {
  const [isCreated, setIsCreatedOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("played");
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const openCreated = () => setIsCreatedOpen(true);
  const closeCreated = () => setIsCreatedOpen(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/games");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (loading) return <CatLoader />; // Show loader while fetching data

    switch (activeTab) {
      case "played":
        return <Played games={games.filter((game) => game.type === "Played Game")} />;
      case "playing":
        return <Playing games={games.filter((game) => game.type === "Currently Playing")} />;
      case "toPlay":
        return <ToPlay games={games.filter((game) => game.type === "Want to Play")} />;
      default:
        return <Played games={games.filter((game) => game.type === "Played Game")} />;
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
                className={`relative text-blue-950 bg-blue-300 text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out ${
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
                className={`relative text-blue-950 bg-blue-300 text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out ${
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
                className={`relative text-blue-950 bg-blue-300 text-2xl font-roboto font-bold hover:-translate-y-1 hover:translate-x-1 hover:bg-transparent hover:text-white hover:underline border-blue-900 hover:border-white border-2 p-2 rounded-lg transition-all duration-300 ease-in-out ${
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
