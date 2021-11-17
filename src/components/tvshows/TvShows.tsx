import React from "react";
import img from "../../images/thewitcher.jpg";
import Navbar from "../navbar/Navbar";
import "../tvshows/style.css";

function TvShows() {
  return (
    <>
      <div className="h-screen bg-cover bg-gradient-to-r from-black ">
        <Navbar />
        <p>Hello</p>
      </div>
      <div className="h-screen background">
        <Navbar />
      </div>
      <div className="h-screen bg-cover shet bg-gradient-to-r from-black"></div>
    </>
  );
}

export default TvShows;
