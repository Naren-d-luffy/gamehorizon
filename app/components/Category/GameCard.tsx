// GameCard.tsx
"use client";
import React from "react";
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
}

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="absolute inset-0 bg-teal-500 rounded-2xl">
      <div className="relative w-full h-full bg-black rounded-2xl group hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="h-2/4">
          <Image
            src={game.image}
            alt={game.name}
            width={400}
            height={10}
            className="rounded-t-2xl"
          />
        </div>
        <div className="h-2/4">
          <h2 className="text-white text-center font-bold text-xl font-serif p-4 pb-1">
            {game.name}
          </h2>
          <h3 className="text-btext font-medium text-center pb-3">
            {game.created}
          </h3>
          <h3 className="text-gray-400 font-medium font-roboto px-4 pb-2">
            Release Date: <span className="text-gray-200 font-normal">{game.date}</span>
          </h3>
          <h3 className="text-gray-400 font-medium px-4 pb-2">
            Reviews: <span className={`p-1.5 text-white bg-${game.color} rounded-xl`}>{game.review}</span>
          </h3>
          <h3 className="text-gray-400 font-medium font-roboto px-4 text-justify">
            Genres: <span className="text-gray-200 font-normal">{game.genres.join(", ")}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
