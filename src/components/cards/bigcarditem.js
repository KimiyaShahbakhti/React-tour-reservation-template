import React from "react";

const Bigcarditem = (props) => {
  const { src, title, text, label,animate } = props;
  return (
    //<div className="row bigcard-res">
    <div className={`card bigcarditem ${animate}`}>
        <img src={src} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="text-center card-title">{title}</h5>
          <p className="text-center card-text">
            {text}
          </p>
          <p className="text-center card-text">{label}</p>
        </div>
      </div>
    //</div>
  );
};

export default Bigcarditem;
