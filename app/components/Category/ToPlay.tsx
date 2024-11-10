"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ObjectId } from "mongodb";
import CatLoader from "./CatLoader";
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

export default function ToPlay() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch("/api/games");
        const data = await response.json();
        setGames(data.filter((game: Game) => game.type ==="Want to Play"));
      } catch (error) {
        console.error("Error fetching games data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, []);


  return (
    <div className="w-full h-screen">
      <div className="w-full h-3/4 gap-10 flex p-20 pt-0 pb-5">
        <div className="relative w-1/4 h-4/5">
          {loading ? <CatLoader /> : games.map((game) => <GameCard key={game._id.toString()} game={game} />)}
        </div>
      </div>
    </div>
  );
}
