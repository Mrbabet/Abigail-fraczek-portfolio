import "./carouselStyles.scss";
import Marquee from "react-fast-marquee";

const Carousel = () => {
  return (
    <Marquee className="text-slider" speed={120} gradient={false}>
      <div className="carousel-item">Identyfikacja Wizualna</div>
      <div className="carousel-item">Web Design</div>
      <div className="carousel-item">Grafika 2D</div>
      <div className="carousel-item">Ilustracja</div>
    </Marquee>
  );
};

export default Carousel;
