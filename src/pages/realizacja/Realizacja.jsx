import "./realizacjaStyles.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import MRD from "../../components/MobileRealizacjaDescription/MRD";
import RealizacjaImage from "../../components/RealizacjaImage/RealizacjaImage";
// import Slideshow from "../../components/Slideshow/Slideshow";
import data from "../../components/Slideshow/data";

const Realizacja = () => {
  return (
    <div className="realizacjapage">
      <Navbar />
      <main className="realizacja-main">
        <MRD />
        <RealizacjaImage />
        {/* <Slideshow data={data} /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Realizacja;
