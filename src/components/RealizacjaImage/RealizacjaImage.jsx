import realizacjaData from "./data";
import React from "react";
import { useLocation } from "react-router-dom";
import NotFound from "../../pages/notFound/NotFound";

const RealizacjaImage = () => {
  const location = useLocation();

  const renderMedia = (mediaItem) => {
    const mediaProps =
      mediaItem.Type === "image"
        ? {
            className: "realizacja-img",
            src: mediaItem.Source,
            alt: "",
          }
        : {
            className: "realizacja-video",
            loop: true,
            autoPlay: true,
            muted: true,
          };

    return (
      <React.Fragment key={mediaItem.id}>
        {mediaItem.Type === "image" ? (
          <img {...mediaProps} />
        ) : (
          <video {...mediaProps}>
            <source src={mediaItem.Source} />
          </video>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="realizacjaImage-component">
      {location.pathname ===
      "/portfolio/realizacja/RealizacjaConstructionCompanyWebConceptDesign" ? (
        realizacjaData.flatMap((el) => el.baczekWebsite.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/BaczekLogo" ? (
        realizacjaData.flatMap((el) => el.baczekLogo.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/TulleGirl" ? (
        realizacjaData.flatMap((el) => el.tulleGirl.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/Jaskolka" ? (
        realizacjaData.flatMap((el) => el.jaskolka.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/Answear" ? (
        realizacjaData.flatMap((el) => el.answear.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/Logofolio" ? (
        realizacjaData.flatMap((el) => el.logofolio.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/KamsaDesign" ? (
        realizacjaData.flatMap((el) => el.kamsaDesign.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/Freckles" ? (
        realizacjaData.flatMap((el) => el.freckles.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/36DaysofType" ? (
        realizacjaData.flatMap((el) => el.dot36.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/Walentynki" ? (
        realizacjaData.flatMap((el) => el.walentynki.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/GreenLadyInRed" ? (
        realizacjaData.flatMap((el) => el.greenLadyInRed.map(renderMedia))
      ) : location.pathname === "/portfolio/realizacja/KooperatywaSwiatla" ? (
        realizacjaData.flatMap((el) => el.kooperatywaSwiatla.map(renderMedia))
      ) : location.pathname === "*" ? (
        <NotFound />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default RealizacjaImage;
