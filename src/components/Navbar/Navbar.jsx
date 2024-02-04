import "./NavbarStyles.scss";
import "../Breadcrumbs/breadcrumbStyles.scss";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import PrevPageBtn from "../../components/PrevPageBtn/PrevPageBtn";

const Navbar = () => {
  return (
    <header className="nav__container">
      <Breadcrumbs />
      <div className="right-side">
        {location.pathname !== "/info" && (
          <NavLink to="/info" className="info-link">
            Info
          </NavLink>
        )}
        <PrevPageBtn />
      </div>
    </header>
  );
};

export default Navbar;
