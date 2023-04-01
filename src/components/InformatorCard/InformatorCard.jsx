import { NavLink } from "react-router-dom";

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
            Dlaczego logo <br />
            to ważny element <br />
            w budowaniu <br />
            marki?
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
          <NavLink>
            Spójna identyfikacja
            <br />
            wizualna - dlaczego <br />
            warto w nią zainwestować? <br />
            marki?
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
          <NavLink>
            Strona www -<br />
            jakie niesie korzyści? <br />
          </NavLink>
        </div>
        <div className="arrow"></div>
      </div>
    </>
  );
};

export default InformatorCard;
