"use client";
import { useState } from "react";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Create({ isOpen, onClose }: ModuleProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [gameName, setGameName] = useState("");
  const [creator, setCreator] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [category, setCategory] = useState("");
  const [review, setReview] = useState("");
  const [genres, setGenres] = useState<string[]>([]);
  const availableGenres = [
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
  ];

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
    convertToBase64(droppedFile);
    setFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      convertToBase64(selectedFile);
      setFile(selectedFile);
    }
  };

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const toggleGenre = (genre: string) => {
    if (genres.includes(genre)) {
      setGenres(genres.filter((g) => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
  };

  const isFormValid = () => {
    return (
      gameName &&
      creator &&
      releaseDate &&
      review &&
      file &&
      genres.length > 0 &&
      category
    );
  };

  const getReviewBgClass = () => {
    switch (review) {
      case "Don't Try":
        return "bg-red-600";
      case "Neutral":
        return "bg-yellow-300";
      case "Positive":
        return "bg-green-300";
      case "Overwhelmingly Positive":
        return "bg-green-600";
      default:
        return "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-full fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-center bg-no-repeat bg-cover w-1/2 p-10 rounded-lg overflow-hidden shadow-xl transform bg-opacity-50 transition-all bg-gradient-to-br from-blue-200 to-blue-400">
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
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            />
          </div>
          <div className="relative mb-6 space-y-2 w-1/2">
            <label>Created by</label>
            <input
              type="text"
              placeholder="Enter Created by..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="relative mb-6 space-y-2 w-1/3">
            <label>Release Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            />
          </div>

          <div className="relative mb-6 space-y-2 w-1/3">
            <label htmlFor="review" className="block mb-1">
              Category
            </label>
            <select
              name="review"
              className={`w-full border text-sm rounded-md p-2 focus:ring focus:ring-blue-200 `}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Played Game">Played Game</option>
              <option value="Currently Playing">Currently Playing</option>
              <option value="Want to Play">Want to Play</option>
            </select>
          </div>

          <div className="relative mb-6 space-y-2 w-1/3">
            <label htmlFor="review" className="block mb-1">
              Review
            </label>
            <select
              name="review"
              className={`w-full border text-sm rounded-md p-2 focus:ring focus:ring-blue-200 `}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            >
              <option value="">Select Review</option>
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
            {availableGenres.map((genre) => (
              <div
                key={genre}
                onClick={() => toggleGenre(genre)}
                className={`flex items-center justify-center py-2 px-4 border rounded-md text-sm cursor-pointer ${
                  genres.includes(genre)
                    ? "bg-blue-300 text-white"
                    : "bg-gray-100 hover:bg-blue-100 transition-colors duration-300"
                }`}
              >
                {genres.includes(genre) && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleGenre(genre);
                    }}
                    className="mr-1 text-xs cursor-pointer"
                  ></span>
                )}
                {genre}
              </div>
            ))}
          </div>
        </div>

        <button
          className={`w-full py-2 px-4 rounded-md text-white ${
            isFormValid() ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
