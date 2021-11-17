import React from "react";
import { Link } from "react-router-dom";
import { FilmIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <nav className="flex justify-between px-10 h-24 items-center bg-gradient-to-bl from-black">
      <div className="flex flex-row ">
        <FilmIcon />
        <p className="text-lg text-main">YoMovie</p>
      </div>

      <ul className="flex gap-10">
        <Link className="hover:text-main text-3xl text-white" to="/">
          Home
        </Link>

        <Link className="hover:text-main text-3xl text-white" to="/tvshows">
          Tv Shows
        </Link>

        <Link className="hover:text-main text-3xl text-white" to="/movies">
          Movies
        </Link>

        <Link className="hover:text-main text-3xl text-white" to="/upcoming">
          Upcoming
        </Link>
      </ul>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </nav>
  );
}

export default Navbar;
