// src/app/components/Navbar.js

"use client";  // Add this line

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-transparent">
      <div className="flex items-center">
        <h1 className="text-yellow-300 font-light text-3xl sm:text-5xl">Halia</h1>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 text-white text-lg sm:text-base absolute sm:relative top-full left-0 right-0 bg-black sm:bg-transparent p-4 sm:p-0`}
      >
        <li><a href="#reservations" className="hover:text-gray-300">Reservations</a></li>
        <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
        <li><a href="#directions" className="hover:text-gray-300">Directions</a></li>
        <li><a href="#events" className="hover:text-gray-300">Events</a></li>
        <li><a href="#virtual-tour" className="hover:text-gray-300">About us</a></li>
      </ul>
    </nav>
  );
}
