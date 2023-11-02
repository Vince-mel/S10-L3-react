import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "../src/style.css";
import Header from "./components/Header";
import MoviesCards from "./components/MoviesCards";
import Footer from "./components/Footer";
import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <MoviesCards title="Harry Potter" category="Fantasy" />
      <MoviesCards title="Star Wars" category="Sci Fi" />
      <MoviesCards title="Batman" category="Trending Now" />
      <Footer />
    </>
  );
}

export default App;
