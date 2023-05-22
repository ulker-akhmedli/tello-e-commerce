import React from "react";
import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import Product from "./Product/Product";
import Brand from "./Carousel/Brand/Brand";
import About from "./About/About";
import Advert from "../../components/Advert/Advert";
import Caption from "../../components/Caption/Caption";
import Card from "../../components/Card/Card";
import Banner from "../../components/Advert/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Product />
      <Advert />
      <Caption title={"Yeni gələn aksessuarlar"} />
      <Banner/>
      <About />
      <Brand />
    </div>
  );
};

export default Home;

// name={"Iphone 11"} about={"Rəngli.Güclü"} forUs={"Əsl sizə lazım olan"} price={"1 519 AZN"} fromPrice={"Faizsiz Taksitlə 127 AZN-dən"}
// {name,about,forUs,price,fromPrice}
