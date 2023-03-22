import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import "./App.scss";

import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import NotFound from "./pages/notFound/NotFound";
import Portfolio from "./pages/portfolio/Portfolio";
import Realizacja from "./pages/realizacja/Realizacja";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="info"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Info />
          </React.Suspense>
        }
      />
      <Route
        path="portfolio"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
          </React.Suspense>
        }
      />
      <Route
        path="portfolio/realizacja/:id"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Realizacja />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
