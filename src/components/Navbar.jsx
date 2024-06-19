import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px]mx-auto px-4  text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex ">
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Company</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Resources</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">About</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Contact</li>
      </ul>
      <div className="md:hidden">
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] p-4">
            REACT.
          </h1>
          <ul className="uppercase p-4 ">
            <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
              Home
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
              Company
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
              Resources
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
              About
            </li>
            <li className="p-4 hover:text-[#00df9a] cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
