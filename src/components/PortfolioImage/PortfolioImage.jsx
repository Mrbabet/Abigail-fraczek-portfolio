import { Link } from "react-router-dom";
import portfolioLinks from "./data";
import { useInView } from "react-intersection-observer";
import "./mask.scss";

import { useState } from "react";

const PortfolioItem = ({ el }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // set the threshold to 50%
    triggerOnce: true, // trigger only once
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      to={`/portfolio/${el.Link}`}
      key={el.id}
      className="portfolio-image"
      ref={ref}
    >
      {inView && (
        <>
          {el.Type === "image" ? (
            <div
              className="portfolio-image__wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={el.Source} alt="" />
              {hovered && (
                <div className="mask">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.9767 0L44.3793 5.59811L84.7986 46.0224H0V53.9776H84.7986L44.3793 94.4019L49.9767 100L100 50.0295L49.9767 0Z"
                      fill="#000"
                    />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            <div
              className="portfolio-video__wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video loop autoPlay muted playsInline>
                <source src={el.Source} />
              </video>
              {hovered && (
                <div className="mask">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.9767 0L44.3793 5.59811L84.7986 46.0224H0V53.9776H84.7986L44.3793 94.4019L49.9767 100L100 50.0295L49.9767 0Z"
                      fill="#000"
                    />
                  </svg>
                </div>
              )}
            </div>
          )}

          <div className="portfolio-image__text">
            <h4 className="title">{el.Title}</h4>
            <p className="description">{el.Description}</p>
          </div>
        </>
      )}
    </Link>
  );
};

const PortfolioImage = () => {
  return (
    <>
      {portfolioLinks.map((el) => (
        <PortfolioItem key={el.id} el={el} />
      ))}
    </>
  );
};

export default PortfolioImage;
