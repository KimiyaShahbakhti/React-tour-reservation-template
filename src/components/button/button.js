import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";
const Styles=['btn-trs','btn-blue'];
const Size=['btn-70' ,'btn-100','btn-20', 'btn-90','btn-50']
const Height=['btn-h60','btn-h40']
const Button = (props) => {
    const{clicked,to,children,btnstyle,btnsize,btnheight,dis}=props
    const Buttonstyle=Styles.includes(btnstyle)?btnstyle:Styles[0];
    const Buttonstize=Size.includes(btnsize)?btnsize:Size[0];    
    const Buttonheight=Height.includes(btnheight)?btnheight:Height[0];    
    return (
      <Link to={to}>
          <button onClick={clicked} className={`btn ${dis} ${Buttonstyle} ${Buttonheight} ${Buttonstize}`}>
              {children}
          </button>
      </Link>
  );
};
export default Button;
