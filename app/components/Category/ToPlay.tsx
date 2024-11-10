"use client";
import React, { useEffect, useState } from "react";
import { ObjectId } from "mongodb";
import GameCard from "./GameCard";

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

interface ToPlayProps {
  games: Game[];
}

export default function ToPlay({ games}: ToPlayProps) {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-3/4 gap-10 flex p-20 pt-0 pb-5">
        <div className="relative w-1/4 h-4/5">
          {games.map((game) => (
            <GameCard key={game._id.toString()} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
