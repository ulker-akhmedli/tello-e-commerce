import React from "react";
import "./Product.scss";
import Card from "../../../components/Card/Card";
import Caption from "../../../components/Caption/Caption";

const Product = () => {
  return (
    <div className="product">
      <Caption title={"Ən çox satılan məhsullar"} />
      <div className="cards">
        <div className="best">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Caption title={"Yeni gələn məhsullar"} />
        <div className="best">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Product;
