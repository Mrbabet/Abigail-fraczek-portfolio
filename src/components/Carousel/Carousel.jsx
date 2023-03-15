import "../Carousel/carouselStyles.scss";
import Marquee from "react-fast-marquee";

// import MouseFollower from "mouse-follower";
// import gsap from "gsap";
// import showreal from "../../assets/images/Showreal.png";

// MouseFollower.registerGSAP(gsap);

// const cursor = new MouseFollower({
//   el: null,
//   container: document.body,
//   className: "mf-cursor",
//   innerClassName: "mf-cursor-inner",
//   textClassName: "mf-cursor-text",
//   mediaClassName: "mf-cursor-media",
//   mediaBoxClassName: "mf-cursor-media-box",
//   iconSvgClassName: "mf-svgsprite",
//   iconSvgNamePrefix: "-",
//   iconSvgSrc: "",
//   dataAttr: "cursor",
//   hiddenState: "-hidden",
//   textState: "-text",
//   iconState: "-icon",
//   activeState: "-active",
//   mediaState: "-media",
//   stateDetection: {
//     "-pointer": "a,button",
//     "-hidden": "iframe",
//   },
//   visible: false,
//   visibleOnState: false,
//   speed: 0.3,
//   ease: "expo.out",
//   overwrite: true,
//   skewing: 0,
//   skewingText: 0,
//   skewingIcon: 0,
//   skewingMedia: 0,
//   skewingDelta: 0,
//   skewingDeltaMax: 0,
//   stickDelta: 0,
//   showTimeout: 0,
//   hideOnLeave: true,
//   hideTimeout: 0,
//   hideMediaTimeout: 0,
// });
// const el = document.querySelector(".test");
// el.addEventListener("mouseenter", () => {
//   cursor.show();
//   cursor.setImg(showreal);
// });

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
