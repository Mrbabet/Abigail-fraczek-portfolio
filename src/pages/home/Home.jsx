import "./homeStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioBtn from "../../components/PortfolioBtn/PortfolioBtn";
import Showreal from "../../components/Showreal/Showreal";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="showreal">
        <Showreal />
        <PortfolioBtn />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
