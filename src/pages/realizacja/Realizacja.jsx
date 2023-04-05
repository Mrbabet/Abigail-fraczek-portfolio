import "./realizacjaStyles.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import RealizacjaImage from "../../components/RealizacjaImage/RealizacjaImage";
import Slideshow from "../../components/Slideshow/Slideshow";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import RealizacjaDescription from "../../components/RealizacjaDescription/RealizacjaDescription";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";

const Realizacja = () => {
  return (
    <AnimatedPage>
      <div className="realizacjapage">
        <Navbar />
        <main className="realizacja-main">
          <RealizacjaDescription />
          <RealizacjaImage />
          <ScrollTopBtn />
          <Slideshow />
        </main>

        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Realizacja;
