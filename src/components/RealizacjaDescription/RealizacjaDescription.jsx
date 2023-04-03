import "./realizacjadescriptionStyles.scss";
import breadcrumbDescriptions from "../Breadcrumb/data";
import NotFound from "../../pages/notFound/NotFound";
import React from "react";

const RealizacjaDescription = () => {
  // Create an object that maps each path to the corresponding breadcrumb data
  const pathToData = {
    "/portfolio/realizacja1": "baczekWebsite",
    "/portfolio/realizacja2": "baczekLogo",
    "/portfolio/realizacja3": "tulleGirl",
    "/portfolio/realizacja4": "jaskolka",
    "/portfolio/realizacja5": "answear",
    "/portfolio/realizacja6": "logofolio",
    "/portfolio/realizacja7": "kamsaDesign",
    "/portfolio/realizacja8": "freckles",
    "/portfolio/realizacja9": "dot36",
    "/portfolio/realizacja10": "walentynki",
    "/portfolio/realizacja11": "greenLadyInRed",
    "/portfolio/realizacja12": "KoopSw",
  };

  // Find the corresponding breadcrumb data based on the current path
  const dataKey = pathToData[location.pathname];
  const breadcrumbData = dataKey
    ? breadcrumbDescriptions.flatMap((el) => el[dataKey])
    : null;

  // Render the breadcrumb data if it exists, otherwise render a Not Found component
  return (
    <div className="mobile-realizacja-component">
      {breadcrumbData ? (
        breadcrumbData.map((el, index) => (
          <React.Fragment key={index}>
            <div className="mobile-realizacja-component__title">
              {el.title}
              <div className="mobile-realizacja-component__title-year">
                {el.year}
              </div>
            </div>
            <div className="mobile-realizacja-component__description">
              {el.description}
            </div>
          </React.Fragment>
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default RealizacjaDescription;
