import React from "react";
import { Link } from "react-router-dom";
const ShowTour = (props) => {
    const {to,name,price,company,extra,dayAgo,dayAgoClass} = props
    return (
    <div>
      <Link to={to} className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">{name}</h6>
          <h6 className="mb-1">{price}</h6>
          <h6 className="mb-1">{company}</h6>
          <small className="text-muted">
            <i className={dayAgoClass ? ``: `fa fa-exclamation-triangle`} aria-hidden="true"></i>
            {dayAgo}
          </small>
        </div>
        <p className="mb-1 extra-info-tour">{extra}</p>
      </Link>
    </div>
  );
};

export default ShowTour;
