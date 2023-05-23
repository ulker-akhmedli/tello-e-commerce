import React from "react";
import "./Advert.scss";
import Iphone11 from "../../assets/iphone11.jpg";
import Airtag from "../../assets/airtag.jpeg"
const Advert = () => {
  return (
    <div className="adverts">
      <div className="advert">
        <div className="advert-info">
          <h4>Iphone 11</h4>
          <h4>Rəngli.Güclü</h4>
          <h4>Əsl sizə lazım olan</h4>
          <div className="price">
            <span>1 519 AZN</span>
            <span className="second">Faizsiz taksitlə 127 AZN-dən</span>
          </div>
          <button>İndi alın</button>
        </div>
        <div className="advImg">
          <img src={Iphone11} alt="Iphone11" />
        </div>
      </div>
      <div className="advert sec">
        <div className="advert-info">
          <h4>Airtag</h4>
          <h4>Əşyalarınızı tapmağın ən asan yolu</h4>
          <div className="price">
            <span>79 AZN-dən</span>
          </div>
          <button>İndi alın</button>
        </div>
        <div className="advImg">
          <img src={Airtag} alt="Iphone11" />
        </div>
      </div>
    </div>
  );
};

export default Advert;
