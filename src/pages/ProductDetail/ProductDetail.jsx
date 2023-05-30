import React from "react";
import "./ProductDetail.scss";
import Navigation from "../../components/Navigation/Navigation";
import Sliders from "./Sliders/Sliders";
import Main from "./Main/Main";
import Specifications from "./Specifications/Specifications";

const ProductDetail = () => {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <Navigation />
      <div className="details container ">
        <Sliders />
        <Main />
      </div>
      <Specifications />
    </div>
  );
};

export default ProductDetail;
