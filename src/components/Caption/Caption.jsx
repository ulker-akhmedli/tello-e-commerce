import React from "react";
import More from "../../assets/more.svg";
import "./Caption.scss"
const Caption = ({title}) => {
  return (
    <div className="caption">
      <div className="best-seller">
        <h3>{title}</h3>
      </div>
      <div className="more">
        <h4>Hamısına bax</h4>
        <img src={More} alt="more" />
      </div>
    </div>
  );
};

export default Caption;
