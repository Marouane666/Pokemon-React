import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = ({ onSearchInput }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    onSearchInput(value);
  };
  return (
    <>
      <nav className="bg-red-600 fixed w-full z-20 top-0 left-0 border-b border-yellow-400 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="https://flowbite.com/" className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pokémon Center
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={toggleNav}
              className="md:hidden text-yellow-500 dark:text-yellow-400 hover:bg-red-100 dark:hover-bg-black focus:outline-none focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-400 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="yellow"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </button>
            <div className={`md:block ${isNavOpen ? "block" : "hidden"}`}>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-yellow-100 rounded-lg bg-yellow-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-yellow-700">
                <li>
                  <Link
                    to="/pokedex"
                    className="block py-2 pl-3 pr-4 text-black bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500"
                    aria-current="page"
                  >
                    Pokédex
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-pokedex"
                    className="block py-2 pl-3 pr-4 text-black rounded hover-bg-yellow-100 md:hover-bg-transparent md:hover-text-red-700 md:p-0 md:dark:hover-text-red-500 dark:text-white dark:hover-bg-black dark:hover-text-white md:dark:hover-bg-transparent dark:border-yellow-700"
                    aria-current="page"
                  >
                    Adventures
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Search input */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          </div>
        </div>
      </nav>
    </>
  );
};
