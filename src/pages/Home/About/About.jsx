import React from "react";
import "./About.scss";
import Box from "../../../assets/box.png";
import Cardpos from "../../../assets/card-pos.png";
import Guarantee from "../../../assets/guarantee.png";

const About = () => {
  return (
    <div className="about">
      <div className="details">
        <img src={Box} alt="box" />
        <h4>Çatdırılma</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
      </div>
      <div className="details">
        <img src={Cardpos} alt="card" />
        <h4>Kredit</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
      </div>
      <div className="details">
        <img src={Guarantee} alt="box" />
        <h4>Zəmanət</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
      </div>
    </div>
  );
};

export default About;
