import React, { useEffect, useState } from "react";
import "./Main.scss";
import Iphone from "../../../assets/iphone11.jpg";
import AZN from "../../../assets/azn.svg";
import Delete from "../../../assets/delete.svg";

import { useParams } from "react-router-dom";

const Main = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="mainCart">
      <div className="cart-photo">
        <img src={Iphone} alt="phone" />
      </div>
      <div className="content">
        <span className="name">iPhone 12, 64 GB, Bənövşəyi</span>
        <div className="cart-detail">
          <div className="card-color">
            <span className="color">Rəng:</span>
            <span>Bənövşəyi</span>
          </div>
          <span className="price">
            240 <img src={AZN} alt="AZN" />
          </span>
        </div>
      </div>
      <div className="numberCarts">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <img className="deleteIcon" src={Delete} alt="delete" />
    </div>
  );
};

export default Main;
