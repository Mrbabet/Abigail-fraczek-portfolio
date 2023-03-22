import "./realizacjaStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Image1 from "../../assets/images/1. Bączek_Website/1.webp";
import Video1 from "../../assets/images/1. Bączek_Website/2.mp4";
import Image2 from "../../assets/images/1. Bączek_Website/3.webp";
import Video2 from "../../assets/images/1. Bączek_Website/4.mp4";
import Image3 from "../../assets/images/1. Bączek_Website/5.webp";
import Video3 from "../../assets/images/1. Bączek_Website/6.mp4";
import Image4 from "../../assets/images/1. Bączek_Website/7.webp";
import Video4 from "../../assets/images/1. Bączek_Website/8.mp4";
import Image5 from "../../assets/images/1. Bączek_Website/9.webp";
import Video5 from "../../assets/images/1. Bączek_Website/10.mp4";
import Image6 from "../../assets/images/1. Bączek_Website/11.webp";
import Video6 from "../../assets/images/1. Bączek_Website/12.mp4";
const Realizacja = () => {
  return (
    <div className="realizacjapage">
      <Navbar />
      <main>
        <div className="mobile-realizacja-component">
          <div className="mobile-realizacja-component__title">
            Construction Company Web Concept Design 2023
          </div>
          <div className="mobile-realizacja-component__description">
            Koncept interfejsu strony internetowej polskiej firmy budowlanej
            PRS-Bud Bączek. Projekt wykorzystuje realizację Logo oraz Księgę
            Identyfikacji Wizualnej marki. Drobne elementy stylistycznie
            nawiązują do budowy znaku, a kolorystykę oparto o Visual Key.
            Koncept powstał w ramach kursu Digital Designer.
          </div>
        </div>
        <div className="realizacjaImage-component">
          <img src={Image1} alt="" />
          <video loop autoPlay muted>
            <source src={Video1} />
          </video>
          <img src={Image2} alt="" />
          <video loop autoPlay muted>
            <source src={Video2} />
          </video>
          <img src={Image3} alt="" />
          <video loop autoPlay muted>
            <source src={Video3} />
          </video>
          <img src={Image4} alt="" />
          <video loop autoPlay muted>
            <source src={Video4} />
          </video>
          <img src={Image5} alt="" />

          <video loop autoPlay muted>
            <source src={Video5} />
          </video>
          <img src={Image6} alt="" />
          <video loop autoPlay muted>
            <source src={Video6} />
          </video>
        </div>
        <div className="realizacja-carousel-component"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Realizacja;
