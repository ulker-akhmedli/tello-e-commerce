import React, { useEffect } from "react";
import "./ProductDetail.scss";
import { getProductById } from "../../store/actions/product";
import Navigation from "../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import SliderSelect from "../../pages/ProductDetail/Sliders/Slider";
import Specifications from "./Specifications/Specifications";
import Main from "./Main/Main";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";

const ProductDetail = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();

  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    getProductById(setLoading, setProduct, id);
  }, [id]);

  if (loading && !product) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      <Navigation
        name={product?.data?.name}
        id={product?.data?.id}
        product={product}
      />
      <div className="details container ">
        <SliderSelect images={product?.data?.assets} />
        <Main
          name={product?.data?.name}
          price={product?.data?.price.raw}
          id={product?.data?.id}
          variant_groups={product?.data?.variant_groups}
        />
      </div>
      <Specifications />
    </div>
  );
};

export default ProductDetail;
