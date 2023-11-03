import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "../src/style.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TVShows from "./components/TVShows";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Header />
        <Routes>
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
