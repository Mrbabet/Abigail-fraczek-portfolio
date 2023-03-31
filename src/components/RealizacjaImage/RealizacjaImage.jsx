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
            playsInline: true,
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
      {location.pathname === "/portfolio/Realizacja1" ? (
        realizacjaData.flatMap((el) => el.baczekWebsite.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja2" ? (
        realizacjaData.flatMap((el) => el.baczekLogo.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja3" ? (
        realizacjaData.flatMap((el) => el.tulleGirl.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja4" ? (
        realizacjaData.flatMap((el) => el.jaskolka.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja5" ? (
        realizacjaData.flatMap((el) => el.answear.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja6" ? (
        realizacjaData.flatMap((el) => el.logofolio.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja7" ? (
        realizacjaData.flatMap((el) => el.kamsaDesign.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja8" ? (
        realizacjaData.flatMap((el) => el.freckles.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja9" ? (
        realizacjaData.flatMap((el) => el.dot36.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja10" ? (
        realizacjaData.flatMap((el) => el.walentynki.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja11" ? (
        realizacjaData.flatMap((el) => el.greenLadyInRed.map(renderMedia))
      ) : location.pathname === "/portfolio/Realizacja12" ? (
        realizacjaData.flatMap((el) => el.kooperatywaSwiatla.map(renderMedia))
      ) : location.pathname === "*" ? (
        <NotFound />
      ) : null}
    </div>
  );
};

export default RealizacjaImage;
