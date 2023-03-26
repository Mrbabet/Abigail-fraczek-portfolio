import realizacjaData from "./data";
import React from "react";
import { useLocation } from "react-router-dom";

const RealizacjaImage = () => {
  const location = useLocation();

  const mediaTypeProps = {
    image: {
      className: "realizacja-img",
      alt: "",
    },
    video: {
      className: "realizacja-video",
      loop: true,
      autoPlay: true,
      muted: true,
    },
  };

  const getMediaItems = () => {
    if (
      location.pathname ===
      "/portfolio/realizacja/RealizacjaConstructionCompanyWebConceptDesign"
    ) {
      return realizacjaData.flatMap((el) => el.baczekWebsite);
    } else if (location.pathname === "/portfolio/realizacja/BaczekLogo") {
      return realizacjaData.flatMap((el) => el.baczekLogo);
    } else if (location.pathname === "/portfolio/realizacja/TulleGirl") {
      return realizacjaData.flatMap((el) => el.tulleGirl);
    } else if (location.pathname === "/portfolio/realizacja/Jaskółka") {
      return realizacjaData.flatMap((el) => el.jaskolka);
    } else if (location.pathname === "/portfolio/realizacja/Answear") {
      return realizacjaData.flatMap((el) => el.answear);
    } else if (location.pathname === "/portfolio/realizacja/Logofolio") {
      return realizacjaData.flatMap((el) => el.logofolio);
    } else if (location.pathname === "/portfolio/realizacja/KamsaDesign") {
      return realizacjaData.flatMap((el) => el.kamsaDesign);
    } else if (location.pathname === "/portfolio/realizacja/Freckles") {
      return realizacjaData.flatMap((el) => el.freckles);
    } else if (location.pathname === "/portfolio/realizacja/DoT36") {
      return realizacjaData.flatMap((el) => el.dot36);
    } else if (location.pathname === "/portfolio/realizacja/Walentynki") {
      return realizacjaData.flatMap((el) => el.walentynki);
    } else if (location.pathname === "/portfolio/realizacja/GreenLadyInRed") {
      return realizacjaData.flatMap((el) => el.greenLadyInRed);
    } else if (
      location.pathname === "/portfolio/realizacja/KooperatywaŚwiatła"
    ) {
      return realizacjaData.flatMap((el) => el.kooperatywaSwiatla);
    }
  };

  const renderMedia = (mediaItem) => {
    const mediaProps = mediaTypeProps[mediaItem.Type];
    const sourceProps = { src: mediaItem.Source };

    return (
      <React.Fragment key={mediaItem.id}>
        {mediaItem.Type === "image" ? (
          <img {...mediaProps} {...sourceProps} />
        ) : (
          <video {...mediaProps}>
            <source {...sourceProps} />
          </video>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="realizacjaImage-component">
      {getMediaItems().map(renderMedia)}
    </div>
  );
};

export default RealizacjaImage;
