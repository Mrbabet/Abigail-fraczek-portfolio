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
      <main>
        <Showreal />
        <PortfolioBtn />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
