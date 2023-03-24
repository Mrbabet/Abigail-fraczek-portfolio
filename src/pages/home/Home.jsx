import "./homeStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";

import Showreal from "../../components/Showreal/Showreal";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Carousel />
      <Showreal />

      <Footer />
    </div>
  );
};

export default Home;
