import "./NavbarStyles.scss";
import "../Breadcrumb/breadcrumbStyles.scss";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import PrevPageBtn from "../../components/PrevPageBtn/PrevPageBtn";

const Navbar = () => {
  return (
    <header className="nav__container">
      <Breadcrumb />
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
