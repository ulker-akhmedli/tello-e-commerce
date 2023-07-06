import { commerce } from "../../commerce";

export const getCard = async ({ setLoading, setCards }) => {
  try {
    setLoading(true);
    const response = await commerce.cart.retrieve();
    console.log(response);
    setCards(response);
    setLoading(false);
    return response;
  } catch (err) {
    return err.message;
  }
};
export const updateCard = async (setLoading, setCards, { id, quantity }) => {
  try {
    setLoading(true);
    const response = await commerce.cart.update(id, {
      quantity,
    });
    setCards(response);
    setLoading(false);
    return response;
  } catch (err) {
    return err.message;
  }
};
export const removeCard = async (setLoading, setCards, id) => {
  try {
    setLoading(true);
    const response = await commerce.cart.remove(id);
    setCards(response);
    setLoading(false);
    return response;
  } catch (err) {
    return err.message;
  }
};
