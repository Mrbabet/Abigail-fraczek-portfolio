import "./realizacjaStyles.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import MRD from "../../components/MobileRealizacjaDescription/MRD";
import RealizacjaImage from "../../components/RealizacjaImage/RealizacjaImage";
import Slideshow from "../../components/Slideshow/Slideshow";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

const Realizacja = () => {
  return (
    <AnimatedPage>
      <div className="realizacjapage">
        <Navbar />
        <main className="realizacja-main">
          <MRD />
          <RealizacjaImage />
          <Slideshow />
        </main>

        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Realizacja;
