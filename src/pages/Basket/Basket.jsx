import React from "react";
import "./Basket.scss";
import Amount from "./Amount/Amount";
import Main from "./Main/Main";

const Basket = () => {
  return (
    <div className="basket">
      <h4>Səbət (0 məhsul)</h4>
      {/* <EmptyBasket/> */}
      <div className="main-content">
        <div className="main-container">
          <Main />
          <Main />
          <Main />
        </div>
        <Amount />
      </div>
    </div>
  );
};

export default Basket;
