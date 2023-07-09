import React from "react";
import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import NewProducts from "./Product/NewProducts";
import BestSellers from "./Product/BestSellers";
import Brand from "./Carousel/Brand/Brand";
import About from "./About/About";
import Advert from "../../components/Advert/Advert";
import Caption from "../../components/Caption/Caption";
import Banner from "../../components/Advert/Banner/Banner";
import Box from "../../assets/box.png";
import Cardpos from "../../assets/card-pos.png";
import Guarantee from "../../assets/guarantee.png";
import Accessories from "./Product/Accessories";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <div className="homePage container">
        <Caption title={"Ən çox satılan məhsullar"} />
        <BestSellers />
        <Caption title={"Yeni gələn məhsullar"} />
        <NewProducts />
        <Advert />
        <Caption title={"Yeni gələn aksessuarlar"} />
        <Accessories />
        <Banner />
        <div className="about-cont">
          <About image={Box} title={"Çatdırılma"} />
          <About image={Cardpos} title={"Kredit"} />
          <About image={Guarantee} title={"Zəmanət"} />
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default Home;
