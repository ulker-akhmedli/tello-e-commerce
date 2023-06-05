import React, { useState } from "react";
import "./Main.scss";
import AZN from "../../../assets/azn.svg";
import Cart from "../../../assets/cart.svg";
import Button from "../../../components/Button/Button";

const Main = ({ name, price }) => {
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
    <div className="main-info">
      <div className="title">
        <h1>{name}</h1>
        <div className="price">
          <span>{price}</span>
          <img src={AZN} alt="azn" />
        </div>
      </div>
      <div className="main-details">
        <div className="main-color">
          <span>Rəng:</span>
          <div className="colors">
            <div className="color"></div>
            <div className="color"></div>
          </div>
        </div>
        <div className="memory">
          <span>Yaddaş:</span>
          <div className="memorys">
            <div>256GB</div>
            <div>128GB</div>
            <div>64GB</div>
          </div>
        </div>
      </div>
      <div className="numberCarts">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <Button img={Cart} btn={"Səbətə at"} />
    </div>
  );
};

export default Main;
