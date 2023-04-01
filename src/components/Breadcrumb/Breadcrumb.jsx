import { NavLink, useLocation } from "react-router-dom";
import "./breadcrumbStyles.scss";
import MRD from "../MobileRealizacjaDescription/MRD";

const Breadcrumb = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <NavLink to={currentLink}>{crumb}</NavLink>
        </div>
      );
    });

  return (
    <>
      <div className="breadcrumbs">
        <div className="crumb">
          <NavLink to="/" className="logo">
            Abigail Frączek
          </NavLink>
        </div>

        {crumbs}
      </div>
    </>
  );
};

export default Breadcrumb;
