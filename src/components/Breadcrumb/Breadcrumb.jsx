import { Link, useLocation } from "react-router-dom";
import "./breadcrumbStyles.scss";
import breadcrumbArrow from "../../assets/images/breadcrumb-arrow.svg";

const Breadcrumb = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumb;
