import React from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import Phones from "../../../assets/phones.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="all">
      <Slider {...settings}>
        <div className="sliders">
          <div className="slide">
            <div className="slider-info">
              <h4>Buy & Sell What's Now & Next</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                malesuada et leo faucibus
              </p>
            </div>
            <div className="slider-image">
              <img src={Phones} alt="" />
            </div>
          </div>
        </div>
        <div className="sliders">
          <div className="slide">
            <div className="slider-info">
              <h4>Buy & Sell What's Now & Next</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                malesuada et leo faucibus
              </p>
            </div>
            <div className="slider-image">
              <img src={Phones} alt="" />
            </div>
          </div>
        </div>
        <div className="sliders">
          <div className="slide">
            <div className="slider-info">
              <h4>Buy & Sell What's Now & Next</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                malesuada et leo faucibus
              </p>
            </div>
            <div className="slider-image">
              <img src={Phones} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
