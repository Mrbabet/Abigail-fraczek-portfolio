import "./realizacjaStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../components/ImageCarousel/Slideshow";
import MRD from "../../components/MobileRealizacjaDescription/MRD";
import RealizacjaImage from "../../components/RealizacjaImage/RealizacjaImage";

const Realizacja = () => {
  return (
    <div className="realizacjapage">
      <Navbar />
      <main className="realizacja-main">
        <MRD />
        <RealizacjaImage />
        <Slideshow />
      </main>
      <Footer />
    </div>
  );
};

export default Realizacja;
