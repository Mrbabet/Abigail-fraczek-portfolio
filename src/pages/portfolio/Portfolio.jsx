import "./portfolioStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioImage from "../../components/PortfolioImage/PortfolioImage";

const Portfolio = () => {
  return (
    <>
      <div className="portfoliopage">
        <Navbar />
        <main>
          <PortfolioImage />
          <PortfolioImage />
          <PortfolioImage />
          <PortfolioImage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
