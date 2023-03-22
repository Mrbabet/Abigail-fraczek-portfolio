import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";

import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import NotFound from "./pages/notFound/NotFound";
import Portfolio from "./pages/portfolio/Portfolio";
import Realizacja from "./pages/realizacja/Realizacja";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="info" element={<Info />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="portfolio/realizacja/:id" element={<Realizacja />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
