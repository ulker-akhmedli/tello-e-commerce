import React from "react";
import "./Basket.scss"
import EmptyBasket from "./EmptyBasket/EmptyBasket";

const Basket = () => {
  return <div className="basket">
    <h4>Səbət (0 məhsul)</h4>
    <EmptyBasket/>
  </div>;
};

export default Basket;
