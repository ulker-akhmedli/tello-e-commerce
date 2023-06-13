import React from "react";
import "./Products.scss";
import Filter from "./Filter/Filter";
import Navigation from "../../components/Navigation/Navigation";
import Info from "./Info/Info";
import Card from "../../components/Card/Card";
import Pagination from "./Pagination/Pagination";
import MobileOption from "./MobileOption/MobileOption";
import { commerce } from "../../commerce";
// import { useParams } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Card";


const Products = () => {
  window.scrollTo(0, 0);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(null);
  // const { slug } = useParams();
  React.useEffect(() => {
    setLoading(true);
    commerce.products.list().then((product) => {
      setProducts(product);
      setLoading(false);
    });
  }, []);
  return (
    <div className="products container ">
      <div className="left">
        <Navigation  />
        <Filter />
      </div>
      <div className="mobile">
        <MobileOption />
      </div>
      <div className="product-list">
        <Info />
        <div className="card-list">
          {loading &&
            new Array(9).fill(0).map((el, i) => {
              return <Skeleton key={i} />;
            })}
          {!loading &&
            products?.data?.length > 0 &&
            products.data.slice(0, 9).map((el) => {
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
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
