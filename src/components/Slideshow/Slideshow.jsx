import React, { useState, useEffect } from "react";

const Slideshow = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, data]);

  return (
    <div className="carousel">
      {data.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          {item.Type === "image" ? (
            <img src={item.Source} />
          ) : (
            <video loop autoPlay muted>
              <source src={item.Source} />
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
