import "./showrealStyles.scss";

import ShowrealVideo from "../../assets/images/Showreal/Showreal.mp4";
import { NavLink } from "react-router-dom";

const Showreal = () => {
  return (
    <>
      <div className="showreal-container">
        <div className="showreal-video-container">
          <video className="showreal-video" autoPlay loop muted playsInline>
            <source src={ShowrealVideo} />
          </video>
        </div>
        <NavLink to="/portfolio" className="portfolio-link">
          Portfolio
        </NavLink>
      </div>
    </>
  );
};

export default Showreal;
