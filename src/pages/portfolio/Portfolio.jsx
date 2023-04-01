import "./portfolioStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import React, { lazy, Suspense } from "react";
const PortfolioImage = lazy(() =>
  import("../../components/PortfolioImage/PortfolioImage")
);
import Loading from "../../components/Loading/Loading";

import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
const Portfolio = () => {
  return (
    <AnimatedPage>
      <div className="portfoliopage">
        <Navbar />
        <main>
          <div className="portfolio-grid">
            <Suspense>
              <PortfolioImage />
            </Suspense>
            {/* <ScrollTopBtn /> */}
          </div>
        </main>
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
