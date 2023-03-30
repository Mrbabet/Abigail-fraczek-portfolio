import { useState } from "react";
import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import "../info/infoStyles.scss";
import "../../components/InfoComponents/Contact/contactStyles.scss";
import "../../components/InfoComponents/Offer/offerStyles.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = lazy(() =>
  import("../../components/InfoComponents/Contact/Contact")
);
const Informator = lazy(() =>
  import("../../components/InfoComponents/Informator/Informator")
);
const Offer = lazy(() => import("../../components/InfoComponents/Offer/Offer"));
const Glossary = lazy(() =>
  import("../../components/InfoComponents/Glossary/Glossary")
);

const Info = () => {
  const [currentSubNav, setCurrentSubNav] = useState(<Contact />);
  const [activeButton, setActiveButton] = useState("kontakt");

  const handleClick = (component, btnName) => {
    setCurrentSubNav(<Suspense>{component}</Suspense>);
    setActiveButton(btnName);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <main>
        <div className="grid-container">
          <div className="sub-nav-container">
            <div className="sub-nav">
              <button
                onClick={() => handleClick(<Contact />, "kontakt")}
                type="button"
                className={`nav-btn ${
                  activeButton === "kontakt" ? "active" : ""
                }`}
              >
                Kontakt
              </button>
              <button
                onClick={() => handleClick(<Offer />, "oferta")}
                type="button"
                className={`nav-btn ${
                  activeButton === "oferta" ? "active" : ""
                }`}
              >
                Oferta
              </button>
              <button
                onClick={() => handleClick(<Informator />, "informator")}
                type="button"
                className={`nav-btn ${
                  activeButton === "informator" ? "active" : ""
                }`}
              >
                Informator
              </button>
              <button
                onClick={() => handleClick(<Glossary />, "słowniczek")}
                type="button"
                className={`nav-btn ${
                  activeButton === "słowniczek" ? "active" : ""
                }`}
              >
                Słowniczek
              </button>
            </div>
          </div>
          {currentSubNav}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Info;
