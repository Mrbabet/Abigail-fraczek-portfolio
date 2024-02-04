import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import portfolioLinks from "../../components/PortfolioImage/data";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../../pages/home/Home"));
const Info = lazy(() => import("../../pages/info/Info"));
const Portfolio = lazy(() => import("../../pages/portfolio/Portfolio"));
const Realizacja = lazy(() => import("../../pages/realizacja/Realizacja"));
const NotFound = lazy(() => import("../../pages/notFound/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence
        onExitComplete={() => window.scrollTo(0, 0)}
        mode="wait"
        initial={false}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="portfolio" element={<Portfolio />} />
          {portfolioLinks.map((el) => (
            <Route
              key={el.id}
              path={`portfolio/${el.Link}`}
              element={<Realizacja />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
