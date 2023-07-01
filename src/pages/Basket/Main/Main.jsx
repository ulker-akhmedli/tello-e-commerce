import React, { useEffect, useState } from "react";
import "./Main.scss";
import AZN from "../../../assets/azn.svg";
import Delete from "../../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import { updateCard, removeCard } from "../../../store/actions/card";

const Main = ({
  name,
  price,
  image,
  quantity,
  item_id,
  product_id,
  setLoading,
  setCards,
}) => {
  const [productQuantity, setQuantity] = useState(quantity);
  const navigate = useNavigate();
  const handleDecrement = () => {
    if (productQuantity > 1) {
      setQuantity((prev) => prev - 1);
      updateCard({
        setLoading,
        setCards,
        id: item_id,
        quantity: productQuantity - 1,
      });
    } else {
      removeCard({ setLoading, setCards, id: item_id });
    }
  };

  // console.log(productQuantity);
  // console.log(quantity);

  const handleIncrement = () => {
    if (productQuantity < 10) {
      setQuantity((prev) => prev + 1);
      updateCard({
        setLoading,
        setCards,
        id: item_id,
        quantity: productQuantity + 1,
      });
    }
  };
  const deleteFromCard = () => {
    removeCard({
      setLoading,
      setCards,
      id: item_id,
    });
  };
  const goToProduct = () => {
    navigate(`/details/${product_id}`);
  };
  return (
    <div className="mainCart">
      <div onClick={goToProduct} className="cart-photo">
        <img src={image} alt="phone" />
      </div>
      <div className="content">
        <span className="name">{name}</span>
        <div className="cart-detail">
          <div className="card-color">
            <span className="color">Rəng:</span>
            <span>Bənövşəyi</span>
          </div>
          <span className="price">
            {price} <img src={AZN} alt="AZN" />
          </span>
        </div>
      </div>
      <div className="numberCarts">
        <button onClick={handleDecrement}>-</button>
        <span>{productQuantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <img
        onClick={deleteFromCard}
        className="deleteIcon"
        src={Delete}
        alt="delete"
      />
    </div>
  );
};

export default Main;
