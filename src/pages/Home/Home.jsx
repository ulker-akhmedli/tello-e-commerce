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

const Home = () => {
  return (
    <div className="homePage">
      <Carousel />
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
      <Brand />
    </div>
  );
};

export default Home;

// name={"Iphone 11"} about={"Rəngli.Güclü"} forUs={"Əsl sizə lazım olan"} price={"1 519 AZN"} fromPrice={"Faizsiz Taksitlə 127 AZN-dən"}
// {name,about,forUs,price,fromPrice}

//banner title={"Telefon"} width={50} nameProducts={Xiaomi}
{
  /* <div className="banners">
<Banner title={"Smart Saat"} width={100} nameProducts={SmartWatch} />
<Banner title={"Aksesuar"} width={100} nameProducts={Aksesuar} />
</div> */
}
