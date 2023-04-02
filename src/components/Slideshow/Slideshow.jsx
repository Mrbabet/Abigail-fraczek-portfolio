import sliderData from "./data";
import Marquee from "react-fast-marquee";
import "./slideshowStyles.scss";
import { Link } from "react-router-dom";

const Slideshow = () => {
  return (
    <Marquee
      className="slider"
      speed={120}
      gradient={false}
      pauseOnHover={true}
    >
      {sliderData.map((item, index) => (
        <Link
          to={`/portfolio/${item.link}`}
          key={index}
          className="carousel-item"
        >
          {item.Type === "image" ? (
            <img className={item.size} src={item.Source} />
          ) : (
            <video className={item.size} loop autoPlay muted>
              <source src={item.Source} />
            </video>
          )}
        </Link>
      ))}
    </Marquee>
  );
};

export default Slideshow;
