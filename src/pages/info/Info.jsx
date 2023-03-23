import { useState } from "react";
import React, { lazy, Suspense } from "react";

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

  return (
    <>
      <Navbar />
      <main>
        <div className="grid-container">
          <div className="sub-nav-container">
            <div className="sub-nav">
              <button
                onClick={() =>
                  setCurrentSubNav(
                    <Suspense>
                      <Contact />
                    </Suspense>
                  )
                }
                type="button"
                className="nav-btn"
              >
                Kontakt
              </button>
              <button
                onClick={() =>
                  setCurrentSubNav(
                    <Suspense>
                      <Offer />
                    </Suspense>
                  )
                }
                type="button"
                className="nav-btn"
              >
                Oferta
              </button>
              <button
                onClick={() =>
                  setCurrentSubNav(
                    <Suspense>
                      <Informator />
                    </Suspense>
                  )
                }
                type="button"
                className="nav-btn"
              >
                Informator
              </button>
              <button
                onClick={() =>
                  setCurrentSubNav(
                    <Suspense>
                      <Glossary />
                    </Suspense>
                  )
                }
                type="button"
                className="nav-btn"
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
