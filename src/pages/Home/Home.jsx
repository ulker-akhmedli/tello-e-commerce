import React from "react";
import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import Product from "./Product/Product";
import Brand from "./Carousel/Brand/Brand";
import About from "./About/About";
import Advert from "../../components/Advert/Advert";
import Caption from "../../components/Caption/Caption";
import Banner from "../../components/Advert/Banner/Banner";
import Box from "../../assets/box.png";
import Cardpos from "../../assets/card-pos.png";
import Guarantee from "../../assets/guarantee.png";
// import { commerce } from "../../commerce";

const Home = () => {
  // async function fetchProduct() {
  //   commerce.products.list().then((product) => console.log(product));
  // }
  return (
    <div className="home">
      <Carousel />
      <div className="homePage container">
        <Caption title={"Ən çox satılan məhsullar"} />
        <Product />
        <Caption title={"Yeni gələn məhsullar"} />
        <Product />
        <Advert />
        <Caption title={"Yeni gələn aksessuarlar"} />
        <Product />
        <Banner />
        <div className="about-cont">
          <About image={Box} title={"Çatdırılma"} />
          <About image={Cardpos} title={"Kredit"} />
          <About image={Guarantee} title={"Zəmanət"} />
        </div>
      </div>
      <Brand />
      {/* <button onClick={fetchProduct}>get product </button> */}
    </div>
  );
};

export default Home;


