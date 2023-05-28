import React from "react";
import "./EmptyBasket.scss";
import ShoppingCart from "../../../assets/shopping-cart.svg";
import Button from "../../Login/Form/Button/Button";

const EmptyBasket = () => {
  return (
    <div className="empty container">
      <div className="empty-content">
        <img src={ShoppingCart} alt="cart" />
        <h3>Səbətiniz halhazırda boşdur</h3>
        <Button btn={"Alış-verişə davam et"} />
      </div>
    </div>
  );
};

export default EmptyBasket;
