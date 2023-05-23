import React from "react";
import "./Product.scss";
import Card from "../../../components/Card/Card";
import Caption from "../../../components/Caption/Caption";

const Product = () => {
  return (
    <div className="product">
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Product;
