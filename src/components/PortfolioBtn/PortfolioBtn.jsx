import "./portfoliobtnStyles.scss";
import { Link, NavLink } from "react-router-dom";

const PortfolioBtn = () => {
  return (
    <Link to="/portfolio" className="portfolio-link">
      Portfolio
    </Link>
  );
};

export default PortfolioBtn;
