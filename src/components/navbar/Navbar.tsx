import React from "react";
import { Link } from "react-router-dom";
import { FilmIcon, SearchIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <nav className="flex justify-between px-10 h-24 items-center bg-gradient-to-bl from-black">
      <div className="flex flex-row items-center">
        <FilmIcon className="h-14 w-14 text-main" />
        <p className="text-lg text-main ml-4">YoMovie</p>
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

      <div className="flex items-center">
        <SearchIcon className="h-10 w-10 text-main" />
      </div>
    </nav>
  );
}

export default Navbar;
