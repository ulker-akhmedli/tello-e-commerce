import React from "react";
import "./Card.scss";
import IphonePhoto from "../../assets/iphone12.png";
import azn from "../../assets/azn-symbol.svg";

const Card = ({ id, name, image, price }) => {
  return (
    <div className="card">
      <div className="productImg">
        <img src={image} alt="product" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className="price">
          <span>{price} </span>
          <img src={azn} alt="manat" />
        </div>
      </div>
    </div>
  );
};

export default Card;
