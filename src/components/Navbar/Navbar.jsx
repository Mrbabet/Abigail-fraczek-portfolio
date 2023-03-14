import "./NavbarStyles.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container nav__container">
      <div className="name">
        <Link to="/" className="logo">
          Abigail Frączek
        </Link>
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
