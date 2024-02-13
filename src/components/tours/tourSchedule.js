import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import "./tourSchedule.css";
import ShowTour from "./showTour";
import { useState } from "react";
const TourSchedule = () => {
  
  const Info1 = [
    {
      text: "تمامي تور ها",
      to: "/",
    },
    {
      text: "تور هاي گردشگري",
      to: "/",
    },
    {
      text: "تور هاي داخلي",
      to: "/",
    },
    {
      text: "تور هاي خارجي",
      to: "/",
    },
    {
      text: "تور یک روزه",
      to: "/",
    },
    {
      text: "تور طبیعت گردی",
      to: "/",
    },
    {
      text: "تور های كوه نوردي",
      to: "/",
    },
  ];
  const Info2 = [
    {
      text: "تور تاریخی فرهنگی",
      to: "/",
    },
    {
      text: "تور زیارتی",
      to: "/",
    },
    {
      text: "تور کمپینگ",
      to: "/",
    },
    {
      text: "تور آموزشی",
      to: "/",
    },
    {
      text: "تور نوروز",
      to: "/",
    },
    {
      text: "تور کوير گردي",
      to: "/",
    },
    {
      text: "تور های تخفیفی",
      to: "/",
    },
  ];

  return (
    <div className=" tour-schedule ">
      <div className="container">
        <p className="guide-choose-tour animate__animated wow animate__fadeInUp">
          با انتخاب هر یک از گزینه های زیر میتوانید موارد موجود را مشاهده و در
          صورت تمایل رزرو نماييد.لطفا هنگام اقدام به رزرو به موارد زير توجه
          نماييد.با تشكر.
        </p>
        <div className="animate__animated wow animate__fadeInUp">
          <p>
            <i className="fa fa-check"></i>
            لطفا بعد از انتخاب تور مورد نظر،مشخصات خود را به صورت کامل وارد
            نمایید.
          </p>
          <p>
            <i className="fa fa-check"></i>
            تمامی افرادی که میخواهند در تور شرکت نمایند اید به صورت جدا گانه
            اطلاعات خود را وارد نمایند.
          </p>
          <p>
            <i className="fa fa-check"></i>
            تزريق حداقل سه دوز واكسن در تمامي تور ها الزامي است.لطفا در طول سفر
            كارت واكسن خود را همراه داشته باشيد.
          </p>
          <p>
            <i className="fa fa-check"></i>
            همراه داشتن كارت شناسايي براي تمامي همسفران الزمي است.
          </p>
          <p>
            <i className="fa fa-smile"></i>
            به اميد سفري پر از خاطره
            <i className="fa fa-smile"></i>
          </p>
        </div>
      </div>

      <div className="table-content">
        <table className="table table-striped-columns text-center">
          <tbody>
            <tr>
              {Info1.map((item, index) => (
                <td key={index}>
                  <Link to={item.to}>{item.text}</Link>
                </td>
              ))}
            </tr>
            <tr>
              {Info2.map((item, index) => (
                <td key={index}>
                  <Link to={item.to}>{item.text}</Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="info-tour-box mb-5">
        <div className="info-tour">
          <div className="showTours">
            <div className="select">
              <p className="showP">نمايش تور ها</p>
              <p className="selectP">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm"
                >
                  <option defaultValue>مرتب سازي بر اساس</option>
                  <option value="newest">جديد ترين</option>
                  <option value="most-cheap">ارزان ترين</option>
                  <option value="most-expensive">ارزان ترين</option>
                  <option value="most-view">پربازديد ترين</option>
                </select>
              </p>
            </div>
            <div className="show-tour-info mt-3">
              <div className="list-group">
                <ShowTour to="/tour" name="name" price="1,600,000 T" company="company name" extra="extra ex" dayAgo="10 days ago" dayAgoClass={true}/>
                <ShowTour to="/tour" name="name" price="1,600,000 T" company="company name" extra="extra ex" dayAgo="10 days ago" dayAgoClass={true}/>
                <ShowTour to="/tour" name="name" price="1,600,000 T" company="company name" extra="extra ex" dayAgo="10 days ago" dayAgoClass={true}/>
              </div>
            </div>

            <div className="done-btn-box mt-3">
              <Button
                to="/tour"
                btnsize="btn-20"
                btnstyle="btn-blue"
                btnheight="btn-h40"
              >
                تور های بیشتر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSchedule;
