import { NavLink, useLocation } from "react-router-dom";
import "./breadcrumbStyles.scss";
import breadcrumbArrow from "../../assets/images/breadcrumb-arrow.svg";

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
  if (location.pathname !== "") {
    crumbs.unshift(
      <div className="crumb" key="home">
        <NavLink to="/">Abigail Frączek</NavLink>
        <div className="breadcrumb-arrow"></div>
      </div>
    );
  }

  return (
    <>
      <div className="breadcrumbs">{crumbs}</div>
    </>
  );
};

export default Breadcrumb;
