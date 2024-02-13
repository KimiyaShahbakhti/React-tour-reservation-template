import React from "react";
import "./cards.css";
import Button from "../button/button";
import { useState } from "react";
const Carditem = (props) => {
  const { place, src, title, text, label,animate } = props;
  if (place === "right") {
    return (
      <div className="card carditem mb-3">
        <div className={`row g-0 ${animate}`}>
          <div className="col-md-5">
            <img src={src} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="border-right-inbody">
                <h5 className="text-center card-title">{title}</h5>
                <p className="text-center card-text">{text}</p>
                <p className="text-center card-text">
                  <small className="text-muted">{label}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card carditem mb-3">
        <div className={`row g-0 ${animate}`}>
          <div className="col-md-7">
            <div className="card-body">
              <div className="border-left-inbody">
                <h5 className="text-center card-title">{title}</h5>
                <p className="text-center card-text">{text}</p>
                <p className="text-center card-text">
                  <small className="text-muted">{label}</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src={src} className="img-fluid rounded-start" />
          </div>
        </div>
      </div>
    );
  }
};

export default Carditem;
