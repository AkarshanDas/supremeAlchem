"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="bg-[#D3D9D4] shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center"
        style={{ height: "105px" }} // Increased the height of the navbar
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center w-full">
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-40 md:h-32 w-auto mx-0 md:mx-0" // Adjusted the height to be larger
            />
            <span className="ml-1 mr-3 text-2xl font-bold text-black-100">Supreme Alchem</span>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <img src="/menus.png" alt="Menu" className="h-6 w-6" />{" "}
              {/* Replace with your icon path */}
            </button>
          </div>
          <div className="hidden md:flex flex-row items-center space-x-10 justify-end w-auto">
            <a
              href="/"
              className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-[#124E66] hover:scale-110 px-3 py-2 rounded-2xl"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-[#124E66] hover:scale-110 px-3 py-2 rounded-2xl"
            >
              About
            </a>
            <a
              href="/quality"
              className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-[#124E66] hover:scale-110 px-3 py-2 rounded-2xl"
            >
              Quality Control
            </a>
            <a
              href="/products"
              className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-[#124E66] hover:scale-110 px-3 py-2 rounded-2xl"
            >
              Products
            </a>
            <a
              href="/contact"
              className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-[#124E66] hover:scale-110 px-3 py-2 rounded-2xl"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`bg-white shadow-lg rounded-lg fixed top-[120px] left-0 w-full z-40 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a
            href="/"
            className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-gray-800 hover:scale-105 px-3 py-2 rounded-md"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-gray-800 hover:scale-105 px-3 py-2 rounded-md"
          >
            About
          </a>
          <a
            href="/quality"
            className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-gray-800 hover:scale-105 px-3 py-2 rounded-md"
          >
            Quality Control
          </a>
          <a
            href="/products"
            className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-gray-800 hover:scale-105 px-3 py-2 rounded-md"
          >
            Products
          </a>
          <a
            href="/contact"
            className="text-gray-800 font-semibold transform transition duration-300 hover:text-white hover:bg-gray-800 hover:scale-105 px-3 py-2 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
