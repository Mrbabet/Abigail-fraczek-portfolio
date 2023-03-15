import "./homeStyles.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioBtn from "../../components/PortfolioBtn/PortfolioBtn";
import Showreal from "../../components/Showreal/Showreal";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Showreal />
      <PortfolioBtn />
      <Footer />
    </div>
  );
};

export default Home;
