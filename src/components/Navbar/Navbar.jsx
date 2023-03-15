import "./NavbarStyles.scss";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "../BreadCrumb/Breadcrumb";

const Navbar = () => {
  return (
    <nav className="container nav__container">
      <div className="name">
        <Link to="/" className="logo">
          Abigail Frączek
        </Link>
        <Breadcrumb />
      </div>

      <div className="info-btn">
        <Link to="/info" className="info-link">
          Info
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
