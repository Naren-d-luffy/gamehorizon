import React from "react";
import "./loading.css";

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-blue-100 transition-all duration-1000 ease-in-out">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
