import { commerce } from "../../commerce";

export const getCard = async ({ setLoading, setCards }) => {
  try {
    setLoading(true);
    const response = await commerce.cart.retrieve();
    setCards(response);
    setLoading(false);
    return response;
  } catch (err) {
    return err.message;
  }
};
export const updateCard = async ({ setLoading, setCards, params }) => {
  try {
    setLoading(true);
    const response = await commerce.cart.update(params.id, {
      quantity: quantity,
    });
    setCards(response);
    setLoading(false);
    return response;
  } catch (err) {
    return err.message;
  }
};

export const removeCard = async ({ setLoading, setCards, params }) => {
  try {
    setLoading(true);
    const response = await commerce.cart.remove(params.id);
    setCards(response);
    setLoading(false);
    return response;
  } catch (err) {
    return err.message;
  }
};
