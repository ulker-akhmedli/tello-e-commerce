import React, { useState } from "react";
import "./Main.scss";
import AZN from "../../../assets/azn.svg";
import Cart from "../../../assets/cart.svg";
import { commerce } from "../../../commerce";

const Main = ({ name, price, id, variant_groups }) => {
  const color = variant_groups?.find((el) => el.name == "color");
  const storage = variant_groups?.find((el) => el.name == "storage");

  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity((prev) => prev + 1);
    }
  };
  async function addToBasket() {
    commerce.cart.add({ id }, 1).then((response) => console.log(response));
  }
  return (
    <div className="main-info">
      <div className="title">
        <h1>{name}</h1>
        <div className="price">
          <span>{price}</span>
          <img src={AZN} alt="azn" />
        </div>
      </div>
      <div className="main-details">
        <div className="main-color">
          <span>Rəng:</span>
          <div className="colors">
            {color?.options.map((el) => {
              return (
                <div
                  key={el.id}
                  className="color"
                  style={{ backgroundColor: el.name }}
                  onClick={() => console.log(el.id)}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="memory">
          <span>Yaddaş:</span>
          <div className="memorys">
            {storage?.options.map((el) => {
              return (
                <div
                  key={el.id}
                  style={{ backgroundColor: el.name }}
                  onClick={() => console.log(el.id)}
                >
                  {el.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="numberCarts">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      {/* <Button btn={"Səbətə at"} /> */}
      <button className="addCart" onClick={addToBasket}>
        Səbətə at
        <img src={Cart} alt="basket" />
      </button>
    </div>
  );
};

export default Main;
