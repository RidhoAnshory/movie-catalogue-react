import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TvShows from "./components/tvshows/TvShows";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TvShows />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
