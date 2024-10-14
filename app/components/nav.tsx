"use client";
import logo from "../../public/assets/Logo.svg";
import profile from "../../public/assets/siteBgs/04.2.jpg";
import down from "../../public/assets/down.png";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="w-full bg-black bg-opacity-50 flex justify-between px-10 items-center">
        <div className="py-6">
          <a href="/main">
            <Image src={logo} alt="logo" width={250} height={50} />
          </a>
        </div>

        <div className="flex items-center space-x-8">
          <a
            href="/about"
            className="font-medium text-lg hover:underline hover:border-gray-200 border-transparent border-2 p-2 rounded-lg text-nav"
          >
            About
          </a>
          <a
            href="/mission"
            className="font-medium text-lg hover:underline hover:border-gray-200 border-transparent border-2 p-2 rounded-lg text-nav"
          >
            Mission
          </a>
          <a
            href="/contact"
            className="font-medium text-lg hover:underline hover:border-gray-200 border-transparent border-2 p-2 rounded-lg text-nav"
          >
            Contact
          </a>

          <div className="relative hover:border-gray-200 border-transparent border-2 p-2 rounded-lg">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <Image
                src={profile}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <Image src={down} alt="dropdown icon" width={15} height={15} />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Log out
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
