import "./NavbarStyles.scss";
import "../Breadcrumb/breadcrumbStyles.scss";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import PrevPageBtn from "../../components/PrevPageBtn/PrevPageBtn";

const Navbar = () => {
  return (
    <header className="nav__container">
      <Breadcrumb />
      <div className="right-side">
        {location.pathname !== "/info" && (
          <div className="info-btn">
            <NavLink to="/info" className="info-link">
              Info
            </NavLink>
          </div>
        )}
        <PrevPageBtn />
      </div>
    </header>
  );
};

export default Navbar;
