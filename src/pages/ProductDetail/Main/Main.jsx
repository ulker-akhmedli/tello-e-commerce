import React from "react";
import "./Main.scss";
import AZN from "../../../assets/azn.svg";
import Cart from "../../../assets/cart.svg";
import Button from "../../../components/Button/Button";

const Main = () => {
  return (
    <div className="main-info">
      <div className="title">
        <h1>iPhone 12, 64 GB, Bənövşəyi</h1>
        <div className="price">
          <span>2089</span>
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
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <Button img={Cart} btn={"Səbətə at"} />
    </div>
  );
};

export default Main;
