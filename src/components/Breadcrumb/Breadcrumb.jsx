import { NavLink, useLocation } from "react-router-dom";
import "./breadcrumbStyles.scss";

const Breadcrumb = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const crumbLabel = crumb.includes("realizacja") ? "Realizacja" : crumb;
      return (
        <div className="crumb" key={crumb}>
          <NavLink to={currentLink}>{crumbLabel}</NavLink>
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
