import { Link } from "react-router-dom";
import portfolioLinks from "./data";

const PortfolioItem = ({ el }) => {
  return (
    <Link
      to={`/portfolio/realizacja/${el.Link}`}
      key={el.id}
      className="portfolio-image"
    >
      {el.Type === "image" ? (
        <img src={el.Source} alt="" />
      ) : (
        <video loop autoPlay muted>
          <source src={el.Source} />
        </video>
      )}
      <div className="portfolio-image__text">
        <h4 className="title">{el.Title}</h4>
        <p className="description">{el.Description}</p>
      </div>
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
