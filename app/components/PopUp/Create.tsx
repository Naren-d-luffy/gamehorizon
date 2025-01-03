"use client";
import { useState } from "react";
import Swal from "sweetalert2";

interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Create({ isOpen, onClose }: ModuleProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [name, setname] = useState("");
  const [created, setcreated] = useState("");
  const [date, setdate] = useState("");
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

  const resetForm = () => {
    setFile(null);
    setBase64Image(null);
    setname("");
    setcreated("");
    setdate("");
    setCategory("");
    setReview("");
    setGenres([]);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;

    const reviewBgColor = getReviewBgClass();
    const newGame = {
      name,
      created,
      date,
      type: category,
      review,
      color: reviewBgColor,
      genres,
      image: base64Image,
    };

    try {
      const response = await fetch("/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
      });

      if (response.ok) {
        resetForm();
        onClose();
        Swal.fire({
          title: "Success!",
          text: "Game was successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        console.log("Game added successfully");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error saving the Game",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
        console.error("Failed to add game");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getReviewBgClass = () => {
    switch (review) {
      case "Don't Try":
        return "red-600";
      case "Neutral":
        return "yellow-300";
      case "Positive":
        return "green-300";
      case "Overwhelmingly Positive":
        return "green-600";
      default:
        return "";
    }
  };

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
      name && created && date && review && file && genres.length > 0 && category
    );
  };

  if (!isOpen) return null;

  return (
    <div className="w-full fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-center bg-no-repeat bg-cover w-1/2 p-10 rounded-lg overflow-hidden shadow-xl transform bg-opacity-50 transition-all bg-gradient-to-br from-blue-200 to-blue-400">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Add a new Game</h1>
          <button
            onClick={handleClose}
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
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="relative mb-6 space-y-2 w-1/2">
            <label>Created by</label>
            <input
              type="text"
              placeholder="Enter Created by..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={created}
              onChange={(e) => setcreated(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="relative mb-6 space-y-2 w-1/3">
            <label>Release Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={date}
              onChange={(e) => setdate(e.target.value)}
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
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
