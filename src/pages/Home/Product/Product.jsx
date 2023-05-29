import React, { useEffect } from "react";
import "./Product.scss";
import Card from "../../../components/Card/Card";
import Skeleton from "../../../components/Skeleton/Card";
import { commerce } from "../../../commerce";
const Product = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    commerce.products.list().then((product) => {
      setProducts(product);
      setLoading(false);
    });
  }, []);

  return (
    <div className="product">
      <div className="cards">
        {loading &&
          new Array(4).fill(0).map((el) => {
            return <Skeleton />;
          })}
        {!loading &&
          products?.data?.length > 0 &&
          products.data.slice(0, 6).map((el) => {
            return (
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image.url}
                price={el.price.raw}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Product;
