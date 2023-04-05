import "./homeStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";

import Showreal from "../../components/Showreal/Showreal";

import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import Preloader from "../../components/Preloader/Preloader";
const Home = () => {
  return (
    <AnimatedPage>
      <Preloader minimumTime={10000} />
      <div className="homepage">
        <Navbar />
        <Carousel />
        <Showreal />
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Home;
