import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.scss";

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
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="info"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Info />
          </Suspense>
        }
      />
      <Route
        path="portfolio"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route
        path="portfolio/realizacja/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Realizacja />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
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
