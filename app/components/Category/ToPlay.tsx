"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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

export default function ToPlay() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchgame = async () => {
      try {
        const response = await fetch("/api/games");
        const data = await response.json();

        const ToPlayGames = data.filter(
          (game: Game) => game.type === "Want to Play"
        );
        setGames(ToPlayGames);
      } catch (error) {
        console.error("Error fetching games data:", error);
      }
    };
    fetchgame();
  }, []);

  return (
    <div className="w-full h-screen ">
      <div className="w-full h-3/4 gap-10 flex p-20 pt-0 pb-5">
        <div className="relative w-1/4 h-4/5">
          {games.map((game) => (
            <div className="absolute inset-0 bg-teal-500 rounded-2xl">
              <div
                className="relative w-full h-full bg-black rounded-2xl group hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-in-out hover:shadow-lg"
                key={game._id.toString()}
              >
                <Image
                  src={game.image}
                  alt={game.name}
                  width={400}
                  height={10}
                  className="rounded-t-2xl"
                />
                <h2 className="text-white text-center font-bold text-xl font-serif p-4 pb-1">
                  {game.name}
                </h2>
                <h3 className="text-btext font-medium text-center pb-3">
                  {game.created}
                </h3>
                <h3 className="text-gray-400 font-medium font-roboto px-4 pb-2">
                  Release Date:{" "}
                  <span className="text-gray-200 font-normal">{game.date}</span>
                </h3>
                <h3 className="text-gray-400 font-medium px-4 pb-2">
                  Reviews:{" "}
                  <span
                    className={`p-1.5 text-white bg-${game.color} rounded-xl`}
                  >
                    {game.review}
                  </span>
                </h3>
                <h3 className="text-gray-400 font-medium font-roboto px-4 text-justify">
                  Genres:{" "}
                  <span className="text-gray-200 font-normal">
                    {game.genres.join(", ")}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
