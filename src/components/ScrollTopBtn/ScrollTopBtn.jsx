import { useEffect, useState } from "react";
import { TfiArrowUp } from "react-icons/tfi";

const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const isBottom = scrollTop + clientHeight === scrollHeight;
      setIsVisible(isBottom);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleClick}
      style={{
        display: isVisible ? "flex" : "none",
        backgroundColor: "transparent",
        border: "1px solid black",
        outline: 0,
        position: "fixed",
        bottom: "50px",
        right: "50%",
        height: "42px",
        width: "42px",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <TfiArrowUp />
    </button>
  );
};

export default ScrollTopBtn;
