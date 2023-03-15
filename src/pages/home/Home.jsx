import "./homeStyles.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioBtn from "../../components/PortfolioBtn/PortfolioBtn";
import Showreal from "../../components/Showreal/Showreal";

const Home = () => {
  return (
    <>
      <Navbar />
      <Showreal />
      <PortfolioBtn />
      <Footer />
    </>
  );
};

export default Home;
