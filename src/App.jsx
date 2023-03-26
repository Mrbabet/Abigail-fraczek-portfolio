import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.scss";
import portfolioLinks from "./components/PortfolioImage/data";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/home/Home"));
const Info = lazy(() => import("./pages/info/Info"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Realizacja = lazy(() => import("./pages/realizacja/Realizacja"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="info"
        element={
          <Suspense fallback={<Loading />}>
            <Info />
          </Suspense>
        }
      />
      <Route
        path="portfolio"
        element={
          <Suspense fallback={<Loading />}>
            <Portfolio />
          </Suspense>
        }
      />
      {portfolioLinks.map((el) => (
        <Route
          key={el.id}
          path={`portfolio/realizacja/${el.Link}`}
          element={
            <Suspense fallback={<Loading />}>
              <Realizacja />
            </Suspense>
          }
        />
      ))}

      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
