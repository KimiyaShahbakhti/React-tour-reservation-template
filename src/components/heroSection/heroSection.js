import React, { useEffect, useState } from "react";
import "./heroSection.css";
import Button from "../button/button";

const HeroSection = () => {
  const [buttonRes, setbuttonRes] = useState(true);
  useEffect(() => {
    buttonInRes();
  }, []);

  const buttonInRes = () => {
    if (window.innerWidth <= 700) {
      setbuttonRes(false);
    } else {
      setbuttonRes(true);
    }
  };
  window.addEventListener("resize", buttonInRes);

  return (
    <div className="hero-container">
      <div className="hero-search">
        <input
          type="text"
          autoComplete={false}
          className="search-input mb-3"
          placeholder="جستجو کنید..."
        />
        <div className="search-btn-box">
          <Button
            to="/"
            btnstyle="btn-blue"
            btnsize={buttonRes ? "btn-20" : "btn-100"}
            btnheight="btn-h40"
          >
            جستجو <i className="fa fa-search"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
