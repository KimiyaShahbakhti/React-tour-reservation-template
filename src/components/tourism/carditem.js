import React from "react";
import "./cardGuid.css";
const CarditemTourism = (props) => {
  const { title, text } = props;
  return (
    <React.Fragment>
      <div className="col">
        <span>
          <i className="fa fa-bus" aria-hidden="true"></i>
          <i className="fa fa-plane" aria-hidden="true"></i>
          <i className="fa fa-train" aria-hidden="true"></i>
        </span>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-center">{text}</p>
            {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarditemTourism;
