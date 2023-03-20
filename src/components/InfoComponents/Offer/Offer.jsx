import "./offerStyles.scss";

const Offer = () => {
  return (
    <div className="offer-components">
      <div className="offer">
        <div className="offer-header">
          <span className="title">Logo</span>
          <span className="offer__price">800 - 2 600 zł</span>
        </div>
        <ul>
          <li>Zestaw pytań pomagających nakreślić strategię brandingową</li>
          <li>Analiza konstrukcji</li>
          <li>Sygnet / logotyp / sygnet + logotyp</li>
          <li>Wersja główna, wersja dodatkowa, sygnet</li>
          <li>Kolorystyka znaku</li>
          <li>Grafika profilowa z logo</li>
          <li>Pliki Ai, PDF, PNG, JPG</li>
          <li>Księga Znaku (PDF)</li>
        </ul>
      </div>
      <div className="offer">
        <div className="offer-header">
          <span className="title">Identyfikacja wizualna</span>
          <span className="offer__price">2400 zł +</span>
        </div>
        <ul>
          <li>Logo</li>
          <li>Kolorystyka marki</li>
          <li>Font/y firmowe</li>
          <li>Materiały promocyjne</li>
          <li>Księga identyfikacji Wizualnej (PDF)</li>
        </ul>
      </div>
      <div className="offer">
        <div className="offer-header">
          <span className="title">Materiały promocyjne</span>
        </div>
        <ul>
          <li>
            Wizytówka<span className="offer__price">200 zł +</span>
          </li>
          <li>
            Papier firmowy
            <span className="offer__price">70 - 120 zł</span>
          </li>
          <li>
            E-mailowa stopka firmowa
            <span className="offer__price">70 - 120 zł</span>
          </li>
          <li>
            Teczka
            <span className="offer__price">100 zł +</span>
          </li>
          <li>
            Koperta
            <span className="offer__price">70 - 120 zł</span>
          </li>
          <li>
            Identyfikator
            <span className="offer__price">200 zł +</span>
          </li>
          <li>
            Naklejka
            <span className="offer__price">70 zł +</span>
          </li>
          <li>
            Smycz
            <span className="offer__price">70 - 120 zł </span>
          </li>
          <li>
            Grafika na ubranie
            <span className="offer__price">400 zł +</span>
          </li>
          <li>
            Ulotka
            <span className="offer__price">300 zł +</span>
          </li>
          <li>
            Prospekt
            <span className="offer__price">300 zł +</span>
          </li>
          <li>
            Katalog
            <span className="offer__price">200 + 60 zł od strony</span>
          </li>
          <li>
            Okładka książki
            <span className="offer__price">700 zł +</span>
          </li>
          <li>
            Plakat
            <span className="offer__price">500 zł +</span>
          </li>
          <li>
            Opakowanie produktu
            <span className="offer__price">400 zł +</span>
          </li>
          <li>Inne...</li>
        </ul>
      </div>
      <div className="offer">
        <div className="offer-header">
          <span className="title"> Media społecznościowe</span>
          <span className="offer__price">200 zł +</span>
        </div>
        <ul>
          <li>Grafika/ki</li>
          <li>Post/y</li>
        </ul>
      </div>
      <div className="offer">
        <div className="offer-header">
          <span className="title"> Strona internetowa typu Wizytówka</span>
          <span className="offer__price">3000 zł +</span>
        </div>
        <ul>
          <li>
            Analiza UX (audyt konkurencji, 3 persony, cele konwersji, user-flow,
            site-map'a, makiety kontentowe)
          </li>
          <li>Projekt UI (design strony)</li>
          <li>Kodowanie strony</li>
        </ul>
      </div>
      <div className="offer">
        <div className="offer-header">
          <span className="title">Ilustracja</span>
          <span className="offer__price">3000 zł +</span>
        </div>
      </div>
      <div className="offer">
        <div className="offer-header">
          <span className="title">Rebranding / Redesign</span>
        </div>
      </div>
      <div className="offer-header">
        <span className="offer__adn">*ceny netto</span>
      </div>
    </div>
  );
};

export default Offer;
