import "../Carousel/carouselStyles.scss";

const Carousel = () => {
  return (
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
  );
};

export default Carousel;
