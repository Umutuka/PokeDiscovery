/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b-3 mx-auto flex h-16 max-w-[2200px] items-center justify-between main-menu shadow-2xl">
      
      <h1 className="flex cursor-pointer items-center pb-1 font-mono text-3xl font-bold text-[#000300]">
        <img src="\Pictures\pokemon-icon.jpg" className="w-12 h-12"></img>PokeDiscovery
      </h1>
      <nav>
        <ul className="items hidden text-[#000300] md:flex ">
          <li className="cursor-pointer p-9 font-mono text-2xl hover:text-[purple]">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer p-9 font-mono text-2xl hover:text-[purple]">
            <Link to="/Quiz">Quiz</Link>
          </li>
          <li className="cursor-pointer p-9 font-mono text-2xl hover:text-[purple]">
            <Link to="/Resources">Resources</Link>
          </li>
          <li className="cursor-pointer p-9 font-mono text-2xl hover:text-[purple]">
            <Link to = "/About">About</Link>
          </li>
          <li className="cursor-pointer p-9 font-mono text-2xl hover:text-[purple]">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div onClick={handleNav} className="block ml-20 md:hidden bg-black">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 h-full w-[70%] border-r border-r-gray-900 bg-[#000000] duration-500 ease-in-out"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 flex w-full text-3xl font-bold text-[white]">
          <FaReact></FaReact>JavascriptQuizardo
        </h1>
        <ul className="p-4 uppercase ">
          <li className="border-b border-gray-600 p-4 font-mono">Home</li>
          <li className="border-b border-gray-600 p-4 font-mono">Quiz</li>
          <li className="border-b border-gray-600 p-4 font-mono">Resources</li>
          <li className="border-b border-gray-600 p-4 font-mono">About</li>
          <li className="border-b border-gray-600 p-4 font-mono">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
