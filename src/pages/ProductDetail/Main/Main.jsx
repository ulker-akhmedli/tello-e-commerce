import React, { useState } from "react";
import "./Main.scss";
import AZN from "../../../assets/azn.svg";
import Cart from "../../../assets/cart.svg";
import { commerce } from "../../../commerce";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = ({
  name,
  id,
  price,
  variant_groups,
  currentVariant,
  setCurrentVariant,
}) => {
  const [quantity, setQuantity] = useState(1);

  const notifyMe = () => {
    toast.success("Added to your cart!");
    // toast.error("Error!", {
    //   position: "top-right",
    // });
  };
  const color = variant_groups?.find((el) => el.name == "color");
  const storage = variant_groups?.find((el) => el.name == "storage");
  const changeColor = (id) => {
    const selectedColor = color.options.find((el) => el.id == id);
    setCurrentVariant((prev) => ({ ...prev, color: selectedColor }));
  };
  const changeStorage = (id) => {
    const selectedStorage = storage.options.find((el) => el.id == id);
    setCurrentVariant((prev) => ({ ...prev, storage: selectedStorage }));
  };
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
    let variant = {};
    if (color?.options || storage?.options) {
      variant_groups.forEach((el) => {
        if (el.name == "color") {
          variant[el.id] = currentVariant.color.id;
        }
        if (el.name == "storage") {
          variant[el.id] = currentVariant.storage.id;
        }
      });
    }
    commerce.cart.add(id, quantity, variant).then((response) => {
      notifyMe();
    });
  }
  return (
    <div className="main-info">
      <div className="title">
        <h1>{`${name} ${currentVariant?.color?.name || ""} ${
          currentVariant?.storage?.name || ""
        }`}</h1>
        <div className="price">
          <span>{price}</span>
          <img src={AZN} alt="azn" />
        </div>
      </div>
      {(color?.options || storage?.options) && (
        <div className="main-details">
          <div className="main-color">
            {color?.options && <span>Rəng:</span>}
            <div className="colors">
              {color?.options.map((el) => {
                return (
                  <div
                    key={el.id}
                    className={
                      currentVariant.color.name == el.name
                        ? "color active"
                        : "color"
                    }
                    style={{ backgroundColor: el.name }}
                    onClick={() => changeColor(el.id)}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="memory">
            {storage?.options && <span>Yaddaş:</span>}
            <div className="memorys">
              {storage?.options.map((el) => {
                return (
                  <div
                    key={el.id}
                    className={
                      currentVariant.storage.name == el.name
                        ? "option active"
                        : "option"
                    }
                    style={{ backgroundColor: el.name }}
                    onClick={() => changeStorage(el.id)}
                  >
                    {el.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

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
      <ToastContainer />
    </div>
  );
};

export default Main;
