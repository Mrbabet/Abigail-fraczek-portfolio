import { useEffect, useState } from "react";

const ScrollTopBtn = () => {
  const [scrollTopBtn, setScrollTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1500) {
        setScrollTopBtn(true);
      } else {
        setScrollTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-top-btn">
      {scrollTopBtn && (
        <button
          onClick={scrollUp}
          style={{
            backgroundColor: "transparent",
            border: "1px solid black",
            outline: 0,
            position: "fixed",
            bottom: "50px",
            right: "50%",
            height: "42px",
            width: "42px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={""} alt="" />
        </button>
      )}
      ;
    </div>
  );
};

export default ScrollTopBtn;
