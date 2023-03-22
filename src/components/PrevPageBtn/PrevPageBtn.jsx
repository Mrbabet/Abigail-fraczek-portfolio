import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TfiArrowLeft } from "react-icons/tfi";

const PrevPageBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname === "/info" && (
        <button className="prev-page-btn" onClick={() => navigate(-1)}>
          <TfiArrowLeft />
        </button>
      )}
      {location.pathname.includes("realizacja") && (
        <button className="prev-page-btn" onClick={() => navigate(-1)}>
          <TfiArrowLeft height={18} width="18" />
        </button>
      )}
    </>
  );
};

export default PrevPageBtn;
