import { NavLink } from "react-router-dom";
import "./informatorcardStyles.scss";

const InformatorCard = () => {
  return (
    <>
      <div className="information">
        <div className="description-1">
          Logo jest wizualną <br />
          reprezentacją <br />
          Ciebie i Twojego <br />
          biznesu.
        </div>
        <div className="description-2">
          Informator: <br />
          <NavLink to={"/info"}>
            <span>Dlaczego logo</span> <br />
            <span>to ważny element</span> <br />
            <span> w budowaniu</span> <br />
            <span>marki?</span>
          </NavLink>
        </div>
        <div className="arrow"></div>
      </div>
      <div className="information">
        <div className="description-1">
          Konsekwentne
          <br /> stosowanie Visual
          <br /> Key przekłada się
          <br /> na wzrost pozycji
          <br />
          rynkowej.
        </div>
        <div className="description-2">
          Informator: <br />
          <NavLink to={"/info"}>
            <span> Spójna identyfikacja</span>
            <br />
            <span>wizualna - dlaczego</span> <br />
            <span>warto w nią zainwestować?</span> <br />
          </NavLink>
        </div>
        <div className="arrow"></div>
      </div>
      <div className="information">
        <div className="description-1">
          Strona internetowa
          <br /> to cyfrowa wizytówka
          <br /> i dostęp do tysięcy
          <br /> potencjalnych klientów.
        </div>
        <div className="description-2">
          Informator: <br />
          <NavLink to={"/info"}>
            <span>Strona www -</span>
            <br />
            <span>jakie niesie korzyści?</span> <br />
          </NavLink>
        </div>
        <div className="arrow"></div>
      </div>
    </>
  );
};

export default InformatorCard;
