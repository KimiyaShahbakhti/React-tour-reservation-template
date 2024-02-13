import React from "react";
import "./cardGuid.css";
import CarditemTourism from "./carditem";
const CardGuid = () => {
  return (
    <div className="cardGuid mb-5">
      <hr />
      <div className="container">
          <h2 className="introh2 animate__animated wow animate__fadeInUp">
          راهنمای ایرانگردی،جهانگردی و تور های تفریحی با بهترین امکانات
          </h2>
        <div className="mt-5 row animate__animated wow animate__fadeInUp">
            <p>پرتال جامع گردشگری</p>
          <div className="cols-md-4">
              <CarditemTourism title={"جستجوی پیشرفته"} text={"جستجو تمامی مقاصد سفر های شما"}/>
              <CarditemTourism title={"گردش و تفریح"} text={"راهنمای سفر به شهر های ایران و جهان"}/>
              <CarditemTourism title={"معرفی"} text={"معرفی مکان های دیدنی"}/>
          </div>
        </div>   
      </div>
    </div>
  );
};

export default CardGuid;
