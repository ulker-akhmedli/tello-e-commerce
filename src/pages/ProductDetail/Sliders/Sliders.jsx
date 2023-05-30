import React from "react";
import "./Sliders.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iphone from "../../../assets/iphone11.jpg";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };

  return (
    <div className="all-sliders">
      <Slider {...settings}>
        <div className="slide">
          <img src={Iphone} alt="iphone" />
        </div>
        <div className="slide">
          <img src={Iphone} alt="iphone" />
        </div>
        <div className="slide">
          <img src={Iphone} alt="iphone" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
