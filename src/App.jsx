import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import NotFound from "./pages/notFound/NotFound";
import Portfolio from "./pages/portfolio/Portfolio";
import Realizacja from "./pages/realizacja/Realizacja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/realizacja" element={<Realizacja />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
