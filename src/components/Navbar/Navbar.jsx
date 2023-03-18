import "./NavbarStyles.scss";
import "../Breadcrumb/breadcrumbStyles.scss";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import PrevPageBtn from "../../components/PrevPageBtn/PrevPageBtn";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="container nav__container">
      <div className="name">
        <Link to="/" className="logo">
          Abigail Frączek
        </Link>
        <Breadcrumb />
      </div>
      <div className="right-side">
        {location.pathname !== "/info" && (
          <div className="info-btn">
            <Link to="/info" className="info-link">
              Info
            </Link>
          </div>
        )}
        <PrevPageBtn />
      </div>
    </header>
  );
};

export default Navbar;
