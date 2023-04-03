import { Link } from "react-router-dom";
import portfolioLinks from "./data";
import { useInView } from "react-intersection-observer";

const PortfolioItem = ({ el }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // set the threshold to 50%
    triggerOnce: true, // trigger only once
  });

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
            <img src={el.Source} alt="" />
          ) : (
            <video loop autoPlay muted playsInline>
              <source src={el.Source} />
            </video>
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
