import "./realizacjaStyles.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import MRD from "../../components/MobileRealizacjaDescription/MRD";
import RealizacjaImage from "../../components/RealizacjaImage/RealizacjaImage";
// import Slideshow from "../../components/Slideshow/Slideshow";
import data from "../../components/Slideshow/data";
import { motion } from "framer-motion";
const Realizacja = () => {
  return (
    <motion.div
      className="realizacjapage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <main className="realizacja-main">
        <MRD />
        <RealizacjaImage />
        {/* <Slideshow data={data} /> */}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Realizacja;
