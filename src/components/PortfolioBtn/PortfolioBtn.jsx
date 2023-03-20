import "./portfoliobtnStyles.scss";
import { NavLink } from "react-router-dom";

const PortfolioBtn = () => {
  return (
    <NavLink to="/portfolio" className="portfolio-link">
      Portfolio
    </NavLink>
  );
};

export default PortfolioBtn;
