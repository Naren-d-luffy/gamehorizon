"use client";
import { useState } from "react";
import popup from "../../../public/assets/popup.png"

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Create({ isOpen, onClose }: ModuleProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  if (!isOpen) return null;

  return (
    <div className="w-full fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-center bg-no-repeat bg-cover w-1/2 p-10 rounded-lg overflow-hidden shadow-xl transform bg-opacity-50 transition-all" style={{ backgroundImage: `url(/assets/controler2.png)` }}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Add a new Game</h1>
          <button
            onClick={onClose}
            className="text-white bg-blue-500 px-3 py-1 rounded-md"
          >
            X
          </button>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-dashed border-2 p-10 text-center rounded-lg ${
            isDragging
              ? "border-green-500 bg-green-50"
              : "border-gray-300 bg-gray-100"
          }`}
        >
          {file ? (
            <div className="text-center">
              <p className="text-gray-700">File uploaded: {file.name}</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500">
                Drag and drop an image here, or{" "}
                <label
                  htmlFor="file-upload"
                  className="text-blue-500 cursor-pointer underline"
                >
                  click to browse
                </label>
              </p>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </>
          )}
        </div>

        <div className="flex gap-5 mt-5">
          <div className="relative mb-6 space-y-2 w-1/2">
            <label>Enter Game Name</label>
            <input
              type="text"
              placeholder="Enter Game name..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative mb-6 space-y-2 w-1/2">
            <label>Created by</label>
            <input
              type="text"
              placeholder="Enter Created by..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="relative mb-6 space-y-2 w-1/2">
            <label>Release Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative mb-6 space-y-2 w-1/2">
            <label htmlFor="review" className="block text-gray-700 mb-1">
              Review
            </label>
            <select
              name="review"
              className="w-full border border-gray-300 text-sm rounded-md p-2 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Type</option>
              <option value="Don't Try">Don't Try</option>
              <option value="Neutral">Neutral</option>
              <option value="Positive">Positive</option>
              <option value="Overwhelmingly Positive">
                Overwhelmingly Positive
              </option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700">Genres</label>
          <div className="grid grid-cols-5 gap-3 mt-2">
            {[
              "Adventure",
              "Action",
              "Sports",
              "Simulation",
              "Platformer",
              "RPG",
              "Fighting",
              "Racing",
              "Shooter",
              "Puzzle",
              "Casual",
              "Strategy",
              "Stealth",
              "Party",
              "Action RPG",
              "Tactical RPG",
              "Survival",
              "Battle Royale",
              "Open world",
              "2D Game",
            ].map((genre) => (
              <div
                key={genre}
                className="flex items-center justify-center py-2 px-4 border rounded-md bg-gray-100 hover:bg-blue-100 transition-colors duration-300 text-sm"
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
