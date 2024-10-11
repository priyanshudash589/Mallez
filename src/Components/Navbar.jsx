import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Constants/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-black h-[6rem] p-[1rem] text-white flex flex-row justify-center items-center">
        <div className="container flex flex-row justify-between items-center">
          <span className="text-2xl font-bold w-[20rem]">MALLez</span>

          {/* Full Menu for large screens */}
          <ul className="hidden lg:flex flex-row gap-8">
            <li className="mx-2 p-2">Home</li>
            <li className="mx-2 p-2">Event</li>
            <li className="mx-2 p-2">Explore</li>
            <li className="mx-2 p-2">About Us</li>
            <li className="mx-2 p-2">Contact</li>
            <li className="mx-2 p-2">
              <Button name="Login / Sign Up" />
            </li>
          </ul>

          {/* Hamburger icon for mobile and medium screens */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Mobile Navigation Links */}
          <ul
            className={`${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } absolute top-[6rem] left-0 bg-black w-full flex flex-col gap-8 py-4 px-4 z-50 md:hidden transition-transform duration-300 ease-in-out`}
          >
            <li className="mx-2 p-2 text-white">Home</li>
            <li className="mx-2 p-2 text-white">Event</li>
            <li className="mx-2 p-2 text-white">Explore</li>
            <li className="mx-2 p-2 text-white">About Us</li>
            <li className="mx-2 p-2 text-white">Contact</li>
            <li className="mx-2 p-2">
              <Button name="Login / Sign Up" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;




 {/* Desktop Links */}
          {/* <div className="hidden">
            <ul className="flex gap-4">
              <li className="w-[10rem]">
                <Button name="Recharge" />
              </li>
              <li className="w-[10rem]">
                <Button name="Navigate" />
              </li>
            </ul>
          </div> */}