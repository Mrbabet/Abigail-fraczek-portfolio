import "./portfolioStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioImage from "../../components/PortfolioImage/PortfolioImage";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";

const Portfolio = () => {
  return (
    <>
      <div className="portfoliopage">
        <Navbar />
        <main>
          <div className="portfolio-grid">
            <PortfolioImage />
            <ScrollTopBtn />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
