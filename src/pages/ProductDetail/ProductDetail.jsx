import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import { getProductById } from "../../store/actions/product";
import Navigation from "../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import SliderSelect from "../../pages/ProductDetail/Sliders/Slider";
import Main from "./Main/Main";
import Specifications from "./Specifications/Specifications";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";

const ProductDetail = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  window.scrollTo(0, 0);
  useEffect(() => {
    getProductById(setLoading, setProduct, id);
  }, [id]);

  if (loading && !product) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      <Navigation />
      <div className="details container ">
        <SliderSelect images={product?.assets} />
        <Main />
      </div>
      <Specifications />
    </div>
  );
};

export default ProductDetail;
