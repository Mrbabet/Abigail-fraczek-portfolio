import sliderData from "./data";
import Marquee from "react-fast-marquee";
import "./slideshowStyles.scss";

const Slideshow = () => {
  return (
    <Marquee className="slider" speed={120} gradient={false}>
      {sliderData.map((item, index) => (
        <div key={index} className="carousel-item">
          {item.Type === "image" ? (
            <img src={item.Source} />
          ) : (
            <video loop autoPlay muted>
              <source src={item.Source} />
            </video>
          )}
        </div>
      ))}
    </Marquee>
  );
};

export default Slideshow;
