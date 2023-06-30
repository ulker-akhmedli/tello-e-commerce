import React, { useEffect, useState } from "react";
import "./Basket.scss";
import Amount from "./Amount/Amount";
import Main from "./Main/Main";
import { getCard } from "../../store/actions/card";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";

const Basket = () => {
  const [card, setCards] = useState({});
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    getCard({ setLoading, setCards });
  }, []);
  // console.log(card);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!loading && card.total_items === 0) {
    return <EmptyBasket />;
  }
  return (
    <div className="basket">
      <h4>Səbət ( {card.total_items} məhsul)</h4>
      <div className="main-content">
        <div className="main-container">
          {card?.line_items?.map((el) => {
            return (
              <Main
                key={el.id}
                item_id={el.id}
                product_id={el.product_id}
                name={el.variant?.description || el.product_name}
                price={el.price.raw}
                image={el.image.url}
                quantity={el.quantity}
                options={el?.selected_options}
                setLoading={setLoading}
                setCards={setCards}
              />
            );
          })}
        </div>
        <Amount card={card} />
      </div>
    </div>
  );
};

export default Basket;
