import "./portfolioStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import React, { lazy, Suspense } from "react";
const PortfolioImage = lazy(() =>
  import("../../components/PortfolioImage/PortfolioImage")
);

import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import InformatorCard from "../../components/InformatorCard/InformatorCard";
const Portfolio = () => {
  return (
    <AnimatedPage>
      <div className="portfoliopage">
        <Navbar />
        <main>
          <div className="portfolio-grid">
            <Suspense>
              <PortfolioImage />
              <InformatorCard />
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
