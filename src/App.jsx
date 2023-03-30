import "./App.scss";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
