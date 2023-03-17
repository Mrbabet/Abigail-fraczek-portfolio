import "./infoStyles.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import InfoSubNav from "../../components/InfoSubNav/InfoSubNav";
import Contact from "../../components/InfoComponents/Contact";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import Informator from "../../components/InfoComponents/Informator";
import Offer from "../../components/InfoComponents/Offer";
import Glossary from "../../components/InfoComponents/Glossary";

const Info = () => {
  return (
    <div className="infopage">
      <Navbar />
      <main>
        <InfoSubNav />
        <Contact />
        <Offer />
        <Informator />
        <Glossary />
        <ScrollTopBtn />
      </main>
      <Footer />
    </div>
  );
};

export default Info;
