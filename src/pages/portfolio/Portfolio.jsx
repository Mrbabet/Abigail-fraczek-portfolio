import "./portfolioStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import React, { lazy, Suspense } from "react";
const PortfolioImage = lazy(() =>
  import("../../components/PortfolioImage/PortfolioImage")
);
import Loading from "../../components/Loading/Loading";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <>
      <motion.div
        className="portfoliopage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <main>
          <div className="portfolio-grid">
            <Suspense>
              <PortfolioImage />
            </Suspense>
            <ScrollTopBtn />
          </div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Portfolio;
