import React, { lazy, Suspense } from "react";
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
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            index
            element={
              <>
                <Suspense>
                  <Home />
                </Suspense>
              </>
            }
          />
          <Route
            path="info"
            element={
              <>
                <Suspense>
                  <Info />
                </Suspense>
              </>
            }
          />
          <Route
            path="portfolio"
            element={
              <>
                <Suspense>
                  <Portfolio />
                </Suspense>
              </>
            }
          />
          {portfolioLinks.map((el) => (
            <Route
              key={el.id}
              path={`portfolio/realizacja/${el.Link}`}
              element={
                <>
                  <Suspense>
                    <Realizacja />
                  </Suspense>
                </>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <>
                <Suspense>
                  <NotFound />
                </Suspense>
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
