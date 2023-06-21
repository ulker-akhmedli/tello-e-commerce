import React, { useEffect } from "react";
import "./ProductDetail.scss";
import { getProductById, getVariant } from "../../store/actions/product";
import Navigation from "../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import SliderSelect from "../../pages/ProductDetail/Sliders/Slider";
import Specifications from "./Specifications/Specifications";
import Main from "./Main/Main";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";

const ProductDetail = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [variants, setVariants] = React.useState();

  const { id } = useParams();
  window.scrollTo(0, 0);
  useEffect(() => {
    getProductById(setLoading, setProduct, id);
    getVariant(id, setVariants);
  }, [id]);
  console.log(product);

  console.log(variants);

  if (loading && !product) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      <Navigation />
      <div className="details container ">
        <SliderSelect images={product?.assets} />
        <Main
          name={product?.name}
          price={product?.price.raw}
          id={product?.id}
        />
      </div>
      <Specifications />
    </div>
  );
};

export default ProductDetail;
