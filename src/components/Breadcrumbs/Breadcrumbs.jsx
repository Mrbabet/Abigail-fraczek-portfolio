import { Link, useLocation } from "react-router-dom";
import "./breadcrumbStyles.scss";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Breadcrumbs = () => {
  const location = useLocation();
  console.log(location);
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <>
      <Breadcrumb className="breadcrumbs">
        {location && (
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={"/"}>
              Abigail Frączek
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {pathSegments.map((segment, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              as={Link}
              to={`/${pathSegments.slice(0, index + 1).join("/")}`}
            >
              {segment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
};
export default Breadcrumbs;
