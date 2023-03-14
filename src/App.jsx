import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PortfolioBtn from "./components/PortfolioBtn/PortfolioBtn";
import Showreal from "./components/Showreal/Showreal";

import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import NotFound from "./pages/notFound/NotFound";
import Portfolio from "./pages/portfolio/Portfolio";
import Realizacja from "./pages/realizacja/Realizacja";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Showreal />
      <PortfolioBtn />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
