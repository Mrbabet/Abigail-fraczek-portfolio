import realizacjaData from "./data";
import React from "react";

const RealizacjaImage = () => {
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
      {realizacjaData.flatMap((el) => el.baczekWebsite.map(renderMedia))}
    </div>
  );
};

export default RealizacjaImage;
