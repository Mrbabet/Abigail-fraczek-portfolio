import BaczekWebsite from "../../assets/images/1. Bączek_Website/Okładka/Okladka.mp4";
import BaczekLogo from "../../assets/images/2. Bączek_Logo/Okładka/Okladka.mp4";
import TulleGirl from "../../assets/images/3. PORTRET-Tulle_Girl/Okładka/Okladka.webp";
import Jaskolka from "../../assets/images/4. Jaskółka/Okładka/Okladka.webp";
import Answear from "../../assets/images/5. Answear/Okładka/Okladka.mp4";
import Logofolio from "../../assets/images/5. Logofolio_2021-22/Okładka/Okladka.webp";
import KamsaDesign from "../../assets/images/7. Kamsa_Design/Okładka/Okladka.mp4";
import Freckles from "../../assets/images/8. PORTRET-Freckles/Okładka/Okladka.webp";
import DoT36 from "../../assets/images/9. 36-DoT/Okładka/Okladka.mp4";
import Walentynki from "../../assets/images/10. Walentynki/Okładka/Okladka.png";
import GreenLadyInRed from "../../assets/images/11. PORTRET-Green_Lady_in_Red/Okładka/Okladka.webp";
import KooperatywaSwiatla from "../../assets/images/12. Kooperatywa_Światła/Okładka/Okladka.mp4";

import { Link } from "react-router-dom";

const portfolioLinks = [
  {
    id: 0,
    Source: BaczekWebsite,
    Title: "Construction Company Web Concept Design",
    Description:
      "Koncept interfejsu strony internetowej polskiej firmy budowlanej PRS-Bud Bączek.",
    Type: "video",
    Link: "Realizacja Construction Company Web Concept Design",
  },
  {
    id: 1,
    Source: BaczekLogo,
    Title: "PRS-Bud Bączek Logo Design",
    Description:
      "Realizacja logo dla polskiej firmy budowlanej PRS-Bud Bączek.",
    Type: "video",
    Link: "",
  },
  {
    id: 2,
    Source: TulleGirl,
    Title: "Tulle Girl",
    Description: "Ilustracja.",
    Type: "image",
    Link: "",
  },
  {
    id: 3,
    Source: Jaskolka,
    Title: "Spring Mark",
    Description: "Symbol jaskółki jako Znak Wiosny.",
    Type: "image",
    Link: "",
  },
  {
    id: 4,
    Source: Answear,
    Title: "Answear Graphic Design Masters",
    Description:
      "Seria grafik reklamowych produktów Answear stworzona w ramach Answear Graphic Design Masters.",
    Type: "video",
    Link: "",
  },
  {
    id: 5,
    Source: Logofolio,
    Title: "Logos & Marks 2021-2022",
    Description: "Kolekcja znaków stworzona w latach 2021-2022.",
    Type: "image",
    Link: "",
  },
  {
    id: 6,
    Source: KamsaDesign,
    Title: "Kamsa Design Logo Design",
    Description:
      "Realizacja logo dla marki Kamsa Design wyspecjalizowanej w tworzeniu wizualizacji wnętrz 3D.",
    Type: "video",
    Link: "",
  },
  {
    id: 7,
    Source: Freckles,
    Title: "Freckles",
    Description: "Ilustracja",
    Type: "image",
    Link: "",
  },
  {
    id: 8,
    Source: DoT36,
    Title: "36 Days of Type",
    Description:
      "Kolekcja znaków stworzona w ramach challenge’u 36 Days of Type 2021.",
    Type: "video",
    Link: "",
  },
  {
    id: 9,
    Source: Walentynki,
    Title: "Valentine’s Day Illustration",
    Description: "Miłość - Ilustracja walentynkowa.",
    Type: "image",
    Link: "",
  },
  {
    id: 10,
    Source: GreenLadyInRed,
    Title: "Green Lady in Red",
    Description: "Ilustracja.",
    Type: "image",
    Link: "",
  },
  {
    id: 11,
    Source: KooperatywaSwiatla,
    Title: "Kooperatywa Światła Visual Identification Concept Design",
    Description:
      "Koncept identyfikacji wizualnej dla organizacji non-profit Kooperatywa Światła.",
    Type: "video",
    Link: "",
  },
];

const PortfolioImage = () => {
  return (
    <>
      {portfolioLinks.map((el) =>
        el.Type === "image" ? (
          <Link
            to={`/portfolio/realizacja/${el.id}`}
            key={el.id}
            className="portfolio-image "
          >
            <img src={el.Source} alt="" />
            <div className="portfolio-image__text">
              <h4 className="title">{el.Title}</h4>
              <p className="description">{el.Description}</p>
            </div>
          </Link>
        ) : (
          <Link
            to={`/portfolio/realizacja/${el.id}`}
            key={el.id}
            className="portfolio-image"
          >
            <video loop autoPlay muted>
              <source src={el.Source} />
            </video>
            <div className="portfolio-image__text">
              <h4 className="title">{el.Title}</h4>
              <p className="description">{el.Description}</p>
            </div>
          </Link>
        )
      )}
    </>
  );
};

export default PortfolioImage;
