import React from "react";
import { useState } from "react";
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

        <div className="hidden">
            <ul className="flex gap-4">
                <li className="w-[10rem]">
                    <Button name="Recharge"/>
                </li>
                <li className="w-[10rem]">
                    <Button name="Navigate"/>
                </li>
            </ul>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation links */}
        <ul
          className={`flex flex-col md:flex-row gap-8 absolute md:static top-[4rem] left-0 w-full h-[22rem] bg-blue-900 md:w-auto md:bg-transparent md:items-center md:flex transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:flex`}
        >
          <li className="mx-2 p-2 md:p-0">Home</li>
          <li className="mx-2 p-2 md:p-0">Event</li>
          <li className="mx-2 p-2 md:p-0">Explore</li>
          <li className="mx-2 p-2 w-[5rem] md:p-0">About Us</li>
          <li className="mx-2 p-2 md:p-0">Contact</li>
          <li className="mx-2 p-2 w-[12rem]">
            <Button name="Login / Sign Up"/>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
