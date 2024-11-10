// Played.tsx
"use client";
import React from "react";
import GameCard from "./GameCard";
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

interface PlayedProps {
  games: Game[];
}

export default function Played({ games }: PlayedProps) {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-3/4 gap-10 flex p-20 pt-0 pb-5">
        <div className="relative w-1/4 h-4/5">
          {games.length > 0 ? (
            games.map((game) => <GameCard key={game._id.toString()} game={game} />)
          ) : (
            <p>No games found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
