import { Link } from "react-router-dom";
import "./informatorcardStyles.scss";

const InformatorCard = () => {
  return (
    <>
      <div className="information">
        <Link className="information-link" to={"/info"}>
          <div className="description-1">
            Logo jest wizualną <br />
            reprezentacją <br />
            Ciebie i Twojego <br />
            biznesu.
          </div>
          <div className="description-2">
            Informator: <br />
            <div>
              <span>Dlaczego logo</span> <br />
              <span>to ważny element</span> <br />
              <span> w budowaniu</span> <br />
              <span>marki?</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="information">
        <Link className="information-link" to={"/info"}>
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
            <div>
              <span> Spójna identyfikacja</span>
              <br />
              <span>wizualna - dlaczego</span> <br />
              <span>warto w nią zainwestować?</span> <br />
            </div>
          </div>
        </Link>
      </div>
      <div className="information">
        <Link className="information-link" to={"/info"}>
          <div className="description-1">
            Strona internetowa
            <br /> to cyfrowa wizytówka
            <br /> i dostęp do tysięcy
            <br /> potencjalnych klientów.
          </div>
          <div className="description-2">
            Informator: <br />
            <div>
              <span>Strona www -</span>
              <br />
              <span>jakie niesie korzyści?</span> <br />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default InformatorCard;
