/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [dataMenu, setDataMenu] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDataMenu = () => {
    setDataMenu(!dataMenu);
  };

  useEffect(() => {
    setNav(true);
  }, [location]);

  return (
    <div className="border-b-3 mx-auto flex h-16 items-center justify-between main-menu shadow-2xl">
      <div className="w-1/4 lg:w-auto">
        <h1 className="flex cursor-pointer text-white mr-5 items-center pb-1 font-mono text-3xl font-bold">
          <img src="https://drive.google.com/uc?export=view&id=1CIJ0_IlNvXJOo74VYgEqPzKvZ6pLHdnS" className="w-12 h-12 p-1"></img>
          <Link to="/">PokeDiscovery </Link>
        </h1>
      </div>

      <nav className="w-full lg:w-auto">
        <ul className="items hidden text-[#000300] lg:flex ">
          <li className="cursor-pointer p-12 font-mono text-2xl hover:text-[purple]">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer p-9 font-mono text-2xl hover:text-[purple]">
            <ul className="dropdown">
              <li className="dropbtn">
                Data <i className="fa fa-caret-down"></i>
              </li>
              <div className="dropdown-content">
                <Link to="/pokedex">Pokedex</Link>
                <Link to="/Abilities">Abilities</Link>
                <Link to="/items">Items</Link>
                <Link to="/compare">Stat Compare</Link>
              </div>
            </ul>
          </li>
          <li className="cursor-pointer p-12 font-mono text-2xl hover:text-[purple]">
            <Link to="/About">About</Link>
          </li>
          <li className="cursor-pointer p-12 font-mono text-2xl hover:text-[purple]">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div onClick={handleNav} className="block rounded-lg ml-20 m-5 lg:hidden bg-white">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div className={!nav ? "fixed left-0 z-10 top-0 w-70% md:w-1/3 border-r border-r-gray-900 bg-[#000000] duration-500 ease-in-out" : "fixed left-[-100%]"}>
        <h1 className="m-4 flex w-full text-3xl font-mono font-bold text-white">
          <img src="/Pictures/pokemon-icon.png" className="w-10 h-10"></img>
          PokeDiscovery
        </h1>
        <ul className="p-4 uppercase ">
          <li className="border-b border-gray-600 p-4 font-mono text-slate-200">
            <Link to="/">Home </Link>
          </li>
          <li className="border-b border-gray-600 p-4 font-mono text-slate-200 cursor-pointer" onClick={toggleDataMenu}>
            Data
            {dataMenu && (
              <ul className="p-4">
                <li className="border-b border-gray-600 p-4 font-mono text-slate-200">
                  <Link to="/abilities">Abilities</Link>
                </li>
                <li className="border-b border-gray-600 p-4 font-mono text-slate-200">
                  <Link to="/items">Items</Link>
                </li>
                <li className="border-b border-gray-600 p-4 font-mono text-slate-200">
                  <Link to="/compare">Compare</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-gray-600 p-4 font-mono text-slate-200">
            <Link to="/About">About</Link>
          </li>
          <li className="border-b border-gray-600 p-4 font-mono text-slate-200">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
