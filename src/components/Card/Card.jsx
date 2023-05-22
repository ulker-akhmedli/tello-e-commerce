import React from "react";
import "./Card.scss";
import IphonePhoto from "../../assets/iphone12.png";
import azn from "../../assets/azn-symbol.svg";

const Card = () => {
  return (
    <div className="card">
      <img className="productImg" src={IphonePhoto} alt="iphone" />
      <div className="product-info">
        <h3>Apple iPhone 12, 64 GB, Purple</h3>
        <div className="price">
          <span>2089 </span>
          <img src={azn} alt="manat" />
        </div>
      </div>
    </div>
  );
};

export default Card;
