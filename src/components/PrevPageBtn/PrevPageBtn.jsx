import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import prevPageBtnArrow from "../../assets/images/prevpagebtnarrow.svg";

const PrevPageBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  return (
    <>
      {location.pathname === "/info" && "/portfolio/realizacja" && (
        <button className="prev-page-btn" onClick={() => navigate(-1)}>
          <img src={prevPageBtnArrow} alt="" />
        </button>
      )}
    </>
  );
};

export default PrevPageBtn;
