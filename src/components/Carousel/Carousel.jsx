import "./carouselStyles.scss";
import Marquee from "react-fast-marquee";

const Carousel = () => {
  return (
    <Marquee speed={120} gradient={false}>
      <div className="carousel">
        <div className="carousel-slider">
          <div className="carousel-list">
            <div className="carousel-item">Identyfikacja Wizualna</div>
            <div className="carousel-item">Web Design</div>
            <div className="carousel-item">Grafika 2D</div>
            <div className="carousel-item">Ilustracja</div>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Carousel;
