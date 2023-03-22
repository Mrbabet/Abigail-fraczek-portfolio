import "./notFound.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return (
    <div className="not-found">
      <h1 className="error404">404</h1>
      <h2 className="page-not-found">Page not found</h2>
      <p className="page-not-found__description">
        The page you are looking for doesn’t exist or an other error occurred.
      </p>
    </div>
  );
};

export default NotFound;
