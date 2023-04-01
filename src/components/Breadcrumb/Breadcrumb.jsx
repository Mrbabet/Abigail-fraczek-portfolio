import { NavLink, useLocation } from "react-router-dom";
import "./breadcrumbStyles.scss";
import breadcrumbDescriptions from "./data";

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
    <div className="breadcrumbs">
      <div className="crumb">
        <NavLink to="/" className="logo">
          Abigail Frączek
        </NavLink>
      </div>

      {crumbs}
      {breadcrumbDescriptions.flatMap((el) =>
        el.baczekWebsite.map((el) => {
          return (
            <>
              {location.pathname.startsWith("/portfolio/Realizacja") ? (
                <>
                  <span className="breadcrumb-title">{el.title}</span>
                  <span className="breadcrumb-description">
                    {el.description}
                  </span>
                </>
              ) : null}
            </>
          );
        })
      )}
    </div>
  );
};

export default Breadcrumb;
