import "../info/infoStyles.scss";
import "../../components/InfoComponents/Contact/contactStyles.scss";
import "../../components/InfoComponents/Offer/offerStyles.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import Contact from "../../components/InfoComponents/Contact/Contact";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import Informator from "../../components/InfoComponents/Informator/Informator";
import Offer from "../../components/InfoComponents/Offer/Offer";
import Glossary from "../../components/InfoComponents/Glossary/Glossary";
import { useState } from "react";

const Info = () => {
  const [currentSubNav, setCurrentSubNav] = useState(<Contact />);

  return (
    <>
      <Navbar />
      <main>
        <div className="grid-container">
          <div className="sub-nav-container">
            <div className="sub-nav">
              <button
                onClick={() => setCurrentSubNav(<Contact />)}
                type="button"
                className="nav-btn"
              >
                Kontakt
              </button>
              <button
                onClick={() => setCurrentSubNav(<Offer />)}
                type="button"
                className="nav-btn"
              >
                Oferta
              </button>
              <button
                onClick={() => setCurrentSubNav(<Informator />)}
                type="button"
                className="nav-btn"
              >
                Informator
              </button>
              <button
                onClick={() => setCurrentSubNav(<Glossary />)}
                className="nav-btn"
                type="button"
              >
                Słowniczek
              </button>
            </div>
          </div>
          {currentSubNav}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Info;
