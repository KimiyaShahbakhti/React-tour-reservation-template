import React from "react";
import "./cards.css";
import Carditem from "./carditem";
import Bigcarditem from "./bigcarditem";

const Cards = () => {
  const src1 = require("../../assets/img/T10iran.jpg");
  const src2 = require("../../assets/img/T20iran.jpg");
  const src3 = require("../../assets/img/T21iran.webp");
  const src4 = require("../../assets/img/T12iran.jpg");
  const src5 = require("../../assets/img/T18iran.jpg");

  return (
    <React.Fragment>
      <div className="cards-main container">
        <h1 className="animate__animated wow animate__fadeInUp">پر بازدید ها</h1>
        <div className="row mt-2 g-4">
        <Bigcarditem animate="animate__animated wow animate__fadeInRight" src={src1} title="Chitgar Lake" label="تفریحی" text="Tehran - iran"  />
        <Bigcarditem animate="animate__animated wow animate__fadeInLeft" src={src2} title="Shah Abbasi Mosque" label="تفریخی" text="Isfahan - iran"  />
        </div>
        <div className="row itemcard-res mt-2 g-4">
          <Carditem animate="animate__animated wow animate__fadeInUp" place="right" to="/" src={src4} title="Isfahan" label="تفریحی" text="Naqshe Jahan" />
          <Carditem animate="animate__animated wow animate__fadeInUp" place="left" to="/" src={src5} title="Isfahan" label="زیارتی" text="Sheikh Lotfollah Mosque" />
          <Carditem animate="animate__animated wow animate__fadeInUp" place="right" to="/" src={src3} title="Kish" label="تفریحی" text="Pesian Gulf Sea" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
