import "./homeStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";

import Showreal from "../../components/Showreal/Showreal";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <Carousel />
      <Showreal />
      <Footer />
    </motion.div>
  );
};

export default Home;
