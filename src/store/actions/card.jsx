// import { token } from "../../commerce";
// import axios from "axios";
import { commerce } from "../../commerce";

// const headers = {
//   "X-Authorization": token,
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

// export const getCard = async (setLoading, setCards, cartId) => {
//   const url = new URL(`https://api.chec.io/v1/carts/${cartId}`);
//   try {
//     setLoading(true);
//     const { data: response } = await axios.get(url, { headers });
//     setCards(response.data);
//     console.log(response.data);
//     setLoading(false);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return err.message;
//   }
// };

export const getCard = async () => {
  try {
    const response = await commerce.cart.retrieve();
    return response;
  } catch (err) {
    return err.message;
  }
};
